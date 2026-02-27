import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Em produção, você pode definir a variável de ambiente NEXT_PUBLIC_SITE_URL na Vercel
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://darafa.com.br";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Se no futuro adicionarmos páginas de coleções separadas (ex: /colecao/sombra),
    // elas serão mapeadas automaticamente aqui.
  ];
}
