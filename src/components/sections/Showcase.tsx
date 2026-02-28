// src/components/sections/Showcase.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const showcaseItems = [
  { id: 1, title: "Colares de Pérolas", desc: "Imagem Horizontal", spanClasses: "", image: "/assets/images/showcase/showcase-colares-perolas-hd.jpg" },
  { id: 2, title: "Brinco de Pérolas", desc: "Imagem Vertical", spanClasses: "", image: "/assets/images/showcase/showcase-brinco-perolas-hd.jpg" },
  { id: 3, title: "Ponto de Luz", desc: "Imagem Quadrada", spanClasses: "", image: "/assets/images/showcase/showcase-ponto-luz-hd.jpg" },
  { id: 4, title: "Colar Personalizado", desc: "Imagem Quadrada", spanClasses: "", image: "/assets/images/showcase/showcase-colar-personalizado-hd.jpg" },
  { id: 5, title: "Brincos", desc: "Imagem Quadrada", spanClasses: "", image: "/assets/images/showcase/showcase-brincos-hd.jpg" },
  { id: 6, title: "Braceletes com Miçangas", desc: "Fechamento do Grid", spanClasses: "", image: "/assets/images/showcase/showcase-braceletes-micangas-hd.jpg" },
];

export default function Showcase() {
  // Arquitetura de SEO Headless: Mapeamento de Produtos para o Google.
  // Esta estrutura não afeta a interface, mas ensina o algoritmo a tratar as imagens como joias comerciais.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": showcaseItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": item.title,
        "image": `${siteConfig.url}${item.image}`,
        "description": `Design autoral e exclusivo Darafa: ${item.title}.`,
        "brand": {
          "@type": "Brand",
          "name": siteConfig.name
        }
      }
    }))
  };

  return (
    <section id="showcase" className="py-20 px-4 md:px-12 bg-black relative">
      {/* Injeção invisível do schema no DOM para leitura de rastreadores */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-between items-end mb-12 pb-4 relative"
      >
        <h3 className="font-serif text-2xl text-white">Últimas Criações</h3>
        <span className="text-xs text-gray-500 uppercase tracking-widest">Coleção Autoral</span>
        
        {/* Fio Metálico (Ouro) */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-metal-gold z-10"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 auto-rows-[480px]">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative bg-zinc-900 border border-white/5 overflow-hidden ${item.spanClasses}`}
          >
            {item.image ? (
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms] ease-out"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-700 group-hover:text-gray-500 transition-colors">
                <span className="font-serif italic text-sm">{item.desc}</span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <p className="text-sm font-sans tracking-widest uppercase text-white z-10">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}