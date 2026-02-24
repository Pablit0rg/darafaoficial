"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const showcaseItems = [
  { id: 1, title: "Anel Bruto .01", desc: "Imagem Vertical", spanClasses: "row-span-1 md:row-span-2", image: "/assets/images/PontoDeLuz.jpg" },
  { id: 2, title: "Colar Elos", desc: "Close-up Textura", spanClasses: "", image: "/assets/images/Colar.jpg" },
  { id: 3, title: "Brinco Minimal", desc: "Detalhe Acabamento", spanClasses: "", image: "/assets/images/Brincos.jpg" },
  { id: 4, title: "Coleção 'Sombra'", desc: "Editorial / Modelo", spanClasses: "md:col-span-2 lg:col-span-1 lg:row-span-2", image: "/assets/images/Lilás&Azul.jpg" },
  { id: 5, title: "Pulseira Trama", desc: "Pulseira Prata", spanClasses: "", image: "/assets/images/BraceletesComPingente&Miçangas.jpg" },
];

export default function Showcase() {
  return (
    <section className="py-20 px-4 md:px-12 bg-black">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[400px]">
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
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
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