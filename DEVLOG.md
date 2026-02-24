# 📜 DEVLOG - Portfólio DaRafa Joias

Documentação viva das decisões arquiteturais, evolução do layout e roadmap do projeto.

---

## Roadmap de UI/UX (Backlog Master)

### A Fazer (Pendências de Design e Engenharia)

#### 1. Seção Hero (`Hero.tsx`)
- [ ] **Tratamento de Asset (Deep Etching):** Recortar o fundo cinza da foto da Rafaela para criar uma silhueta limpa e sem bordas duras (aguardando edição e upload da nova imagem).
- [ ] **Composição "Capa de Revista" (Editorial):** Manter a imagem no *background* (atrás do texto), porém deslocada e ancorada em uma das laterais, criando uma assimetria elegante típica de editoriais de moda.
- [ ] **Testes de Sombras e Overlays:** Testar diferentes configurações de gradientes escuros sobre a imagem recortada para garantir contraste perfeito com a tipografia sem poluir a estética minimalista.
  - [ ] **Teste 1: Vignette Clássica ("Cartier")** - Foco radial no centro, extremidades em preto absoluto.
  - [ ] **Teste 2: Fade Cinematográfico ("Chão de Veludo")** - Gradiente linear vertical, base escura para leitura de CTA e topo iluminado.
  - [ ] **Teste 3: Sombra Âmbar Monocromática ("Ouro Escuro")** - Overlay quente (`mix-blend-multiply`) simulando iluminação de joalheria.
  - [ ] **Teste 4: Split Diagonal ("Editorial")** - Corte brutalista em diagonal, luz transversal na modelo.
  - [ ] **Teste 5: Contraste Supremo ("Vogue")** - Filtros CSS agressivos (`contrast`, `brightness`) para high-key/low-key.

---

## Histórico de Sprints (Changelog)

### [2026-02-24] - Decisões de Design System e Qualidade de Assets
- [x] **Design System (Paleta Definitiva):** Decisão arquitetural de manter a paleta "Preto de Luxo" (`#050505`, `#0a0a0a`) como definitiva. O alto contraste funciona como um "display de veludo", destacando o brilho dos metais em HD e elevando a percepção de valor (Luxo) muito acima do protótipo original.
- [x] **Showcase (Qualidade Visual):** Substituição de capturas de tela por assets gerados/aprimorados por IA em alta definição (HD), com quebra de cache implementada.
- [x] **Hero (Limpeza Visual):** Remoção do componente de granulação (`NoiseOverlay`) global para garantir máxima nitidez fotográfica.

### [2026-02-24] - Arquitetura Editorial e Refinamento Visual
- [x] **Hero (Background Test 1):** Implementação de layout centralizado com imagem *dark mode* ao fundo.
- [x] **UI Global (Texturas Metálicas):** Criação de utilitários de gradiente (`bg-metal-gold`, `bg-metal-silver`) e aplicação nas divisórias de seções.
- [x] **Footer (Localização):** Adição de link para o Google Maps ("Curitiba, PR ↗") e preservação do CTA do Instagram via ícone minimalista.

### [2026-02-23] - Integração de Assets e Micro-interações
- [x] **Showcase (Imagens):** Integração inicial das imagens e correção de caminhos case-sensitive.
- [x] **Boas Práticas de Engenharia:** Documentação da regra para nomenclatura de assets estáticos (kebab-case).
- [x] **Hero (Indicador Visual):** Implementação de seta minimalista animada com Framer Motion.
- [x] **Manifesto (Marca D'água):** Adição do símbolo da marca (`logo-abelha.png`) ao fundo utilizando Z-Index hierarchy e blend modes.