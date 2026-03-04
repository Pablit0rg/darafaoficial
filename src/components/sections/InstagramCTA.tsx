// src/components/sections/InstagramCTA.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InstagramCTA() {
  return (
    // Removido o border-t border-white/5 para zerar o gap visual.
    <section id="instagram" className="min-h-[70vh] flex flex-col justify-center items-center bg-brand-dark relative px-6 overflow-hidden">
      
      {/* Divisor Estrutural: Fio de Ouro fixado exatamente na junção com o Showcase */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-metal-gold z-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Container flexível sem alinhamento forçado (removido space-y-8) para permitir Assimetria no Mobile
        className="z-10 w-full max-w-5xl flex flex-col relative"
      >
        {/* Painel de Controle @DARAFA_CWB: Mova nos eixos X e Y pelo translate. A regra md:translate-x-0 e md:translate-y-0 blinda a versão de PC. */}
        <h2 className="translate-x-[-30px] translate-y-[-15px] md:translate-x-0 md:translate-y-0 font-serif text-[13vw] md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 -mt-6 md:mt-12 ml-2 md:ml-[-8%] tracking-tighter text-left md:text-center self-start md:self-center">
          @DARAFA_CWB
        </h2>
        
        {/* O "Cubo" Editorial: Adicionado translate-x para puxar horizontalmente para o espaço branco */}
        <p className="translate-x-[-222px] translate-y-[98px] md:translate-x-0 md:translate-y-0 text-gray-400 font-light text-justify text-[13px] leading-relaxed w-[150px] self-end mr-[20px] mt-16 md:text-base md:max-w-md md:w-auto md:text-center md:self-center md:mr-0 md:mt-8">
          Novos drops, processos de criação e atendimento exclusivo via Direct.
        </p>
        
        {/* Painel de Controle Botão CTA: Mova nos eixos X e Y pelo translate. A regra md: blinda a versão de PC. */}
        <div className="translate-x-[40px] translate-y-[45px] md:translate-x-0 md:translate-y-0 mt-28 ml-12 md:mt-12 md:ml-12 self-start md:self-center">
          <Link 
            href="https://instagram.com/darafa_cwb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center gap-3 text-xl md:text-lg tracking-widest uppercase hover:opacity-80 transition-all duration-300"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 font-medium">
              Seguir no Instagram
            </span>
            
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 font-medium"
            >
              -&gt;
            </motion.span>
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