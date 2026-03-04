// src/lib/fetch-retry.ts

/**
 * Utilitário de infraestrutura para garantir a entrega de dados a webhooks externos.
 * Aplica o padrão de arquitetura "Retry com Delay" para tolerância a falhas.
 */
export async function fetchWithRetry(
  url: string, 
  options: RequestInit, 
  retries: number = 3, 
  delay: number = 1000
): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      
      // Se a resposta não for OK (ex: 500 Internal Server Error do n8n), força a cair no catch
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      return response; // Sucesso na requisição
    } catch (error) {
      const isLastAttempt = i === retries - 1;
      if (isLastAttempt) {
        console.error(`[Rede] Falha definitiva após ${retries} tentativas para ${url}`);
        throw error;
      }
      
      console.warn(`[Rede] Falha na tentativa ${i + 1}. Retentando em ${delay}ms...`);
      // Aguarda o tempo definido antes de tentar de novo
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw new Error('Falha inesperada no mecanismo de retry.');
}