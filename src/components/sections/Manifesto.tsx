"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Manifesto() {
  return (
    <section className="py-24 md:py-32 px-6 bg-brand-dark relative overflow-hidden flex items-center justify-center">
      
      {/* Fio Metálico (Prata) no topo da seção */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-metal-silver z-20"></div>

      {/* Background / Marca d'água */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center select-none">
        <div className="relative w-[150%] h-[150%] md:w-full md:h-full max-w-3xl opacity-5 grayscale mix-blend-screen">
          <Image 
            src="/assets/images/drafts/logo-abelha-raw-05-removebg-preview.png"
            alt="Marca d'água Abelha DaRafa"
            fill
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      {/* Conteúdo Textual */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center space-y-8 relative z-10 mt-30"
      >
        <h2 className="font-serif text-3xl md:text-4xl italic text-gray-300">
          Manifesto
        </h2>
        <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-gray-400">
          A <span className="text-white font-normal">Darafa</span> é identidade moldada à mão. 
          Aqui, a beleza brilha do seu jeito, em peças feitas com intenção e alma. 
          Somos uma colmeia que pulsa arte, transformando metais em autoestima. 
          Joias para quem celebra a própria essência do trabalho artesanal.
        </p>
        <div className="pt-4 flex justify-center">
          <span className="inline-block w-2 h-2 rounded-full bg-white/20"></span>
        </div>
      </motion.div>
      
    </section>
  );
}