# Darafa - Joias Artesanais em Metal

Darafa é um portfólio web de luxo e ultramoderno criado para uma marca de joias artesanais baseada em Curitiba, Brasil. A plataforma adota uma estética *underground*, utilizando minimalismo de alto contraste, texturas sutis de ruído e tipografia refinada.

## Arquitetura e Stack Tecnológica

Esta aplicação foi construída com foco em performance, escalabilidade e experiência do desenvolvedor (DX), aderindo aos mais modernos padrões de desenvolvimento web.

* **Framework:** Next.js 15 (App Router)
* **Linguagem:** TypeScript (Strict Mode)
* **Estilização:** Tailwind CSS
* **Animações:** Framer Motion
* **Deploy:** Vercel (Recomendado)

## Estrutura do Projeto

O código-fonte está organizado em módulos altamente coesos e com baixo acoplamento:

* `/app`: Contém a lógica de roteamento, layouts globais e metadados de SEO.
* `/components/layout`: Componentes arquiteturais globais (Navegação, Rodapé).
* `/components/sections`: Seções distintas da página (Hero, Manifesto, Vitrine/Showcase) atuando como blocos de composição.
* `/components/ui`: Elementos de interface (UI) atômicos e altamente reutilizáveis (Botões, Overlays).
* `/lib`: Funções utilitárias e constantes compartilhadas.

## Design System

* **Paleta Principal:** Preto Personalizado (`#050505`, `#0a0a0a`), Prata (`#e5e7eb`), Cinza Suave (`#525252`).
* **Tipografia:** Playfair Display (Serifada, Títulos), Inter (Sem serifa, Corpo do texto).
* **Efeitos Visuais:** Overlay de ruído em SVG via CSS, navegação com `mix-blend-difference`, grids de alvenaria assimétricos (*masonry grids*).

## Começando

### Pré-requisitos

* Node.js 18.17 ou superior.
* npm, yarn ou pnpm.

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
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