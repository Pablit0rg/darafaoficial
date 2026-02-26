// src/components/sections/InstagramCTA.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InstagramCTA() {
  return (
    <section id="instagram" className="min-h-[70vh] flex flex-col justify-center items-center bg-brand-dark relative px-6 border-t border-white/5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 space-y-8"
      >
        {/* Ajuste Manual: Deslocado para a direita com ml-8 ou md:ml-16 */}
        <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 ml-[-5%] md:ml-[-26%] mt-[-15px] md:mt-[-60px] tracking-tighter">
          @DARAFA_CWB
        </h2>
        
        <p className="text-gray-400 font-light max-w-md mx-auto">
          Novos drops, processos de criação e atendimento exclusivo via Direct.
        </p>
        
        {/* Ajuste Manual: Botão deslocado para baixo (pt-12) e levemente para o lado (md:translate-x-10) */}
        <div className="pt-12 md:translate-x-12">
          <Link 
            href="https://instagram.com/darafa_cwb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center gap-3 text-lg tracking-widest uppercase hover:text-white/70 transition-colors"
          >
            <span>Seguir no Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform duration-300">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </motion.div>

      {/* Big Background Text (Decoration) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <span className="font-serif text-[20vw] italic leading-none">Autoral</span>
      </div>
    </section>
  );
}