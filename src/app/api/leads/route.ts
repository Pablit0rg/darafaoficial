// src/app/api/leads/route.ts
import { NextResponse } from 'next/server';

// Logica de validacao e higienizacao (Regex)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sanitizeText = (text: string) => text.replace(/[<>]/g, '').trim();

export async function POST(request: Request) {
  try {
    // Defesa contra payload vazio
    if (!request.body) {
      return NextResponse.json({ error: 'Corpo da requisicao vazio.' }, { status: 400 });
    }

    const body = await request.json();
    const { name, email, phone, source } = body;

    // Validacao rigorosa de formato de email
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Parametro email invalido ou ausente.' },
        { status: 400 }
      );
    }

    // Higienizacao (Sanitization) para prevenir injeção de HTML/Scripts no Airtable/n8n
    const leadPayload = {
      name: name ? sanitizeText(name) : 'Nao informado',
      email: email.toLowerCase().trim(),
      phone: phone ? sanitizeText(phone) : 'Nao informado',
      source: source ? sanitizeText(source) : 'darafa_organico',
      timestamp: new Date().toISOString(),
    };

    console.log('[Webhook Leads] Carga higienizada e preparada para a esteira:', leadPayload);

    return NextResponse.json(
      { success: true, message: 'Dados estruturados e recebidos com sucesso.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API Leads] Erro interno de processamento:', error);
    return NextResponse.json(
      { error: 'Falha na integracao de infraestrutura.' },
      { status: 500 }
    );
  }
}