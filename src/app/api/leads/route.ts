// src/app/api/leads/route.ts

import { NextResponse } from 'next/server';
import { z } from "zod";

/**
 * Lista de origens permitidas para a requisicao.
 * Apenas requisições vindas desses domínios serão processadas.
 */
const allowedOrigins = [
  'https://www.darafa.com',
  'https://darafa.com',
  'http://localhost:3000',
];

/**
 * @type {Map<string, { count: number, lastReset: number }>}
 * Mapa em memória para rastrear as requisições por endereço IP.
 * Armazena a contagem de requisições e o timestamp do início da janela de observação.
 */
const rateLimit = new Map();

/**
 * Analisa a mensagem do lead e classifica sua intenção com base em palavras-chave.
 * @param {string} message - O conteúdo da mensagem a ser analisada.
 * @returns {string} - A tag de intenção ('URGENT_SALE', 'LOGISTICS', 'SUPPORT', 'GENERAL').
 */
function analyzeIntent(message: string): string {
  if (/(comprar|pix|orçamento|quero|fechar)/i.test(message)) {
    return 'URGENT_SALE';
  }
  if (/(prazo|frete|entrega|demora)/i.test(message)) {
    return 'LOGISTICS';
  }
  if (/(reparo|conserto|quebrou)/i.test(message)) {
    return 'SUPPORT';
  }
  return 'GENERAL';
}

/**
 * Schema de validação com Zod para o payload de entrada da API de leads.
 * Garante que os dados recebidos estejam no formato correto antes do processamento.
 */
const leadSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  phone: z.string().optional(),
  message: z.string().optional(),
  _website_url_: z.string().optional(),
});


/**
 * Rota da API para captura de leads.
 * Implementa camadas de segurança (Rate Limit, CORS, Honeypot) para previnir spam.
 */
export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown';

  const aplicationRateLimit = {
    windowMs: 60000,
    max: 5,
  };

  const now = Date.now();
  const record = rateLimit.get(ip);

  if (record) {
    const timePassed = now - record.lastReset;
    if (timePassed > aplicationRateLimit.windowMs) {
      rateLimit.set(ip, { count: 1, lastReset: now });
    } else {
      record.count++;
      if (record.count > aplicationRateLimit.max) {
        console.warn(
          `[API Leads] Rate Limit excedido para o IP: ${ip}. Requisições: ${record.count} em ${timePassed / 1000}s.`
        );
        return NextResponse.json(
          { error: 'Muitas tentativas. Por favor, aguarde um momento antes de tentar novamente.' },
          { status: 429 }
        );
      }
    }
  } else {
    rateLimit.set(ip, { count: 1, lastReset: now });
  }
  
  const origin = request.headers.get('origin');

  if (!origin || !allowedOrigins.includes(origin)) {
    console.warn(`[API Leads] Bloqueio de CORS: Tentativa de acesso da origem nao autorizada: ${origin}`);
    return new NextResponse(null, {
      status: 403,
      statusText: 'Acesso Negado',
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  let body;
  try {
    body = await request.json();
  } catch (error) {
    console.error('[API Leads] Erro de Parse do JSON:', error);
    return new NextResponse('JSON Inválido', { status: 400 });
  }

  const validation = leadSchema.safeParse(body);

  if (!validation.success) {
    console.warn('[API Leads] Validação do Zod falhou:', validation.error.flatten().fieldErrors);
    return NextResponse.json(
      { error: 'Dados inválidos.', details: validation.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const validatedData = validation.data;

  if (validatedData._website_url_ && validatedData._website_url_.length > 0) {
    console.log('[API Leads] Honeypot acionado. Bot detectado. Abortando silenciosamente.');
    return NextResponse.json(
      { success: true, message: 'Requisicao recebida.' },
      { status: 200 }
    );
  }

  const intentTag = analyzeIntent(validatedData.message || '');

  const leadDataWithIntent = {
    ...validatedData,
    _intent_tag_: intentTag,
  };

  console.log('[API Leads] Lead recebido com sucesso:', {
    name: leadDataWithIntent.name,
    email: leadDataWithIntent.email,
    _intent_tag_: leadDataWithIntent._intent_tag_,
  });

  return NextResponse.json(
    { success: true, message: 'Lead recebido com sucesso!' },
    { status: 200 }
  );
}