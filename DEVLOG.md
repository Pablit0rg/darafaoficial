# 📜 DEVLOG - Portfólio DaRafa Joias

Documentação viva das decisões arquiteturais, evolução do layout e roadmap do projeto.

---

## Roadmap de UI/UX (Backlog Master)

### A Fazer (Pendências de Design e Engenharia)

#### 1. Seção Hero (`Hero.tsx`)
- [ ] **Tratamento de Asset (Deep Etching):** Recortar o fundo cinza da foto da Rafaela para criar uma silhueta limpa e sem bordas duras (aguardando edição e upload da nova imagem).
- [ ] **Composição "Capa de Revista" (Editorial):** Manter a imagem no *background* (atrás do texto), porém deslocada e ancorada em uma das laterais, criando uma assimetria elegante típica de editoriais de moda.
- [ ] **Limpeza de Ruído Visual:** Desativar/Remover o componente de granulação (`NoiseOverlay`) da tela principal para garantir máxima nitidez.
- [ ] **Testes de Sombras e Overlays:** Testar diferentes configurações de gradientes escuros sobre a imagem recortada para garantir contraste perfeito com a tipografia sem poluir a estética minimalista.

#### 2. Design System Global
- [ ] **Paleta de Cores Definitiva:** Atualizar as variáveis de cor no Tailwind (`globals.css`), extraindo tons da identidade visual oficial (logo) e do padrão estético do Instagram profissional.

---

## Histórico de Sprints (Changelog)

### [2026-02-24] - Arquitetura Editorial e Refinamento Visual
- [x] **Hero (Background Test 1):** Implementação de layout centralizado com imagem *dark mode* ao fundo.
- [x] **UI Global (Texturas Metálicas):** Criação de utilitários de gradiente (`bg-metal-gold`, `bg-metal-silver`) e aplicação nas divisórias de seções.
- [x] **Footer (Localização):** Adição de link para o Google Maps ("Curitiba, PR ↗") e preservação do CTA do Instagram via ícone minimalista.

### [2026-02-23] - Integração de Assets e Micro-interações
- [x] **Showcase (Imagens):** Integração das imagens reais no grid (`PontoDeLuz.jpg`, `Colar.jpg`, `Brincos.jpg`, `Lilás&Azul.jpg`, `BraceletesComPingente&Miçangas.jpg`).
- [x] **Showcase (Correção):** Resolução do bug de renderização ajustando o *path* das imagens para a regra *case-sensitive* do ambiente Linux.
- [x] **Boas Práticas de Engenharia:** Documentação da regra para nomenclatura de assets estáticos (evitar caracteres especiais/acentos, usar *kebab-case* em minúsculo).
- [x] **Hero (Indicador Visual):** Implementação de seta minimalista animada com Framer Motion indicando scroll direto para o botão CTA.
- [x] **Manifesto (Marca D'água):** Adição do símbolo da marca (`logo-abelha.png`) ao fundo utilizando Z-Index hierarchy e filtros CSS (`mix-blend-screen`, `grayscale`, `opacity-5`).