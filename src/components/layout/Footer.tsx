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
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-600 gap-4">
        <div>
          &copy; {currentYear} Darafa. Todos os direitos reservados.
        </div>
        <div className="flex gap-6">
          <button 
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer uppercase outline-none"
          >
            Início
          </button>
          <Link 
            href="https://instagram.com/darafa_cwb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}