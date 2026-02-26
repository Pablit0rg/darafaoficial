/**
 * Utilitário de Logging Centralizado
 * Foco: Rastreabilidade sem poluição visual no console de produção.
 */

const isDev = process.env.NODE_ENV === "development";

export const logger = {
  // Log de informação técnica
  info: (message: string, data?: any) => {
    if (isDev) {
      console.info(`[INFO]: ${message}`, data || "");
    }
  },

  // Log de erro crítico (sempre loga, mas pode ser expandido para telemetria)
  error: (message: string, error?: any) => {
    console.error(`[ERROR]: ${message}`, error || "");
    // Aqui poderíamos enviar para o Sentry ou Firebase Crashlytics no futuro
  },

  // Log de aviso para infraestrutura
  warn: (message: string) => {
    if (isDev) {
      console.warn(`[WARN]: ${message}`);
    }
  }
};