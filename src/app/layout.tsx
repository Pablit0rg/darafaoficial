// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnalyticsWrapper from "@/components/infra/AnalyticsWrapper";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Darafa | Joias Artesanais & Design Autoral",
  description: "Onde a arte encontra os metais. Joias exclusivas feitas à mão em Curitiba. Design underground, bruto e elegante.",
  keywords: ["joias artesanais", "design autoral", "curitiba", "handmade jewelry", "darafa", "joalheria contemporânea"],
  authors: [{ name: "Darafa" }],
  // Blindagem de SEO: Define a URL oficial absoluta para evitar punição por conteúdo duplicado
  alternates: {
    canonical: "/", 
  },
  openGraph: {
    title: "Darafa | Joias Artesanais",
    description: "Design autoral e brutismo elegante em metais nobres. Exclusividade feita à mão em Curitiba.",
    url: siteConfig.url,
    siteName: "Darafa",
    images: [
      {
        url: `${siteConfig.url}/assets/images/rafaela-destaqueHeroOficial-hd.jpg`,
        width: 1200,
        height: 630,
        alt: "Darafa Joias Artesanais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darafa | Joias Artesanais",
    description: "Joalheria autoral feita à mão em Curitiba.",
    images: [`${siteConfig.url}/assets/images/rafaela-destaqueHeroOficial-hd.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "Darafa Joias",
    image: `${siteConfig.url}/assets/images/rafaela-destaqueHeroOficial-hd.jpg`,
    description: "Joalheria artesanal e design autoral em Curitiba.",
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. São Francisco, 50 - loja 14 - Centro",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "80020-190",
      addressCountry: "BR"
    },
    sameAs: [
      siteConfig.links.instagram
    ]
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://instagram.com" />
        <link rel="preconnect" href="https://googleusercontent.com" />
      </head>
      <body className="font-sans relative bg-brand-black text-brand-silver">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Navigation />
        
        <main>
          {children}
        </main>

        <Footer />
        
        <AnalyticsWrapper />
      </body>
    </html>
  );
}