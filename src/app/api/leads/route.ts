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
 * Rota da API para captura de leads.
 * Implementa camadas de segurança (CORS, Honeypot) para previnir spam.
 */
export async function POST(request: Request) {
  const origin = request.headers.get('origin');

  // 1. VALIDAÇÃO DE CORS (Cross-Origin Resource Sharing)
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

  let body;
  try {
    // 2. VALIDAÇÃO DO CORPO (Payload)
    // Asseguramos que o dado recebido é um JSON válido. Se a estrutura estiver
    // corrompida, a requisição é descartada imediatamente.
    body = await request.json();
  } catch (error) {
    console.error('[API Leads] Erro de parsing do JSON. O corpo da requisicao esta malformatado.', error);
    return NextResponse.json(
      { error: 'Corpo da requisicao invalido. Esperado um JSON valido.' },
      { status: 400 } // Bad Request
    );
  }

  // 3. LÓGICA DE HONEYPOT (Armadilha para Bots)
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

  // 4. SUCESSO NA VALIDAÇÃO
  // Se a requisição passou por todas as barreiras de segurança, ela é considerada legítima.
  // Neste ponto, o lead está pronto para ser processado e enviado para a próxima etapa (n8n/Airtable).
  console.log('[API Leads] Lead legitimo recebido e validado com sucesso:', { name: body.name, email: body.email });

  // Simulando o envio futuro para o webhook.
  return NextResponse.json(
    { success: true, message: 'Dados estruturados e recebidos com sucesso.' },
    { status: 200 }
  );
}
