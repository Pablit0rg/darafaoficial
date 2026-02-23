# Devlog: Otimizações e Refinamento de UI/UX (v1.1)

## Fase 1: Core Architecture & SEO
- [x] Implementar metadados avançados (OpenGraph, Twitter Cards, Keywords) no `layout.tsx` para maximizar a indexação em motores de busca.
- [x] Refatorar a lógica do botão "Início" no `Footer.tsx` para garantir um *smooth scroll* fluído até o topo da página, corrigindo o comportamento atual.
- [x] Separar lógica de Client Components (Footer) de Server Components (Layout/Metadata) para conformidade com Next.js 15.

## Fase 2: Header & Hero (Refinamento de Luxo)
- [ ] **Navegação:** Adicionar separador visual (linha border-b) e implementar efeito *Glassmorphism* (backdrop-blur) no `Navigation.tsx`.
- [ ] **Navegação:** Atualizar link de "Contato" para Direct do Instagram com mensagem personalizada: "Vi seu site e gostaria de ver os drops disponíveis".
- [ ] **Hero - Copywriting:** Alterar "Handmade Jewelry" para "Joias artesanais".
- [ ] **Hero - Copywriting:** Alterar título para "ONDE A ARTE ENCONTRA OS METAIS".
- [ ] **Hero - Copywriting:** Alterar texto do botão para "Coleção completa".
- [ ] **Hero - Layout:** Reduzir escala da fonte (text-4xl a text-7xl) para garantir visibilidade total sem cortes em diferentes monitores.

## Fase 3: Ajustes Manuais Espaciais (Instagram CTA)
- [ ] **Posicionamento:** Deslocar `@DARAFA_CWB` para a direita em relação ao texto "Artisan".
- [ ] **Posicionamento:** Ajustar botão "Seguir no Instagram" para baixo e para a lateral.

## Fase 4: Atualização de Manifesto
- [ ] Substituir o texto atual do manifesto por novo copywriting (Aguardando definição do usuário).

## Fase 5: Integração Final de Mídia (Vitrine)
- [ ] Substituir placeholders por imagens reais dos produtos no `Showcase.tsx`. (Última etapa do ciclo).