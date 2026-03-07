// src/components/sections/Manifesto.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

// Array de testes para homologação de assets fotográficos
const testImages = [
  "/assets/images/manifesto/manifesto-processo-criativo-1-hd.jpg",
  "/assets/images/manifesto/manifesto-processo-criativo-2-hd.jpg",
  "/assets/images/manifesto/manifesto-processo-criativo-3-hd.jpg",
  "/assets/images/manifesto/manifesto-processo-criativo-4-hd.jpg",
  "/assets/images/manifesto/manifesto-processo-criativo-5-hd.jpg",
];

export default function Manifesto() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / width);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-brand-dark relative overflow-hidden flex items-center justify-center">
      
      {/* Fio Metálico (Prata) no topo da secção */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-metal-silver z-20"></div>

      {/* ESTILO GLOBAL PARA ESCONDER SCROLLBAR */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Background Carrossel */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex w-full h-full overflow-x-auto overflow-y-hidden touch-pan-x snap-x snap-mandatory hide-scroll"
        >
          {/* SLIDE 1: Marca d'água Abelha Original (Intacta) */}
          <div className="min-w-full w-full h-full snap-center relative flex items-center justify-center overflow-hidden">
            <div className="relative w-[150%] h-[150%] md:w-full md:h-full max-w-3xl opacity-40 mix-blend-color-dodge pointer-events-none select-none">
              <Image 
                src="/assets/images/drafts/logo-abelha-raw-05-removebg-preview.png"
                alt="Marca d'água Abelha DaRafa"
                fill
                className="object-contain grayscale"
                priority={false}
              />
            </div>
          </div>

          {/* SLIDES 2 A 6: Loop de Imagens de Teste */}
          {testImages.map((src, index) => (
            <div key={index} className="min-w-full w-full h-full snap-center relative flex flex-col items-center justify-center bg-zinc-950 border-l border-white/5 overflow-hidden">
              <Image 
                src={src}
                alt={`Teste Fotográfico ${index + 1}`}
                fill
                className="object-cover opacity-70"
              />
              {/* Overlay escuro para garantir legibilidade de elementos sobrepostos e manter o tom Preto de Luxo */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Etiqueta temporária de identificação do Teste */}
              <div className="absolute bottom-20 left-6 z-10 pointer-events-none">
                <span className="font-sans text-[10px] uppercase tracking-widest text-metal-silver bg-black/50 px-3 py-1 border border-white/10 rounded-full">
                  Teste {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navegação por Pontos (Dots) - Ajustado milimetricamente para Desktop (md:bottom-[1.0rem]) e mapeado para 6 slides */}
        <div className="absolute bottom-8 md:bottom-[1.0rem] left-0 right-0 flex justify-center gap-1.5 z-20 pointer-events-none">
          {[0, 1, 2, 3, 4, 5].map((dotIndex) => (
            <div 
              key={dotIndex}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === dotIndex ? 'w-3 bg-metal-gold' : 'w-1.5 bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      {/* HACK DE ARQUITETURA: 
          A classe 'invisible' oculta os elementos da interface (não são vistos), 
          mas eles continuam ocupando o espaço físico exato na tela. 
          Isso garante que a secção mantenha 100% das proporções originais. */}
      <div className="invisible pointer-events-none select-none relative w-full z-10">
        {/* Título desacoplado */}
        <h2 className="font-serif text-3xl md:text-4xl italic text-gray-300 absolute top-0 w-full text-center translate-y-[80px] md:translate-y-[89px]">
          Manifesto
        </h2>

        {/* Conteúdo Textual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center space-y-8 pt-20"
        >
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-gray-400">
            A <span className="text-white font-normal">Darafa</span> é identidade moldada à mão. 
            Aqui, a beleza brilha do seu jeito, em peças feitas com intenção e alma. 
            Somos uma colmeia que pulsa arte, transformando metais em autoestima. 
            Joias para quem celebra a própria essência do trabalho artesanal.
          </p>
        </motion.div>
      </div>
      
      {/* Fio Metálico (Ouro) na base da secção para demarcar transição para o Showcase */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-metal-gold z-30"></div>

    </section>
  );
}