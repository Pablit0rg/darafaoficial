/**
 * Utilitário de Logging Centralizado (Structured JSON Logging)
 * Foco: Rastreabilidade, LGPD/PII Sanitization, e Telemetria (Datadog/CloudWatch).
 */

const isDev = process.env.NODE_ENV === "development";

type LogLevel = 'INFO' | 'WARN' | 'ERROR';

interface LogPayload {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
}

/**
 * Sanitiza dados sensíveis (PII) antes de logar
 */
function sanitizeContext(context?: Record<string, any>): Record<string, any> | undefined {
  if (!context) return undefined;
  
  const sanitized = { ...context };
  
  // Mascarar e-mail se existir (LGPD)
  if (sanitized.email && typeof sanitized.email === 'string') {
    const [user, domain] = sanitized.email.split('@');
    if (domain) {
      sanitized.email = `${user.charAt(0)}***@${domain}`;
    } else {
      sanitized.email = '***';
    }
  }
  
  return sanitized;
}

function writeLog(level: LogLevel, message: string, context?: Record<string, any>) {
  // Em produção, ignoramos INFO e WARN para economizar processamento e não poluir logs.
  // Registramos apenas os ERROS críticos (restaurando sua lógica original).
  if (!isDev && level !== 'ERROR') {
    return;
  }

  const payload: LogPayload = {
    timestamp: new Date().toISOString(),
    level,
    message,
    context: sanitizeContext(context),
  };

  const logString = JSON.stringify(payload);

  if (level === 'ERROR') {
    console.error(logString);
  } else if (level === 'WARN') {
    console.warn(logString);
  } else {
    console.info(logString);
  }
}

export function logInfo(message: string, context?: Record<string, any>) {
  writeLog('INFO', message, context);
}

export function logWarn(message: string, context?: Record<string, any>) {
  writeLog('WARN', message, context);
}

export function logError(message: string, context?: Record<string, any>) {
  writeLog('ERROR', message, context);
}

// Adapter para manter retrocompatibilidade com as importações antigas do projeto
export const logger = {
  info: logInfo,
  warn: logWarn,
  error: logError,
};