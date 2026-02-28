import type { NextConfig } from "next";

// Define a Política de Segurança de Conteúdo (CSP)
// Ajustada para compatibilidade com o ambiente de desenvolvimento do Google Project IDX
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self' data:;
  connect-src 'self' wss: https:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig: NextConfig = {
  // Lógica de injeção de cabeçalhos de segurança HTTP
  async headers() {
    return [
      {
        // Aplica as regras para todas as rotas da aplicação
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Previne ataques de MIME sniffing
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // Força o bloqueio caso detecte script malicioso refletido
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Protege informações de roteamento do usuário
          },
          {
            key: "Content-Security-Policy",
            value: cspHeader, // Blindagem contra XSS ajustada para permitir iframes do IDX
          },
        ],
      },
    ];
  },
};

export default nextConfig;
