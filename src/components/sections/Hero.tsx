// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="h-[100dvh] flex flex-col justify-center items-center relative w-full max-w-full px-[4.07vw] md:px-4 text-center overflow-hidden bg-brand-black">
      
      {/* Background Image: Estilo Editorial */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        
        {/* HACK RESPONSIVO: opacity-30 no mobile para proteger a leitura, opacity-50 no desktop (md:) */}
        <div className="absolute top-0 left-0 w-full md:w-2/3 h-full opacity-30 md:opacity-50">
          <Image
            src="/assets/images/rafaela-destaqueHeroOficial-hd.jpg"
            alt="DaRafa Joias"
            fill
            /* HACK RESPONSIVO: object-center no mobile, md:object-center no desktop */
            className="object-cover object-center md:object-center grayscale mix-blend-lighten"
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 66vw"
            fetchPriority="high"
            decoding="sync"
          />
          {/* Fade horizontal */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-black/70 to-brand-black"></div>
          {/* Fade vertical mais denso no mobile, normal no desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 md:via-transparent to-transparent"></div>
        </div>
        
        {/* Máscara global */}
        <div className="absolute inset-0 bg-brand-black/20"></div>
      </div>

      {/* Conteúdo Textual - Intacto na lógica, escalável no mobile (vw) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        className="space-y-[6.1vw] md:space-y-6 z-10 max-w-4xl mx-auto relative mt-[20.35vw] md:mt-30 md:translate-x-16 lg:translate-x-16"
      >
        {/* Painel de Controle Links Hero: Coordenadas refatoradas para vw no mobile (Base: 393px). Regra md: blinda o Desktop. */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="translate-x-[20vw] -translate-y-[32vw] md:translate-x-0 md:translate-y-0 text-brand-muted uppercase tracking-[0.3em] text-[2.54vw] md:text-sm"
        >
          <Link 
            href="https://www.google.com/maps/place/Coletivo+Brecho+das+Preta/@-25.4282157,-49.2687739,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce5f4c8e3b451:0x9428bd98505e541!8m2!3d-25.4282157!4d-49.2687739!16s%2Fg%2F11wg2j39_p?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Curitiba
          </Link> 
          {" "}•{" "}
          <Link 
            href="#showcase" 
            className="hover:text-white transition-colors cursor-pointer"
            onClick={(e) => { e.preventDefault(); document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Joias artesanais
          </Link>
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="translate-x-[20vw] -translate-y-[25vw] md:translate-x-0 md:translate-y-0 font-serif text-[9.16vw] md:text-6xl lg:text-7xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600"
        >
          ONDE A ARTE <br /> 
          <span className="italic font-light text-gray-400">ENCONTRA</span>
          
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          
          {/* Painel OS */}
          <span className="inline-block md:inline -ml-[25vw] md:ml-0">OS</span>
          
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          
          {/* Painel METAIS */}
          <span className="inline-block md:inline ml-[10vw] md:ml-0">METAIS</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="translate-x-[0vw] -translate-y-[10vw] md:translate-x-0 md:translate-y-0 pt-[4.07vw] md:pt-4 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-[2.03vw] md:gap-2 opacity-60 mb-[8.14vw] md:mb-8"
          >
            <div className="w-[1px] h-[12.21vw] md:h-12 bg-gradient-to-b from-transparent to-white"></div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white md:w-3 md:h-3 w-[3.05vw] h-[3.05vw]">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>

          <Link
            href="https://instagram.com/darafa_cwb"
            target="_blank" rel="noopener noreferrer"
            className="relative overflow-hidden inline-block border border-white/20 px-[8.14vw] py-[4.07vw] md:px-8 md:py-4 text-[2.54vw] md:text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-500 group"
          >
            <span className="relative z-10">Coleção autoral</span>
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700" />
          </Link>
        </motion.div>
      </motion.div>

    </header>
  );
}