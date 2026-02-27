import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://darafa.com.br";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Bloqueio preventivo de pastas de sistema e rotas de API para scrapers
      disallow: ["/api/", "/_next/", "/private/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
