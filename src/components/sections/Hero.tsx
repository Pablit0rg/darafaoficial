"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        className="space-y-6 z-10 max-w-4xl mx-auto"
      >
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-brand-muted uppercase tracking-[0.3em] text-[10px] md:text-sm">
          Curitiba &bull; Joias artesanais
        </motion.p>
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600">
          ONDE A ARTE <br /> <span className="italic font-light text-gray-400">ENCONTRA</span> OS METAIS
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-4 flex flex-col items-center">
          
          {/* Seta Minimalista Animada */}
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 opacity-60 mb-8"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white"></div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>

          <Link
            href="https://instagram.com/darafa_cwb"
            target="_blank"
            className="relative overflow-hidden inline-block border border-white/20 px-8 py-4 text-[10px] md:text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-500 group"
          >
            <span className="relative z-10">Coleção completa</span>
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700" />
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}