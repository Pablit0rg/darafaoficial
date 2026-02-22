
# Devlog: Otimizações e Refinamento de UI/UX (v1.1)

## Fase 1: Core Architecture & SEO
- [ ] Implementar metadados avançados (OpenGraph, Twitter Cards, Keywords) no `layout.tsx` para maximizar a indexação em motores de busca.
- [ ] Refatorar a lógica do botão "Início" no `Footer.tsx` para garantir um *smooth scroll* fluído até o topo da página, corrigindo o comportamento atual.

## Fase 2: Header & Hero (Refinamento de Luxo)
- [ ] **Navegação:** Adicionar separador visual (linha/border) abaixo de "Darafa. Contato".
- [ ] **Navegação:** Implementar efeito *Glassmorphism* (desfoque/backdrop-blur) ou gradiente sutil no background do `Navigation.tsx` para proteger a legibilidade do menu contra a sobreposição de conteúdo durante o scroll, mantendo o aspecto premium.
- [ ] **Copywriting:** Alterar "Curitiba • Handmade Jewelry" para "Curitiba • Joias artesanais".
- [ ] **Copywriting:** Alterar o título de "ONDE A ARTE ENCONTRA O METAL" para "ONDE A ARTE ENCONTRA OS METAIS".
- [ ] **Copywriting:** Alterar texto do botão de "Ver Coleção no Instagram" para "Coleção completa".
- [ ] **Tipografia & Viewport:** Reduzir a escala responsiva (font-size) do título principal (`h1`) no `Hero.tsx` para garantir que o texto não seja cortado em monitores menores.
- [ ] **UX Contato:** Alterar o link de "Contato" na navegação para abrir o Instagram Direct (`https://ig.me/m/darafa_cwb`) com uma mensagem pré-definida.

## Fase 3: Ajustes Manuais Espaciais (Instagram CTA)
- [ ] Ajustar o eixo X do título `@DARAFA_CWB` no `InstagramCTA.tsx` (deslocar para a direita em relação à marca d'água "Artisan").
- [ ] Ajustar os eixos X e Y do botão "Seguir no Instagram" (deslocar para baixo e para a lateral).

## Fase 4: Atualização de Manifesto
- [ ] Substituir o texto atual do manifesto por um novo *copy* em desenvolvimento (Aguardando definição).

## Fase 5: Integração Final de Mídia (Vitrine)
- [ ] Substituir os placeholders por imagens reais dos produtos no `Showcase.tsx`. (Esta será estritamente a última ação do ciclo de desenvolvimento).
