// src/app/robots.ts
import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Regra Global: Acesso livre para buscadores (Google, Bing, etc.)
        userAgent: '*',
        allow: '/',
      },
      {
        // Blindagem de Infraestrutura e Propriedade Intelectual: 
        // Bloqueia scrapers de IA de consumirem banda e rasparem o catálogo.
        userAgent: [
          'GPTBot', 
          'ChatGPT-User', 
          'CCBot', 
          'anthropic-ai', 
          'Claude-Web', 
          'Google-Extended',
          'OmigiliBot'
        ],
        disallow: ['/'],
      }
    ],
    // Apontamento dinâmico para o sitemap em alta resolução que construímos
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}