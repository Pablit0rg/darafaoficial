// src/app/api/leads/route.ts

import { NextResponse } from 'next/server';

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
 * Rota da API para captura de leads.
 * Implementa camadas de segurança (Rate Limit, CORS, Honeypot) para previnir spam.
 */
export async function POST(request: Request) {
  // 1. OBTENÇÃO DO IP DO CLIENTE
  // Extrai o IP do cliente dos headers da requisição.
  // 'x-forwarded-for' é comum em ambientes com proxy (como Vercel, Netlify).
  // 'x-real-ip' é outra alternativa.
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown';

  // 2. LÓGICA DE RATE LIMITING (CONTROLE DE REQUISIÇÕES)
  // Define o limite: 5 requisições por IP a cada 1 minuto.
  const aplicationRateLimit = {
    windowMs: 60000, // 1 minuto em milissegundos
    max: 5, // número máximo de requisições permitidas na janela de tempo
  };

  const now = Date.now();
  const record = rateLimit.get(ip);

  if (record) {
    const timePassed = now - record.lastReset;
    // Se a janela de tempo já passou, reinicia o contador.
    if (timePassed > aplicationRateLimit.windowMs) {
      rateLimit.set(ip, { count: 1, lastReset: now });
    } else {
      record.count++;
      // Se o contador exceder o limite, bloqueia a requisição.
      if (record.count > aplicationRateLimit.max) {
        console.warn(
          `[API Leads] Rate Limit excedido para o IP: ${ip}. Requisições: ${record.count} em ${timePassed / 1000}s.`
        );
        return NextResponse.json(
          { error: 'Muitas tentativas. Por favor, aguarde um momento antes de tentar novamente.' },
          { status: 429 } // 429 Too Many Requests
        );
      }
    }
  } else {
    // Se não houver registro para este IP, cria um novo.
    rateLimit.set(ip, { count: 1, lastReset: now });
  }
  
  const origin = request.headers.get('origin');

  // 3. VALIDAÇÃO DE CORS (Cross-Origin Resource Sharing)
  // Princípio Zero-Trust: Rejeitamos qualquer requisição cuja origem não esteja
  // na nossa lista de domínios autorizados. Isso bloqueia scripts maliciosos de outros sites.
  if (!origin || !allowedOrigins.includes(origin)) {
    console.warn(`[API Leads] Bloqueio de CORS: Tentativa de acesso da origem nao autorizada: ${origin}`);
    return new NextResponse(null, {
      status: 403, // Forbidden
      statusText: 'Acesso Negado',
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  // 4. PARSE SEGURO DO CORPO DA REQUISIÇÃO
  // Envolvemos o parse do JSON em um bloco try-catch para lidar com
  // requisições que não contenham um JSON válido, evitando que a API quebre.
  let body;
  try {
    body = await request.json();
  } catch (error) {
    console.error('[API Leads] Erro de Parse do JSON:', error);
    return new NextResponse('JSON Inválido', { status: 400 });
  }

  // 5. LÓGICA DE HONEYPOT (Armadilha para Bots)
  // Este é um campo "invisível" no formulário do frontend. Bots de spam tendem a
  // preencher todos os campos que encontram. Se este campo tiver qualquer valor,
  // é um forte indicativo de que a submissão é automatizada.
  if (body._website_url_ && body._website_url_.length > 0) {
    console.log('[API Leads] Honeypot acionado. Bot detectado. Abortando silenciosamente.');
    // Retornamos uma resposta de sucesso (200 OK) para enganar o bot,
    // fazendo-o pensar que o spam foi bem-sucedido, sem processar o dado.
    return NextResponse.json(
      { success: true, message: 'Requisicao recebida.' },
      { status: 200 }
    );
  }

  // Se todas as verificações de segurança passarem, o fluxo continua aqui.
  // ... lógica para processar o lead (ex: salvar no banco de dados) ...
  console.log('[API Leads] Lead recebido com sucesso:', {
    name: body.name,
    email: body.email,
  });

  return NextResponse.json(
    { success: true, message: 'Lead recebido com sucesso!' },
    { status: 200 }
  );
}