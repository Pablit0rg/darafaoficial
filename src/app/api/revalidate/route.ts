// src/app/api/revalidate/route.ts

import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Rota de API para revalidação de cache sob demanda (On-Demand ISR).
 * Esta rota é projetada para ser acionada por um webhook (ex: de um CMS)
 * para invalidar o cache de páginas específicas quando o conteúdo é atualizado.
 *
 * @param {NextRequest} request - O objeto da requisição Next.js.
 * @returns {Promise<NextResponse>} Uma resposta JSON indicando o resultado da operação.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // 1. Extração segura do corpo da requisição (espera-se um JSON).
    const body = await request.json();
    const { secret, path } = body;

    // 2. Validação do Token de Segurança (Secret).
    // Comparamos o 'secret' fornecido na requisição com uma variável de ambiente.
    // Esta é uma medida de segurança crucial para garantir que apenas sistemas
    // autorizados possam acionar a revalidação.
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { message: 'Token de revalidação inválido' },
        { status: 401 } // 401 Unauthorized
      );
    }

    // 3. Validação e Normalização do Caminho (Path).
    // Se nenhum caminho for fornecido, assumimos a revalidação da página inicial.
    const pathToRevalidate = path || '/';

    // 4. Execução da Revalidação.
    // A função `revalidatePath` do Next.js invalida o cache para o caminho especificado.
    // Na próxima vez que um usuário acessar esta página, o Next.js a regenerará do zero (Server-Side Rendering)
    // e armazenará a nova versão em cache.
    revalidatePath(pathToRevalidate);

    // 5. Resposta de Sucesso.
    // Retornamos uma resposta detalhada confirmando a revalidação bem-sucedida,
    // incluindo o caminho revalidado e um timestamp.
    return NextResponse.json({
      revalidated: true,
      path: pathToRevalidate,
      timestamp: Date.now(),
    });

  } catch (error: any) {
    // 6. Tratamento de Erros.
    // Se qualquer parte do processo falhar (ex: JSON malformado, erro inesperado),
    // capturamos o erro e retornamos uma resposta 500 (Internal Server Error).
    // Isso evita que a API quebre e nos permite diagnosticar o problema.
    // A mensagem de erro específica é incluída para facilitar a depuração.
    return NextResponse.json(
        { message: error.message },
        { status: 500 }
    );
  }
}
