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
          &copy; {currentYear} Darafa. Todos os direitos reservados.
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

          {/* Ícone Minimalista do Instagram */}
          <Link 
            href="https://instagram.com/darafa_cwb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-transform hover:scale-110 duration-300"
            aria-label="Instagram Oficial DaRafa"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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