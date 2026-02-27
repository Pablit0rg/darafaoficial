// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Darafa | Joias Artesanais & Design Autoral",
  description: "Onde a arte encontra os metais. Joias exclusivas feitas à mão em Curitiba. Design underground, bruto e elegante.",
  keywords: ["joias artesanais", "design autoral", "curitiba", "handmade jewelry", "darafa", "joalheria contemporânea"],
  authors: [{ name: "Darafa" }],
  // ATUALIZAÇÃO: Open Graph e Twitter Cards (Rich Links para WhatsApp/Instagram)
  openGraph: {
    title: "Darafa | Joias Artesanais",
    description: "Design autoral e brutismo elegante em metais nobres. Exclusividade feita à mão em Curitiba.",
    url: "https://darafa.com.br",
    siteName: "Darafa",
    images: [
      {
        url: "https://darafa.com.br/assets/images/rafaela-destaqueHeroOficial-hd.jpg",
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
    images: ["https://darafa.com.br/assets/images/rafaela-destaqueHeroOficial-hd.jpg"],
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
  // ATUALIZAÇÃO: Structured Data (JSON-LD) para dominância de SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "Darafa Joias",
    image: "https://darafa.com.br/assets/images/rafaela-destaqueHeroOficial-hd.jpg",
    description: "Joalheria artesanal e design autoral em Curitiba.",
    url: "https://darafa.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. São Francisco, 50 - loja 14 - Centro",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "80020-190",
      addressCountry: "BR"
    },
    sameAs: [
      "https://instagram.com/darafa_cwb"
    ]
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        {/* ATUALIZAÇÃO: Gestão de Pre-connect para Performance de Rede */}
        <link rel="preconnect" href="https://instagram.com" />
        <link rel="preconnect" href="https://googleusercontent.com" />
      </head>
      <body className="font-sans relative bg-brand-black text-brand-silver">
        {/* Injeção invisível do JSON-LD no DOM */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}