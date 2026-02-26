import type { NextConfig } from "next";

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
            key: "X-Frame-Options",
            value: "DENY", // Impede que o site seja embutido em iframes (Clickjacking)
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // Força o bloqueio caso detecte script malicioso refletido
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Protege informações de roteamento do usuário
          },
        ],
      },
    ];
  },
};

export default nextConfig;
