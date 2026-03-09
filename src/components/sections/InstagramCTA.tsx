// src/components/sections/InstagramCTA.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InstagramCTA() {
  return (
    // Removido o border-t border-white/5 para zerar o gap visual.
    <section id="instagram" className="min-h-[70vh] lg:min-h-[45vh] flex flex-col justify-center items-center bg-brand-dark relative px-6 overflow-hidden">
      
      {/* Divisor Estrutural: Fio de Ouro fixado exatamente na junção com o Showcase */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-metal-gold z-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 w-full max-w-5xl flex flex-col relative"
      >
        {/* TÍTULO | Conversão para Viewport (vw) garante escala perfeita em qualquer mobile. PC blindado com md: */}
        <h2 className="translate-x-[-7.63vw] translate-y-[-3.81vw] md:translate-x-[0px] md:translate-y-[0px] font-serif text-[13vw] md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 -mt-6 md:mt-12 ml-2 md:ml-[-8%] tracking-tighter text-left md:text-center self-start md:self-center">
          @DARAFA_CWB
        </h2>
        
        {/* O "CUBO" | Conversão para VW aplicada. */}
        <p className="translate-x-[-49.61vw] translate-y-[22.9vw] md:translate-x-[0px] md:translate-y-[0px] text-gray-400 font-light text-justify text-[13px] leading-relaxed w-[150px] self-end mr-[20px] mt-16 md:text-base md:max-w-md md:w-auto md:text-center md:self-center md:mr-0 md:mt-8 tracking-tight [word-spacing:-1px] md:tracking-normal md:[word-spacing:0px]">
          Novos drops, processos de criação e atendimento exclusivo via Direct.
        </p>
        
        {/* BOTÃO CTA | Conversão para VW aplicada. */}
<div className="translate-x-[22.9vw] translate-y-[12.72vw] md:translate-x-[0px] md:translate-y-[0px] mt-28 ml-12 md:mt-12 md:ml-12 self-start md:self-center">
  <Link 
    href="https://instagram.com/darafa_cwb" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group relative inline-flex items-center gap-3 text-xl md:text-lg tracking-widest uppercase hover:opacity-80 transition-all duration-300"
  >
    {/* TEXTO INTACTO (Escada Mobile) */}
    <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 font-medium">
      Seguir
      <br className="md:hidden" />
      <span className="hidden md:inline"> </span>
      <span className="inline-block md:inline ml-[13vw] md:ml-0">
        no Instagram
      </span>
      {/* SETA ANIMADA MOBILE (Congelada no espaço absoluto para não empurrar o texto) */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="md:hidden absolute top-[100%] left-[75%] -translate-x-1/2 flex flex-col items-center opacity-60 mt-[2vw]"
    >
      <div className="w-[1px] h-[10vw] bg-gradient-to-b from-transparent to-gray-400"></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 w-[4vw] h-[4vw]">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </motion.div>
    </span>

    {/* SETA DESKTOP: Original, lateral, animada no eixo X */}
    <motion.span
      animate={{ x: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className="hidden md:inline-block text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 font-medium"
    >
      -&gt;
    </motion.span>
    
    {/* SETA MOBILE: Mesma arquitetura da Hero */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="md:hidden flex flex-col items-center opacity-60 ml-[2vw]"
    >
      <div className="w-[1px] h-[10vw] bg-gradient-to-b from-gray-400 to-transparent"></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 w-[4vw] h-[4vw]">
        <polyline points="19 14 12 21 5 14"></polyline>
      </svg>
    </motion.div>
  </Link>
</div>
      </motion.div>

      {/* Marca d'água Tipográfica */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-[0.03] select-none flex flex-col justify-center">
        {/* Desktop */}
        <span className="hidden md:block font-serif text-[20vw] italic leading-none text-center">
          Autoral
        </span>
        {/* Mobile: Brutalist Typography */}
        <div className="flex md:hidden flex-col font-serif italic leading-[0.75] tracking-tighter w-full">
          <span className="text-[48vw] text-left pl-2">Auto</span>
          <span className="text-[48vw] text-right pr-4">ral</span>
        </div>
      </div>
    </section>
  );
}
