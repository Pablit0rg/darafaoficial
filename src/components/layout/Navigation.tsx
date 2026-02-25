"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navigation() {
  const contactLink = "https://ig.me/m/darafa_cwb?text=Vi%20seu%20site%20e%20gostaria%20de%20ver%20os%20drops%20disponíveis";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
      className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center border-b border-white/10 backdrop-blur-md bg-black/20 mix-blend-difference text-white"
    >
      {/* Logo com hitbox expandida e feedback tátil */}
      <Link href="/" className="relative group p-2 -m-2">
        <motion.span 
          whileTap={{ scale: 0.95 }}
          className="font-serif text-xl tracking-widest font-bold uppercase block"
        >
          Darafa.
        </motion.span>
      </Link>

      <Link 
        href={contactLink}
        target="_blank"
        className="text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity p-2 -m-2"
      >
        Contato
      </Link>
    </motion.nav>
  );
}