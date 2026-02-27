"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Lógica de Interceptação 404 (Not Found)
 * Impede que o usuário veja a tela de erro genérica do servidor.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-center px-6">
      <h2 className="font-serif text-6xl md:text-8xl text-white mb-4">404</h2>
      <p className="text-gray-400 uppercase tracking-widest text-xs md:text-sm mb-8">
        A página que você procura não existe.
      </p>
      
      <Link 
        href="/"
        className="border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition-all duration-500"
      >
        Retornar ao Início
      </Link>

      <div className="absolute bottom-10 text-[10px] uppercase tracking-widest text-gray-600">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </div>
  );
}