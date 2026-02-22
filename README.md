# Darafa - Artisan Metal Jewelry

Darafa is an ultra-modern, luxury web portfolio built for a handcrafted jewelry brand based in Curitiba, Brazil. The platform embraces an underground aesthetic, utilizing high-contrast minimalism, subtle noise textures, and refined typography.

## Architecture & Technology Stack

This application is built with performance, scalability, and developer experience in mind, adhering to modern web development standards.

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript (Strict Mode)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Deployment:** Vercel (Recommended)

## Project Structure

The codebase is organized into highly cohesive and loosely coupled modules:

* `/app`: Contains the routing logic, global layouts, and SEO metadata.
* `/components/layout`: Global architectural components (Navigation, Footer).
* `/components/sections`: Distinct page sections (Hero, Manifesto, Showcase) acting as compositional blocks.
* `/components/ui`: Highly reusable, atomic UI elements (Buttons, Overlays).
* `/lib`: Shared utility functions and constants.

## Design System

* **Primary Palette:** Custom Black (`#050505`, `#0a0a0a`), Silver (`#e5e7eb`), Muted Gray (`#525252`).
* **Typography:** Playfair Display (Serif, Headings), Inter (Sans-serif, Body).
* **Visual Effects:** CSS-based SVG noise overlay, `mix-blend-difference` navigation, asymmetric masonry grids.

## Getting Started

### Prerequisites

* Node.js 18.17 or later.
* npm, yarn, or pnpm.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd darafa-web

   darafa-web/
├── app/
│   ├── fonts/                  # Arquivos de fonte otimizados (Inter, Playfair)
│   ├── favicon.ico             # Ícone da aba
│   ├── globals.css             # Diretivas do Tailwind e variáveis CSS base (ruído, scrollbar)
│   ├── layout.tsx              # RootLayout: Injeção de fontes, metadata SEO e NoiseOverlay
│   └── page.tsx                # Server Component principal: Orquestra as seções
├── components/
│   ├── layout/                 # Estruturas globais de página
│   │   ├── Navigation.tsx      # Navbar com mix-blend-difference
│   │   └── Footer.tsx          # Rodapé
│   ├── sections/               # Blocos de conteúdo da página principal
│   │   ├── Hero.tsx            # Header com parallax e título principal
│   │   ├── Manifesto.tsx       # Texto de manifesto
│   │   ├── Showcase.tsx        # Grid assimétrico de produtos (Masonry)
│   │   └── InstagramCTA.tsx    # Seção de conversão final
│   └── ui/                     # Componentes burros/reutilizáveis
│       ├── NoiseOverlay.tsx    # O div de textura de ruído isolado
│       └── GlowButton.tsx      # Botão reutilizável com o efeito de glow
├── lib/                        
│   └── utils.ts                # Funções utilitárias (ex: cn() para concatenar classes Tailwind)
├── public/                     # Assets estáticos (imagens reais, quando houver)
├── tailwind.config.ts          # Configuração migrada do seu script na tag <head>
├── tsconfig.json               # Configuração estrita do TypeScript
└── package.json                # Dependências (Next, React, Tailwind, Framer Motion)