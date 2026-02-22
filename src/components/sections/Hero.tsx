"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  // Variantes de animação para garantir consistência e cascata
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.5, 0, 0, 1] } },
  };

  return (
    <header className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6 z-10 max-w-4xl mx-auto"
      >
        <motion.p variants={itemVariants} className="text-brand-muted uppercase tracking-[0.3em] text-xs md:text-sm">
          Curitiba &bull; Handmade Jewelry
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-9xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600">
          ONDE A ARTE <br /> <span className="italic font-light text-gray-400">ENCONTRA</span> O METAL
        </motion.h1>

        <motion.div variants={itemVariants} className="pt-8">
          <Link
            href="https://instagram.com/darafa_cwb"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-block border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-500 group"
          >
            <span className="relative z-10">Ver Coleção no Instagram</span>
            {/* Efeito Glow migrado para Tailwind */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Linha Decorativa com animação de crescimento */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 64, opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent"
      />
    </header>
  );
}