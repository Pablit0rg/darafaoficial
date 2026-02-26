# 📜 DEVLOG - Portfólio DaRafa Joias

Documentação viva das decisões arquiteturais, evolução do layout e roadmap do projeto.

---

## 🎯 Roadmap de UI/UX (Backlog Master)

### ⏳ A Fazer (Pendências de Design e Engenharia)

#### 1. Seção Hero (`Hero.tsx`)
- [ ] **Responsividade da Imagem (Art Direction):** Replanejar enquadramento mobile sem afetar filtros P&B. (Postergado para evitar quebra de estética editorial).
- [ ] **Efeito de Cor Seletiva (Asset Fotográfico):** Editar a foto no Photoshop aplicando P&B, porém isolando e preservando o brilho original Prata e Dourado estritamente nas unhas e no piercing (ver *Diretrizes Técnicas* abaixo).
- [ ] **Tipografia Metálica (UI):** Aplicar gradientes metálicos independentes no título principal para criar simetria com a fotografia. A palavra "ARTE" deve brilhar em Prata (`bg-metal-silver`), e a palavra "METAIS" deve brilhar em Ouro/Bronze (`bg-metal-gold`). (Aguardando asset final para validar contraste).
- [ ] **Refinamento de Espaçamento Tipográfico:** Replanejar deslocamento horizontal no desktop. (Postergado para garantir que a tipografia não invada a silhueta P&B da modelo).
- [ ] **Textura "Glitter" / Ruído Visual:** Reintroduzir o componente de ruído (`NoiseOverlay`) no Hero, adaptando a opacidade e o blend mode para simular a textura premium presente no projeto legado 'BLACK 02'.

> 💡 **Diretrizes Técnicas de Implementação (Hero):**
> * **Integração de Cor Seletiva (Selective Color):** O design atual utiliza a classe utilitária `grayscale` do Tailwind para forçar o P&B via motor de renderização. Assim que o asset fotográfico editado (com as unhas e piercing coloridos) for upado, a classe `grayscale` **deve ser obrigatoriamente removida** da tag `<Image />`. Caso contrário, o CSS anulará o tratamento nativo do arquivo.
> * **Posicionamento Defensivo (Desktop):** Para realizar o deslocamento horizontal da tipografia sem quebrar a grade mobile, o ajuste deve ser isolado por breakpoint. Localize o `<motion.div>` principal que agrupa os textos (aprox. linha 32) e aplique utilitários com o prefixo `md:` (ex: `md:translate-x-16`, `md:translate-x-24` ou `md:pl-20`). Teste os incrementos até que o alinhamento esquerdo do texto libere perfeitamente a silhueta da modelo.

#### 2. Seção Manifesto (`Manifesto.tsx`)
- [ ] **Engenharia de Prompt (Asset da Abelha):** A marca d'água atual (`logo-abelha.png`) está perdendo legibilidade. Criar um prompt de IA otimizado para gerar uma nova versão da abelha em tons de ouro/âmbar envelhecido, garantindo contraste sutil com o fundo "Preto de Luxo".

#### 3. Seção Instagram CTA (`InstagramCTA.tsx`)
- [ ] **Refinamento de Layout Assistido:** Mapeamento de linhas e ajuste fino manual de coordenadas (`margin`, `translate`) para o texto de apoio e o botão de "Seguir". (Requer acompanhamento linha-a-linha no código fonte).

---

## 📅 Histórico de Sprints (Changelog)

### ✅ [2026-02-26] - Infraestrutura e Utilitários de Lógica
- [x] **Logger (Engenharia):** Implementação de utilitário centralizado para gestão de logs em ambiente de desenvolvimento.
- [x] **Hooks (Lógica de UI):** Criação do hook `useScrollLock` para gerenciamento de estados de overlay/modais sem quebra de layout.
- [x] **Segurança (Config):** Implementação de Security Headers no `next.config.ts` (XSS, Clickjacking e No-Sniff).
- [x] **Arquitetura (Tipos):** Centralização de interfaces e contratos de dados em `src/types`.
- [x] **Helpers (Lógica):** Implementação de utilitários de formatação e geração de slugs em `src/lib`.
- [x] **Arquitetura (Config):** Centralização de constantes de negócio e links globais em `src/config/site.ts`.
- [x] **Refatoração (Lógica):** Desacoplamento de links estáticos nos componentes de navegação.
- [x] **Refatoração (Lógica):** Desacoplamento de dados geográficos e links sociais no `Footer.tsx`, agora consumindo de `siteConfig`. Design 100% preservado.
- [x] **Infraestrutura (Roteamento):** Implementação de Error Boundaries (`error.tsx`) e interceptador de rotas inexistentes (`not-found.tsx`) no App Router para garantir a resiliência da interface.

### ✅ [2026-02-25] - Refinamentos de UX e Micro-interações
- [x] **Hero (Conversão):** Transformação do subtítulo "Curitiba" em link de mapa externo para retenção local.
- [x] **Instagram CTA (UI):** Aplicação de tipografia metálica prata no título monumental `@DARAFA_CWB`.
- [x] **Showcase (Layout):** Fixação da estrutura estática atual. *Nota: Refatoração para Data-Binding postergada para preservar integridade do design*.
- [x] **Footer (Micro-interação):** Implementação de animação no ícone do Instagram com gradiente oficial no hover.
- [x] **Navegação Global (Acessibilidade):** Expansão do hitbox da logo e ajuste de sensibilidade de clique.