// src/proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Utilizando default export para garantir compatibilidade absoluta com o compilador
export default function proxy(request: NextRequest) {
  // 1. Extração dos Dados de Geolocalização do Edge
  // Estes cabeçalhos são injetados por plataformas como a Vercel.
  // Em ambiente de desenvolvimento local, eles não existem, então usamos 'Unknown' como fallback.
  const country = request.headers.get('x-vercel-ip-country') ?? 'Unknown';
  const region = request.headers.get('x-vercel-ip-region') ?? 'Unknown';
  const city = request.headers.get('x-vercel-ip-city') ?? 'Unknown';

  // 2. Clone dos Cabeçalhos da Requisição
  // Os cabeçalhos da requisição original são imutáveis. Para modificá-los,
  // precisamos primeiro cloná-los em uma nova instância de Headers.
  const newHeaders = new Headers(request.headers);

  // 3. Injeção do Cabeçalho de Geolocalização Personalizado
  // Criamos um novo cabeçalho 'x-customer-geo' que concatena as informações geográficas.
  // Este cabeçalho padronizado estará disponível em toda a aplicação (API Routes, Server Components).
  newHeaders.set('x-customer-geo', `${country}-${region}-${city}`);

  // 4. Proteção na Fronteira (Edge) contra bots de scraping agressivos
  const userAgent = request.headers.get('user-agent') || '';
  
  // Lista de crawlers que consomem banda sem gerar valor orgânico
  const badBots = ['SemrushBot', 'AhrefsBot', 'MJ12bot', 'DotBot', 'PetalBot', 'Bytespider'];
  const isBadBot = badBots.some(bot => userAgent.includes(bot));

  if (isBadBot) {
    // Intercepta e rejeita a conexão antes de consumir recursos do servidor
    return new NextResponse('Acesso negado. Tráfego não autorizado.', { status: 403 });
  }

  // 5. Propagação dos Novos Cabeçalhos para a Aplicação
  // Continuamos o ciclo de vida da requisição, mas com os cabeçalhos modificados.
  const response = NextResponse.next({
    request: {
      headers: newHeaders,
    },
  });

  // 6. Injeção Dinâmica de Cabeçalhos de Segurança Rigorosos na Resposta
  // Estes cabeçalhos são adicionados à RESPOSTA que vai para o cliente.
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');

  return response;
}

// Configuração do Matcher: Define onde o proxy deve ser executado
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};