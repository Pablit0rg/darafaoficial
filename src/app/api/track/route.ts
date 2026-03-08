
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { logger } from '@/lib/logger';

// 1. Definição do Schema com Zod
// Garante que os dados recebidos tenham o formato esperado.
// - eventName: uma string com no mínimo 2 caracteres.
// - payload: um objeto opcional com chaves e valores de qualquer tipo.
const eventSchema = z.object({
  eventName: z.string().min(2, { message: "O nome do evento é obrigatório." }),
  payload: z.record(z.string(), z.any()).optional(),
}).strict();

/**
 * Rota da API para Server-Side Tracking de eventos.
 * Valida, enriquece e registra os eventos enviados pelo client-side.
 */
export async function POST(request: Request) {
  let body;
  try {
    // 2. Parse Seguro do Corpo da Requisição
    // Tentamos extrair o JSON. Se falhar (ex: corpo malformado), capturamos o erro.
    body = await request.json();
  } catch (error) {
    logger.error('[API Track] Erro de Parse do JSON:', { error });
    return new NextResponse('JSON Inválido', { status: 400 });
  }

  // 3. Validação dos Dados com Zod
  const validation = eventSchema.safeParse(body);

  if (!validation.success) {
    // Se a validação falhar, registramos o erro e retornamos uma resposta 400.
    logger.warn('[API Track] Falha na validação do Zod:', {
      errors: validation.error.flatten().fieldErrors,
    });
    return NextResponse.json(
      { 
        message: 'Dados inválidos', 
        errors: validation.error.flatten().fieldErrors 
      }, 
      { status: 400 }
    );
  }

  // 4. Extração e Enriquecimento dos Dados
  // Pegamos o IP e o User-Agent do cliente para enriquecer o log do evento.
  // 'x-forwarded-for' é o padrão em ambientes com proxy como a Vercel.
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown';
  const userAgent = request.headers.get('user-agent') ?? 'unknown';
  
  const { eventName, payload } = validation.data;

  // 5. Registro Estruturado do Evento
  // Logamos o evento de forma estruturada. Isso facilita a análise e a integração
  // com outras ferramentas, como um futuro webhook para a API de Conversões do Facebook.
  logger.info('[API Track] Evento Recebido', {
    eventName,
    payload: payload || {},
    ip,
    userAgent,
  });

  // 6. Resposta de Sucesso
  // Informamos ao cliente que o evento foi recebido e processado com sucesso.
  return NextResponse.json(
    { message: 'Evento rastreado com sucesso' },
    { status: 200 }
  );
}
