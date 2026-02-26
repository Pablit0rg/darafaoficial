# DEVLOG - Portfolio DaRafa Joias

Documentacao viva das decisoes arquiteturais, evolucao do layout e roadmap do projeto.

---

## Roadmap de UI/UX (Backlog Master)

### A Fazer (Pendencias de Design e Engenharia)

#### 1. Secao Hero (Hero.tsx)
- [ ] **Ancoragem de Fluxo (UX):** Reimplementar a ancora de rolagem suave (scroll-smooth) no texto "Joias artesanais" para a secao Showcase (Perdido no rollback de seguranca).
- [ ] **Responsividade da Imagem (Art Direction):** Replanejar enquadramento mobile sem afetar filtros P&B. (Postergado para evitar quebra de estetica editorial).
- [ ] **Efeito de Cor Seletiva (Asset Fotografico):** Editar a foto no Photoshop aplicando P&B, porem isolando e preservando o brilho original Prata e Dourado estritamente nas unhas e no piercing.
- [ ] **Tipografia Metalica (UI):** Aplicar gradientes metalicos independentes no titulo principal para criar simetria com a fotografia. A palavra "ARTE" deve brilhar em Prata (bg-metal-silver), e a palavra "METAIS" deve brilhar em Ouro/Bronze (bg-metal-gold).
- [ ] **Refinamento de Espacamento Tipografico:** Replanejar deslocamento horizontal no desktop. (Postergado).
- [ ] **Textura "Glitter" / Ruido Visual:** Reintroduzir o componente de ruido (NoiseOverlay) no Hero, adaptando a opacidade e o blend mode.

> Diretrizes Tecnicas de Implementacao (Hero):
> * Integracao de Cor Seletiva (Selective Color): O design atual utiliza a classe utilitaria grayscale do Tailwind para forcar o P&B. Assim que o asset fotografico editado for upado, a classe grayscale deve ser obrigatoriamente removida da tag Image.
> * Posicionamento Defensivo (Desktop): Para realizar o deslocamento horizontal da tipografia sem quebrar a grade mobile, o ajuste deve ser isolado por breakpoint.

#### 2. Secao Manifesto (Manifesto.tsx)
- [ ] **Tratamento de Asset (Deep Etching):** Remover o fundo preto absoluto dos arquivos de rascunho (logo-abelha-raw-*.jpg) gerados por IA, convertendo-os para PNGs transparentes (logo-abelha-gold-*-hd.png).
- [ ] **Integracao e A/B Testing:** Aplicar os novos assets no componente Manifesto.tsx e testar individualmente a legibilidade, contraste e blend mode contra o fundo Preto de Luxo.

#### 3. Secao Showcase (Showcase.tsx)
- [ ] **Logica de Layout (Body-Mapping):** Reestruturar o grid de alvenaria. (Adiado para revisao final de arquitetura).
- [ ] **Deep Linking (Conversao Direta):** Mapear e inserir URLs diretas do Instagram. (Adiado para revisao final de arquitetura).

#### 4. Secao Instagram CTA (InstagramCTA.tsx)
- [ ] **Hierarquia Metalica (Ouro/Bronze):** Alterar o gradiente do titulo monumental @DARAFA_CWB de Prata para Ouro/Bronze. (Postergado).
- [ ] **Destaque de Conversao:** Replicar este mesmo gradiente Ouro/Bronze no botao de acao "Seguir no Instagram ->", maximizando o apelo visual para o clique. (Postergado).
- [ ] **Hierarquia Metalica (Prata):** Aplicar o gradiente Prata estritamente no texto de apoio ("Novos drops, processos de criacao e atendimento exclusivo via Direct."). (Postergado).
- [ ] **Refinamento de Layout Assistido:** Mapeamento de linhas e ajuste fino manual de coordenadas (margin, translate) para o texto de apoio e o botao de "Seguir". (Postergado).

#### 5. QA (Quality Assurance) e Deploy
- [ ] **Fluxo de Producao:** Executar o protocolo de deploy final (apontamento de DNS na Hostinger, configuracao de edge na Vercel e alteracao de visibilidade do repositorio no GitHub para PRIVATE).

---

## Historico de Sprints (Changelog)

### [2026-02-27] - QA, Copy e Revisao
- [x] **Auditoria e Seguranca (QA):** Bateria de testes de seguranca concluida. Vulnerabilidades de Tabnabbing detectadas e corrigidas com injecao global de rel="noopener noreferrer".
- [x] **Validacao de Performance (QA):** Compilacao de producao (npm run build) aprovada. Arvore de componentes integra e rotas pre-renderizadas como estaticas (SSG).
- [x] **Instagram CTA (Copy):** Substituicao da watermark de fundo de "ARTISAN" para "AUTORAL", preservando intacta a estrutura tipografica e o design original no componente.

### [2026-02-26] - Engenharia de Dados e Assets
- [x] **Prompt Engineering (Asset da Abelha):** Geracao de multiplos assets em IA utilizando engenharia de prompt restrita a texturas em ouro/ambar envelhecido sobre fundo preto absoluto. Lote de imagens salvo em diretorio de rascunho.
- [x] **Logger (Engenharia):** Implementacao de utilitario centralizado para gestao de logs em ambiente de desenvolvimento.
- [x] **Hooks (Logica de UI):** Criacao do hook useScrollLock para gerenciamento de estados de overlay/modais sem quebra de layout.
- [x] **Seguranca (Config):** Implementacao de Security Headers no next.config.ts (XSS, Clickjacking e No-Sniff).
- [x] **Arquitetura (Tipos):** Centralizacao de interfaces e contratos de dados em src/types.
- [x] **Helpers (Logica):** Implementacao de utilitarios de formatacao e geracao de slugs em src/lib.
- [x] **Arquitetura (Config):** Centralizacao de constantes de negocio e links globais em src/config/site.ts.
- [x] **Refatoracao (Logica):** Desacoplamento de links estaticos nos componentes de navegacao.
- [x] **Refatoracao (Logica):** Desacoplamento de dados geograficos e links sociais no Footer.tsx, agora consumindo de siteConfig. Design 100% preservado.
- [x] **Infraestrutura (Roteamento):** Implementacao de Error Boundaries (error.tsx) e interceptador de rotas inexistentes (not-found.tsx) no App Router para garantir a resiliencia da interface.

### [2026-02-25] - Refinamentos de UX e Micro-interacoes
- [x] **Hero (Conversao):** Transformacao do subtitulo "Curitiba" em link de mapa externo para retencao local.
- [x] **Instagram CTA (UI):** Aplicacao de tipografia metalica prata no titulo monumental @DARAFA_CWB.
- [x] **Showcase (Layout):** Fixacao da estrutura estatica atual. Nota: Refatoracao para Data-Binding postergada para preservar integridade do design.
- [x] **Footer (Micro-interacao):** Implementacao de animacao no icone do Instagram com gradiente oficial no hover.
- [x] **Navegacao Global (Acessibilidade):** Expansao do hitbox da logo e ajuste de sensibilidade de clique.