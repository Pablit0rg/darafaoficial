// src/lib/fetch-retry.ts

/**
 * Utilitário de infraestrutura para garantir a entrega de dados a webhooks externos.
 * Aplica os padrões de arquitetura "Exponential Backoff com Jitter" e "Timeout Abort"
 * para tolerância a falhas de rede e instabilidade do servidor de destino.
 */
export async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries: number = 3,
  timeoutMs: number = 8000 // Limite estrito de 8 segundos por requisição
): Promise<Response> {

  // Constantes para a estratégia de recuo exponencial.
  const baseDelay = 1000; // 1 segundo de espera base
  const jitter = 200; // 200ms de variação aleatória para evitar picos de carga

  for (let i = 0; i < retries; i++) {
    // Cria um controlador para poder "matar" a requisição se demorar muito
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal // Acopla o cronômetro na requisição
      });

      clearTimeout(timeoutId); // Desarma o timeout se a resposta chegar a tempo

      if (!response.ok) {
        // Se a resposta HTTP não for bem-sucedida (ex: 404, 500), trata como erro para acionar a retentativa
        throw new Error(`HTTP ${response.status}`);
      }

      // Se a requisição for bem-sucedida, retorna a resposta imediatamente.
      return response;
    } catch (error: any) {
      clearTimeout(timeoutId); // Desarma o timeout também em caso de erro

      const isLastAttempt = i === retries - 1;
      if (isLastAttempt) {
        console.error(`[Rede] Falha definitiva após ${retries} tentativas para ${url}. Erro: ${error.message}`);
        // Lança o erro original para que o chamador da função possa tratá-lo.
        throw error;
      }

      // 1. CÁLCULO DO ATRASO COM EXPONENTIAL BACKOFF
      // O tempo de espera aumenta exponencialmente a cada tentativa.
      // Ex: Tentativa 0: 1000ms, Tentativa 1: 2000ms, Tentativa 2: 4000ms...
      const exponentialDelay = baseDelay * (2 ** i);
      
      // 2. ADIÇÃO DO JITTER (ALEATORIEDADE)
      // Adiciona uma pequena variação aleatória para evitar que múltiplas instâncias
      // tentem se reconectar exatamente ao mesmo tempo (problema "Thundering Herd").
      const delayWithJitter = exponentialDelay + (Math.random() * jitter);

      const errorMessage = error.name === 'AbortError' 
        ? 'Timeout (Demora excessiva do servidor destino)' 
        : error.message;

      console.warn(
        `[Rede] Falha na tentativa ${i + 1} para ${url}. Motivo: ${errorMessage}. ` +
        `Retentando em ${delayWithJitter.toFixed(0)}ms...`
      );

      // 3. PAUSA A EXECUÇÃO
      // Aguarda o tempo calculado antes de prosseguir para a próxima iteração do loop.
      await new Promise(resolve => setTimeout(resolve, delayWithJitter));
    }
  }

  // Medida de segurança para o TypeScript: se o loop terminar, lança um erro.
  // Em um cenário normal, o código nunca chegará aqui.
  throw new Error('[Rede] Falha inesperada no fetchWithRetry: O loop de tentativas terminou sem uma resolução.');
}
