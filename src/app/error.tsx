"use client";

import { useEffect } from "react";
import { logger } from "@/lib/logger";

/**
 * Boundary de Erro Global
 * Captura exceções na árvore de componentes e permite tentativa de recuperação (reset).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  // Utiliza a infraestrutura de log que criamos anteriormente para rastreabilidade
  useEffect(() => {
    logger.error("Falha capturada no Error Boundary global", error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Algo não saiu como esperado.
          </h2>
          <p className="text-gray-400 font-light mb-8 max-w-md">
            Encontramos uma instabilidade técnica. Nossa arquitetura já registrou a ocorrência.
          </p>
          
          <button
            onClick={() => reset()}
            className="border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            Tentar Novamente
          </button>
        </div>
      </body>
    </html>
  );
}