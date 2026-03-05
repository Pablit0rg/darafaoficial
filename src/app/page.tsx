import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import Showcase from '@/components/sections/Showcase';
import InstagramCTA from '@/components/sections/InstagramCTA';

export const revalidate = 86400;
export const dynamic = 'force-static';

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Onde comprar joias autorais e artesanais em Curitiba?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A DaRafa Joias cria peças autorais exclusivas em Curitiba, unindo arte e design em metais. Nosso catálogo reflete autenticidade e trabalho manual premium de alta qualidade."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona o processo de compra e atendimento da DaRafa Joias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nosso atendimento é exclusivo e direto. Todo o catálogo, lançamentos de novos drops e encomendas são realizados através do nosso perfil oficial no Instagram (@darafa_cwb)."
        }
      },
      {
        "@type": "Question",
        "name": "Quais materiais são utilizados nas coleções da DaRafa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utilizamos metais selecionados, pérolas e técnicas de joalheria artesanal para criar designs autênticos e de alto padrão, garantindo durabilidade e exclusividade em cada peça."
        }
      }
    ]
  };

  return (
    <main className="flex flex-col min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Manifesto />
      <Showcase />
      <InstagramCTA />
    </main>
  );
}