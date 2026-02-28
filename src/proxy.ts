// src/proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Utilizando default export para garantir compatibilidade absoluta com o compilador
export default function proxy(request: NextRequest) {
  // 1. Proteção na Fronteira (Edge) contra bots de scraping agressivos
  const userAgent = request.headers.get('user-agent') || '';
  
  // Lista de crawlers que consomem banda sem gerar valor orgânico
  const badBots = ['SemrushBot', 'AhrefsBot', 'MJ12bot', 'DotBot', 'PetalBot', 'Bytespider'];
  const isBadBot = badBots.some(bot => userAgent.includes(bot));

  if (isBadBot) {
    // Intercepta e rejeita a conexão antes de consumir recursos do servidor
    return new NextResponse('Acesso negado. Tráfego não autorizado.', { status: 403 });
  }

  // 2. Continua o ciclo de vida da requisição
  const response = NextResponse.next();

  // 3. Injeção Dinâmica de Cabeçalhos de Segurança Rigorosos
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