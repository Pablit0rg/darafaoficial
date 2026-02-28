import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, source } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Parametro email e obrigatorio para o lead.' },
        { status: 400 }
      );
    }

    const leadPayload = {
      name: name || 'Nao informado',
      email,
      phone: phone || 'Nao informado',
      source: source || 'darafa_organico',
      timestamp: new Date().toISOString(),
    };

    // A chamada real (fetch) para o webhook do n8n ou Airtable sera acoplada aqui.
    console.log('[Webhook Leads] Carga preparada para a esteira:', leadPayload);

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