"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useDeferredValue } from "react";
import { siteConfig } from "@/config/site";

// 1. Array base (Imagens originais)
const originalItems = [
  { id: 1, title: "Colares de Pérolas", desc: "Imagem Horizontal", spanClasses: "", image: "/assets/images/showcase/showcase-colares-perolas-hd.jpg", link: "https://instagram.com/darafa_cwb" },
  { id: 2, title: "Brinco de Pérolas", desc: "Imagem Vertical", spanClasses: "", image: "/assets/images/showcase/showcase-brinco-perolas-hd.jpg", link: "https://instagram.com/darafa_cwb" },
  { id: 3, title: "Ponto de Luz", desc: "Imagem Quadrada", spanClasses: "", image: "/assets/images/showcase/showcase-ponto-luz-hd.jpg", link: "https://instagram.com/darafa_cwb" },
  { id: 4, title: "Colar Personalizado", desc: "Imagem Quadrada", spanClasses: "", image: "/assets/images/showcase/showcase-colar-personalizado-hd.jpg", link: "https://instagram.com/darafa_cwb" },
  { id: 5, title: "Brincos", desc: "Imagem Quadrada", spanClasses: "", image: "/assets/images/showcase/showcase-brincos-hd.jpg", link: "https://instagram.com/darafa_cwb" },
];

// 2. Geração dos 5 placeholders
const placeholderItems = originalItems.map((item) => ({
  id: item.id + 6,
  title: "Nova Criação",
  desc: "Em breve",
  spanClasses: item.spanClasses,
  image: "",
  link: "https://instagram.com/darafa_cwb",
}));

// 3. Estruturas para Renderização
const row1Items = [...originalItems, ...placeholderItems];
const row2Items = [...placeholderItems, ...originalItems].reverse();
const row3Items = [...originalItems, ...placeholderItems];
const mobileGroups = originalItems.map((item, i) => [item, placeholderItems[i]]);

const renderCardContent = (item: any) => (
  <>
    {item.image ? (
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 20vw"
        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms] ease-out"
      />
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 transition-colors bg-zinc-950">
        <span className="font-serif italic text-sm">{item.desc}</span>
        <div className="w-8 h-[1px] bg-white/10 mt-4"></div>
      </div>
    )}
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
      <p className="text-sm font-sans tracking-widest uppercase text-white z-10">{item.title}</p>
    </div>
  </>
);

const MobileCarouselCard = ({ group, index }: { group: typeof mobileGroups[0]; index: number }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const deferredIsInView = useDeferredValue(isInView);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      setActiveIndex(Math.round(scrollPosition / width));
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: deferredIsInView ? 1 : 0, y: deferredIsInView ? 0 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative w-full h-[480px] bg-zinc-900 overflow-hidden aspect-[3/4]"
    >
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scroll"
      >
        {group.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-full w-full h-full snap-center relative block group"
          >
            {renderCardContent(item)}
          </a>
        ))}
      </div>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 pointer-events-none z-20">
        {group.map((_, dotIndex) => (
          <div
            key={dotIndex}
            aria-label={`Ir para a imagem ${dotIndex + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === dotIndex ? "w-3 bg-white" : "w-1.5 bg-white/30"}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const DesktopCard = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const deferredIsInView = useDeferredValue(isInView);

  return (
    <motion.a
      ref={ref}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ opacity: deferredIsInView ? 1 : 0, y: deferredIsInView ? 0 : 30 }}
      transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
      // CORREÇÃO: removido `min-w-[280px]` — era ele que sobrescrevia o w-[20vw]
      // em qualquer tela abaixo de 1400px, quebrando a proporcionalidade entre dispositivos
      className={`group relative bg-zinc-900 border border-white/5 overflow-hidden block h-[280px] w-[20vw] snap-start flex-shrink-0 ${item.spanClasses || ""}`}
    >
      {renderCardContent(item)}
    </motion.a>
  );
};

function useSyncedScroll(cardWidth: number) {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const isSyncing = useRef(false);

  const handleRow1Scroll = () => {
    if (!row1Ref.current || !row2Ref.current || isSyncing.current) return;
    isSyncing.current = true;
    row2Ref.current.scrollLeft = row1Ref.current.scrollLeft + cardWidth;
    isSyncing.current = false;
  };

  return { row1Ref, row2Ref, handleRow1Scroll };
}

export default function Showcase() {
  const { row1Ref, row2Ref, handleRow1Scroll } = useSyncedScroll(288);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: originalItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: item.title,
        image: `${siteConfig.url}${item.image}`,
        description: `Design autoral e exclusivo Darafa: ${item.title}.`,
        brand: { "@type": "Brand", name: siteConfig.name },
        url: item.link,
      },
    })),
  };

  return (
    <section
      className="px-2 pt-[8px] pb-2 bg-black relative overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style dangerouslySetInnerHTML={{__html: ".hide-scroll::-webkit-scrollbar { display: none; } .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }"}} />

      {/* Sentinel div: ancora de scroll de precisao.
          Posicionado 62px acima da secao para compensar o header fixo.
          O browser alinha o topo deste elemento com o topo do viewport,
          fazendo a linha dourada pousar exatamente na borda do header. */}
      <div
        id="showcase"
        className="absolute -top-[78px] left-0 w-full h-px invisible pointer-events-none"
        aria-hidden="true"
      />

      {/* Linha dourada e restante do conteudo permanecem inalterados abaixo */}

      <div className="hidden md:flex flex-col gap-2">

        <div
          ref={row1Ref}
          onScroll={handleRow1Scroll}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scroll gap-2"
        >
          {row1Items.map((item, index) => (
            <DesktopCard key={`row1-${item.id}-${index}`} item={item} index={index} />
          ))}
        </div>

        <div
          ref={row2Ref}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scroll gap-2 pointer-events-none"
        >
          {row2Items.map((item, index) => (
            <DesktopCard key={`row2-${item.id}-${index}`} item={item} index={index} />
          ))}
        </div>

        <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scroll gap-2">
          {row3Items.map((item, index) => (
            <DesktopCard key={`row3-${item.id}-${index}`} item={item} index={index} />
          ))}
        </div>

      </div>

      <div className="grid md:hidden grid-cols-1 gap-2">
        {mobileGroups.map((group, index) => (
          <MobileCarouselCard key={index} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}