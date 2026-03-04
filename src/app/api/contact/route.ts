// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { fetchWithRetry } from '@/lib/fetch-retry';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sanitizeText = (text: string) => text.replace(/[<>]/g, '').trim();

export async function POST(request: Request) {
  try {
    if (!request.body) {
      return NextResponse.json({ error: 'Corpo da requisicao vazio.' }, { status: 400 });
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !sanitizeText(name)) {
      return NextResponse.json({ error: 'Nome e obrigatorio.' }, { status: 400 });
    }

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email invalido ou ausente.' }, { status: 400 });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/contact';

    // ARQUITETURA BLINDADA: Usando o nosso novo utilitário com até 3 tentativas
    await fetchWithRetry(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: sanitizeText(name),
        email: email.toLowerCase().trim(),
        phone: phone ? sanitizeText(phone) : 'Nao informado',
        message: message ? sanitizeText(message) : 'Sem mensagem',
        source: 'darafa_landing_page',
        timestamp: new Date().toISOString(),
      }),
    }, 3, 1000); // 3 retentativas com 1000ms (1s) de intervalo

    return NextResponse.json(
      { success: true, message: 'Dados higienizados e entregues com garantia de resiliencia.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API Contato] Erro critico na rota após todas as tentativas:', error);
    return NextResponse.json(
      { error: 'Erro interno no processamento da requisicao. O sistema tentou reestabelecer a conexao, mas falhou.' },
      { status: 500 }
    );
  }
}