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
        {/* Ajuste Manual: Margens negativas removidas e substituídas por mt-8 e md:mt-12 para descer o título */}
        <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 ml-[-5%] md:ml-[-26%] mt-8 md:mt-12 tracking-tighter">
          @DARAFA_CWB
        </h2>
        
        {/* Ajuste Manual: Adicionado pt-6 para empurrar o texto descritivo mais para baixo */}
        <p className="text-gray-400 font-light max-w-md mx-auto pt-7">
          Novos drops, processos de criação e atendimento exclusivo via Direct.
        </p>
        
        {/* Ajuste Manual: Botão deslocado para baixo (pt-12) e levemente para o lado (md:translate-x-12) */}
        <div className="pt-12 md:translate-x-12">
          <Link 
            href="https://instagram.com/darafa_cwb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center gap-3 text-lg tracking-widest uppercase hover:opacity-80 transition-all duration-300"
          >
            {/* Gradiente aplicado diretamente no texto */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600">
              Seguir no Instagram
            </span>
            
            {/* Gradiente aplicado diretamente na seta animada */}
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600"
            >
              -&gt;
            </motion.span>
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