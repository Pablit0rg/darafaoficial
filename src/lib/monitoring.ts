/**
 * @file src/lib/monitoring.ts
 * @description Utilitário de Observabilidade Ativa para Alertas de Anomalias.
 *
 * @strategy Fire-and-Forget Webhook
 * Este módulo centraliza o disparo de alertas para eventos críticos ou anômalos na infraestrutura.
 * A principal diretriz arquitetural é a resiliência: a falha no envio de um alerta NUNCA
 * deve impactar, atrasar ou quebrar o fluxo principal da aplicação. O envio é feito
 * de forma assíncrona e envolvido em um bloco try/catch que falha silenciosamente (apenas loga o erro).
 *
 * @usage
 * Importe `triggerAnomalyAlert` em qualquer ponto do back-end onde uma anomalia possa ser detectada.
 * Exemplos:
 * - Dentro de um `catch` de uma chamada de API crítica que falhou.
 * - Em um middleware que detecta um pico de tráfego incomum.
 * - Em uma rotina de segurança que identifica um comportamento suspeito.
 */

import { logger } from '@/lib/logger';

/**
 * Dispara um alerta de anomalia para um webhook de monitoramento configurado.
 * Se o webhook não estiver configurado, um log de aviso é gerado em seu lugar.
 * A função é projetada para não bloquear a execução e falhar silenciosamente.
 *
 * @param {"TRAFFIC_SPIKE" | "API_ERROR" | "SECURITY_BREACH"} type - O tipo de anomalia detectada.
 * @param {any} details - Um objeto contendo dados contextuais sobre o alerta para depuração.
 */
export async function triggerAnomalyAlert(
  type: "TRAFFIC_SPIKE" | "API_ERROR" | "SECURITY_BREACH",
  details: any
): Promise<void> {
  // 1. Validação da configuração do Webhook no ambiente.
  const alertWebhookUrl = process.env.ALERT_WEBHOOK_URL;

  if (!alertWebhookUrl) {
    // Se o webhook não estiver configurado, o sistema não para. Em vez disso, ele loga um aviso
    // informando que a anomalia foi detectada, mas o alerta não pôde ser enviado.
    logger.warn(
      '[Monitoring] Alerta de anomalia gerado, mas o webhook não está configurado.',
      {
        alertType: type,
        details,
      }
    );
    return; // Encerra a execução de forma limpa.
  }

  // 2. Construção do Payload do Alerta.
  const payload = {
    type,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    details,
  };

  // 3. Disparo "Fire-and-Forget" do Webhook.
  try {
    // A chamada fetch é intencionalmente "esquecida" (não usamos await no resultado)
    // para que a thread principal não espere pela resposta do serviço de monitoramento.
    fetch(alertWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    logger.info(`[Monitoring] Alerta de anomalia do tipo '${type}' disparado com sucesso.`);

  } catch (error) {
    // Se a chamada fetch falhar (ex: erro de DNS, serviço offline), o erro é capturado
    // e logado, mas NÃO é lançado novamente, protegendo o fluxo principal da aplicação.
    logger.error(
      '[Monitoring] Falha crítica ao enviar alerta de anomalia para o webhook.',
      {
        errorMessage: (error as Error).message,
        webhookUrl: alertWebhookUrl,
      }
    );
  }
}
