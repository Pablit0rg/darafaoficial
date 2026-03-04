// src/lib/fetch-retry.ts

/**
 * Utilitário de infraestrutura para garantir a entrega de dados a webhooks externos.
 * Aplica o padrão de arquitetura "Retry com Delay" e "Timeout Abort" para tolerância a falhas.
 */
export async function fetchWithRetry(
  url: string, 
  options: RequestInit, 
  retries: number = 3, 
  delay: number = 1000,
  timeoutMs: number = 8000 // Limite estrito de 8 segundos por requisição
): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    // Cria um controlador para poder "matar" a requisição se demorar muito
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal // Acopla o cronômetro na requisição
      });
      
      clearTimeout(timeoutId); // Desarma a bomba se a resposta chegar rápido
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      return response; 
    } catch (error: any) {
      clearTimeout(timeoutId); // Desarma a bomba também no caso de erro rápido
      
      const isLastAttempt = i === retries - 1;
      if (isLastAttempt) {
        console.error(`[Rede] Falha definitiva após ${retries} tentativas para ${url}`);
        throw error;
      }
      
      // Identifica se a falha foi pelo nosso limite de tempo ou outro erro
      const errorMessage = error.name === 'AbortError' ? 'Timeout (Demora excessiva do servidor destino)' : error.message;
      console.warn(`[Rede] Falha na tentativa ${i + 1} motivo: ${errorMessage}. Retentando em ${delay}ms...`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw new Error('Falha inesperada no mecanismo de retry.');
}