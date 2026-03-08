/**
 * @file src/lib/queue.ts
 * @description Dead Letter Queue (DLQ) de Emergência para Leads.
 *
 * @warning IMPLEMENTAÇÃO EM MEMÓRIA
 * Esta é uma implementação de DLQ "In-Memory" projetada para resiliência básica e
 * para fins de demonstração no portfólio. Em um ambiente de produção real,
 * a perda de dados ocorreria se o servidor reiniciasse.
 *
 * @future_prod
 * Para uma solução robusta e persistente, esta implementação será substituída por
 * um serviço de fila gerenciado. A biblioteca '@upstash/redis' será instanciada
 * aqui para fornecer uma DLQ persistente, aproveitando a infraestrutura Serverless.
 * ex: const dlq = new Redis({ url: process.env.UPSTASH_REDIS_URL, ... });
 */

import crypto from 'crypto';
import { logger } from '@/lib/logger';

/**
 * Interface que define a estrutura de um lead que falhou e foi para a DLQ.
 */
export interface FailedLead {
  id: string;          // ID único para rastreamento e remoção.
  payload: any;        // Os dados originais do lead que falharam.
  timestamp: string;   // ISO string de quando a falha foi enfileirada.
  retryCount: number;  // O número de tentativas feitas antes de desistir.
}

// Padrão Singleton para a fila em memória, garantindo uma única instância
// mesmo com o hot-reloading do Next.js em ambiente de desenvolvimento.
let dlq: FailedLead[];

if (process.env.NODE_ENV === 'production') {
  dlq = [];
} else {
  if (!(global as any).dlq) {
    (global as any).dlq = [];
  }
  dlq = (global as any).dlq;
}

/**
 * Enfileira um lead que falhou em todas as tentativas de envio na Dead Letter Queue.
 * @param {any} payload - O corpo de dados (payload) do lead.
 * @param {number} retryCount - O número total de tentativas realizadas.
 */
export function enqueueFailedLead(payload: any, retryCount: number): void {
  const failedLead: FailedLead = {
    id: crypto.randomUUID(),
    payload,
    timestamp: new Date().toISOString(),
    retryCount,
  };

  dlq.push(failedLead);

  // Loga um erro crítico para notificar a equipe de desenvolvimento/operações
  // sobre a falha persistente que requer atenção.
  logger.error(
    '[DLQ] Lead enfileirado após falha total de retries.',
    {
      leadId: failedLead.id,
      finalRetryCount: retryCount,
      payload: payload,
    }
  );
}

/**
 * Retorna todos os leads atualmente na Dead Letter Queue.
 * Útil para painéis administrativos ou ferramentas de depuração.
 * @returns {FailedLead[]} Uma cópia da fila de leads que falharam.
 */
export function getFailedLeads(): FailedLead[] {
  // Retornamos uma cópia para evitar mutações acidentais do array original.
  return [...dlq];
}

/**
 * Remove um lead específico da Dead Letter Queue após ser processado ou analisado.
 * @param {string} id - O ID do lead a ser removido.
 * @returns {boolean} - Retorna true se um lead foi encontrado e removido, false caso contrário.
 */
export function clearFailedLead(id:string): boolean {
  const index = dlq.findIndex(lead => lead.id === id);

  if (index > -1) {
    dlq.splice(index, 1);
    logger.info(`[DLQ] Lead com ID ${id} foi removido da fila.`);
    return true;
  }
  
  logger.warn(`[DLQ] Tentativa de remover lead com ID ${id}, mas não foi encontrado.`);
  return false;
}
