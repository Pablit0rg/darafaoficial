// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Protecção na Fronteira (Edge) contra bots de scraping agressivos
  const userAgent = request.headers.get('user-agent') || '';
  
  // Lista de crawlers que consomem banda sem gerar valor orgânico (ex: ferramentas de SEO de terceiros)
  const badBots = ['SemrushBot', 'AhrefsBot', 'MJ12bot', 'DotBot', 'PetalBot', 'Bytespider'];
  const isBadBot = badBots.some(bot => userAgent.includes(bot));

  if (isBadBot) {
    // Intercepta e rejeita a conexão antes de consumir recursos do servidor React
    return new NextResponse('Acesso negado. Tráfego não autorizado.', { status: 403 });
  }

  // 2. Continua o ciclo de vida da requisição para utilizadores e motores de busca legítimos
  const response = NextResponse.next();

  // 3. Injecção Dinâmica de Cabeçalhos de Segurança Rigorosos
  // Força os navegadores a comunicarem exclusivamente via HTTPS (Preload pronto)
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  
  // Previne ataques de Clickjacking (impede que o site seja encapsulado em iframes maliciosos)
  response.headers.set('X-Frame-Options', 'DENY');
  
  // Bloqueia tentativas de alteração de MIME types (Sniffing)
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Fundação para Testes A/B (A ser expandida nas próximas sprints)
  // const url = request.nextUrl.clone();
  
  return response;
}

// Configuração do Matcher: Define onde o middleware deve ser executado
export const config = {
  matcher: [
    /*
     * Aplica o middleware a todas as rotas do site, EXCEPTO:
     * - api (rotas de API internas, que podem ter a sua própria validação)
     * - _next/static (ficheiros estáticos gerados pelo build)
     * - _next/image (optimizador nativo de imagens)
     * - favicon.ico, sitemap.xml, robots.txt (arquivos estruturais)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};