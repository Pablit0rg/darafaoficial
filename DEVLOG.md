# Devlog: Otimizações e Refinamento de UI/UX (v1.1)

## Fase 1: Core Architecture & SEO
- [x] Implementar metadados avançados (OpenGraph, Twitter Cards, Keywords) no `layout.tsx` para maximizar a indexação em motores de busca.
- [x] Refatorar a lógica do botão "Início" no `Footer.tsx` para garantir um *smooth scroll* fluído até o topo da página.
- [x] Separar lógica de Client Components (Footer) de Server Components (Layout/Metadata) para conformidade com Next.js 15.

## Fase 2: Header & Hero (Refinamento de Luxo)
- [x] **Navegação:** Adicionar separador visual (linha border-b) e implementar efeito *Glassmorphism* (backdrop-blur) no `Navigation.tsx`.
- [x] **Navegação:** Atualizar link de "Contato" para Direct do Instagram com mensagem personalizada.
- [x] **Hero - Copywriting:** Alterar textos para "Joias artesanais", "ONDE A ARTE ENCONTRA OS METAIS" e "Coleção completa".
- [x] **Hero - Layout:** Reduzir escala da fonte para garantir visibilidade total sem cortes.

## Fase 3: Ajustes Manuais Espaciais (Instagram CTA)
- [ ] **Posicionamento:** Deslocar `@DARAFA_CWB` para a direita em relação ao texto "Artisan".
- [ ] **Posicionamento:** Ajustar botão "Seguir no Instagram" para baixo e para a lateral (fine-tuning de layout).

## Fase 4: Atualização de Manifesto
- [ ] Substituir o texto atual do manifesto por novo copywriting (Aguardando definição).

## Fase 5: Integração Final de Mídia (Vitrine)
- [ ] Substituir placeholders por imagens reais dos produtos no `Showcase.tsx`.