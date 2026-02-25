"use client";
// src/components/layout/Footer.tsx

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="py-10 border-t border-white/10 bg-brand-black text-center md:text-left relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-600 gap-6 md:gap-4">
        
        {/* Copyright */}
        <div>
          © {currentYear} Darafa. Todos os direitos reservados.
        </div>
        
        {/* Navegação e Links */}
        <div className="flex items-center gap-6">
          <button 
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer uppercase outline-none"
          >
            Início
          </button>
          
          {/* Link de Localização (Mapa) */}
          <Link 
            href="https://maps.google.com/?q=Curitiba,+PR" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-all group flex items-center gap-1"
          >
            <span>Curitiba, PR</span>
            <span className="text-[10px] opacity-50 group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300">
              ↗
            </span>
          </Link>

          {/* Divisória Sutil */}
          <div className="w-[1px] h-3 bg-white/20"></div>

          {/* Ícone Minimalista do Instagram com Efeito Colorido no Hover */}
          <Link 
            href="https://instagram.com/darafa_cwb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative flex items-center justify-center w-[16px] h-[16px] hover:scale-110 transition-transform duration-300 group"
            aria-label="Instagram Oficial DaRafa"
          >
            {/* Ícone Padrão (Soma no Hover) */}
            <svg className="absolute text-gray-500 group-hover:opacity-0 transition-opacity duration-300" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>

            {/* Ícone Colorido Gradiente (Aparece no Hover) */}
            <svg className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="url(#ig-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
        </div>

      </div>
    </footer>
  );
}