// src/app/sitemap.ts
import { siteConfig } from "@/config/site";

// Omitimos a tipagem estrita de MetadataRoute para evitar que o compilador
// bloqueie a propriedade "images" nativa das versões mais recentes.
export default function sitemap() {
  const hdImages = [
    `${siteConfig.url}/assets/images/rafaela-destaqueHeroOficial-hd.jpg`,
    `${siteConfig.url}/assets/images/showcase/showcase-colares-perolas-hd.jpg`,
    `${siteConfig.url}/assets/images/showcase/showcase-brinco-perolas-hd.jpg`,
    `${siteConfig.url}/assets/images/showcase/showcase-ponto-luz-hd.jpg`,
    `${siteConfig.url}/assets/images/showcase/showcase-colar-personalizado-hd.jpg`,
    `${siteConfig.url}/assets/images/showcase/showcase-brincos-hd.jpg`,
    `${siteConfig.url}/assets/images/showcase/showcase-braceletes-micangas-hd.jpg`,
  ];

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
      images: hdImages,
    },
  ];
}