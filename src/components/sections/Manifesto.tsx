// src/components/sections/Manifesto.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Manifesto() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const manifestoImages = [
    "/assets/images/manifesto/manifesto-processo-criativo-2-hd.jpg",
    "/assets/images/manifesto/manifesto-processo-criativo-3-hd.jpg",
    "/assets/images/manifesto/manifesto-processo-criativo-5-hd.jpg",
    "/assets/images/manifesto/manifesto-processo-criativo-4-hd.jpg",
    "/assets/images/manifesto/manifesto-processo-criativo-1-hd.jpg",
  ];

  const totalSlides = 1 + manifestoImages.length; // Abelha + 5 imagens

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / width);
      setActiveIndex(newIndex);
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-brand-dark relative overflow-hidden flex items-center justify-center">
      
      {/* Fio Metálico (Prata) no topo da secção */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-metal-silver z-20"></div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Background Carrossel */}
      <div className="absolute inset-0 z-0 group">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex w-full h-full overflow-x-auto overflow-y-hidden touch-pan-x snap-x snap-mandatory hide-scroll"
        >
          {/* SLIDE 1: Marca d'água Abelha Original */}
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

          {/* SLIDES 2 A 6: Imagens do Processo Criativo */}
          {manifestoImages.map((src, index) => (
            <div key={index} className="min-w-full w-full h-full snap-center relative flex items-center justify-center bg-zinc-950 border-l border-white/5 overflow-hidden">
              {/* Mobile: imagem original — visível apenas abaixo de md */}
              <Image
                src={src}
                alt={`Processo Criativo DaRafa ${index + 1}`}
                fill
                className="object-cover object-center md:hidden"
                sizes="100vw"
              />

              {/* Desktop: mesma imagem com posicionamento calibrado — visível apenas em md e acima */}
              <Image
                src={src}
                alt={`Processo Criativo DaRafa ${index + 1}`}
                fill
                className="object-cover object-center hidden md:block"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* BOTÃO ESQUERDA (Estilo Instagram) */}
        <button
          onClick={scrollPrev}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur-sm z-30 transition-opacity duration-300 hover:bg-white ${activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          aria-label="Imagem anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* BOTÃO DIREITA (Estilo Instagram) */}
        <button
          onClick={scrollNext}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur-sm z-30 transition-opacity duration-300 hover:bg-white ${activeIndex === totalSlides - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          aria-label="Próxima imagem"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Navegação por Pontos (Dots) */}
        <div className="absolute bottom-8 md:bottom-[1.0rem] left-0 right-0 flex justify-center gap-1.5 z-20 pointer-events-none">
          {[0, 1, 2, 3, 4, 5].map((dotIndex) => (
            <div
              key={dotIndex}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === dotIndex ? 'w-3 bg-metal-gold' : 'w-1.5 bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      {/* HACK DE ARQUITETURA */}
      <div className="invisible pointer-events-none select-none relative w-full z-10">
        <h2 className="font-serif text-3xl md:text-4xl italic text-gray-300 absolute top-0 w-full text-center translate-y-[80px] md:translate-y-[89px]">
          Manifesto
        </h2>

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
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-metal-gold z-30"></div>

    </section>
  );
}
