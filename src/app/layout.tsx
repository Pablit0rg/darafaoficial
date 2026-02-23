// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

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
  openGraph: {
    title: "Darafa | Joias Artesanais",
    description: "Design autoral e brutismo elegante em metais nobres.",
    url: "https://darafa.com.br",
    siteName: "Darafa",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darafa | Joias Artesanais",
    description: "Joalheria autoral feita à mão em Curitiba.",
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
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans relative bg-brand-black text-brand-silver">
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}