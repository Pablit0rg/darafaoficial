"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

// 1. Array base (Imagens originais)
const originalItems = [
  { id: 1, title: "Colares de Pérolas", desc: "Imagem Horizontal", spanClasses: "", image: "/assets/images/showcase/showcase-colares-perolas-hd.jpg", link: "https://instagram.com/darafa_cwb" },
  { id: 2, title: "Brinco de Pérolas", desc: "Imagem Vertical", spanClasses: "", image: "/assets/images/showcase/showcase-brinco-perolas-hd.jpg", link: "https://instagram.com/darafa_cwb" },
  { id: 3, title: "Ponto de Luz", desc: "Imagem Quadrada", spanClasses: "", image: "/assets/images/showcase/showcase-ponto-luz-hd.jpg", link: "https://instagram.com/darafa_cwb" },
  { id: 4, title: "Colar Personalizado", desc: "Imagem Quadrada", spanClasses: "", image: "/assets/images/showcase/showcase-colar-personalizado-hd.jpg", link: "https://instagram.com/darafa_cwb" },
  { id: 5, title: "Brincos", desc: "Imagem Quadrada", spanClasses: "", image: "/assets/images/showcase/showcase-brincos-hd.jpg", link: "https://instagram.com/darafa_cwb" },
];

// 2. Geração dos placeholders para um total de 50 cards
const placeholderItems = Array.from({ length: 44 }).map((_, i) => ({
  id: originalItems.length + i + 1,
  title: "Nova Criação",
  desc: "Em breve",
  spanClasses: "",
  image: "",
  link: "https://instagram.com/darafa_cwb",
}));

// 3. Matriz unificada de renderização
const allItems = [...originalItems, ...placeholderItems];

const renderCardContent = (item: any) => (
  <>
    {item.image ? (
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 20vw"
        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-[1500ms] ease-out"
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

export default function Showcase() {
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
    <section className="px-2 pt-[8px] pb-2 bg-black relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sentinel div: ancora de scroll de precisao */}
      <div
        id="showcase"
        className="absolute -top-[78px] left-0 w-full h-px invisible pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid Responsivo Universal */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 auto-rows-[480px] lg:auto-rows-[240px] gap-2">
        {allItems.map((item, index) => (
          <motion.a
            key={`card-${item.id}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (index % 6) * 0.1, ease: "easeOut" }}
            className={`group relative bg-zinc-900 border border-white/5 overflow-hidden block w-full h-full cursor-pointer ${item.spanClasses || ""}`}
          >
            {renderCardContent(item)}
          </motion.a>
        ))}

        {/* Card Final Estratégico (Retenção) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: (allItems.length % 6) * 0.1, ease: "easeOut" }}
          className="group relative bg-zinc-900 border border-white/5 overflow-hidden flex items-center justify-center w-full h-full"
        >
          <p className="text-white font-serif italic text-lg">Em breve</p>
        </motion.div>
      </div>
    </section>
  );
}
