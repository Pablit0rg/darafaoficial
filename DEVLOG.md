# DEVLOG - Portfolio DaRafa Joias

Documentacao viva das decisoes arquiteturais, evolucao do layout e roadmap do projeto.

---

## Roadmap de Engenharia (SEO, Seguranca e Infraestrutura)

### A Fazer (Pendencias de Logica - Invisivel na UI)

#### 1. SEO Tecnico e Semantico
*(Todas as pendencias arquiteturais de SEO foram concluidas)*

#### 2. Seguranca Avancada e Performance
- [ ] **Content Security Policy (CSP) Estrita:** Implementar diretivas rigorosas de seguranca para bloqueio absoluto de XSS e injecao de scripts nao autorizados.
- [ ] **Ofuscacao de Metricas Sensiveis:** Preparar wrapper logico estrutural para futura injecao de Analytics em background, sem causar gargalo no DOM principal.

---

## Roadmap de UI/UX (Backlog Master)

### A Fazer (Pendencias de Design e Engenharia)

#### 1. Secao Hero (Hero.tsx)
- [ ] **Responsividade da Imagem (Art Direction):** Replanejar enquadramento mobile sem afetar filtros P&B. (Postergado para evitar quebra de estetica editorial).
- [ ] **Efeito de Cor Seletiva (Asset Fotografico):** Editar a foto no Photoshop aplicando P&B, porem isolando e preservando o brilho original Prata e Dourado estritamente nas unhas e no piercing.
- [ ] **Tipografia Metalica (UI):** Aplicar gradientes metalicos independentes no titulo principal para criar simetria com a fotografia. A palavra "ARTE" deve brilhar em Prata (bg-metal-silver), e a palavra "METAIS" deve brilhar em Ouro/Bronze (bg-metal-gold).
- [ ] **Refinamento de Espacamento Tipografico:** Replanejar deslocamento horizontal no desktop. (Postergado).
- [ ] **Textura "Glitter" / Ruido Visual:** Reintroduzir o componente de ruido (NoiseOverlay) no Hero, adaptando a opacidade e o blend mode.

> Diretrizes Tecnicas de Implementacao (Hero):
> * Integracao de Cor Seletiva (Selective Color): O design atual utiliza a classe utilitaria grayscale do Tailwind para forcar o P&B. Assim que o asset fotografico editado for upado, a classe grayscale deve ser obrigatoriamente removida da tag Image.
> * Posicionamento Defensivo (Desktop): Para realizar o deslocamento horizontal da tipografia sem quebrar a grade mobile, o ajuste deve ser isolado por breakpoint.

#### 2. Secao Manifesto (Manifesto.tsx)
- [ ] **Desacoplamento de Layout (UI):** Refatorar o componente para separar estruturalmente o titulo "Manifesto" do container do paragrafo. O titulo deve operar em uma camada livre para permitir micro-ajustes de posicionamento (margin/translate) em relacao a coroa da abelha, sem empurrar o resto do conteudo.
- [ ] **Integracao Visual (UI):** Remover classes de escala de cinza e ajustar opacity/blend-mode para integrar o brilho ouro do asset PNG com o fundo Preto de Luxo.

#### 3. Secao Showcase (Showcase.tsx)
- [ ] **Logica de Layout (Body-Mapping):** Reestruturar o grid de alvenaria. (Adiado para revisao final de arquitetura).
- [ ] **Deep Linking (Conversao Direta):** Mapear e inserir URLs diretas do Instagram. (Adiado para revisao final de arquitetura).

#### 4. Secao Instagram CTA (InstagramCTA.tsx)
- [ ] **Desacoplamento de Layout (UI):** Refatorar o componente para separar estruturalmente o botao "Seguir no Instagram" do bloco de texto superior. O botao deve operar de forma isolada para permitir micro-ajustes verticais sem empurrar o titulo monumental @DARAFA_CWB.
- [ ] **Hierarquia Metalica (Ouro/Bronze):** Alterar o gradiente do titulo monumental @DARAFA_CWB de Prata para Ouro/Bronze. (Postergado).
- [ ] **Destaque de Conversao:** Replicar este mesmo gradiente Ouro/Bronze no botao de acao "Seguir no Instagram ->", maximizando o apelo visual para o clique. (Postergado).
- [ ] **Hierarquia Metalica (Prata):** Aplicar o gradiente Prata estritamente no texto de apoio ("Novos drops, processos de criacao e atendimento exclusivo via Direct."). (Postergado).
- [ ] **Refinamento de Layout Assistido:** Mapeamento de linhas e ajuste fino manual de coordenadas (margin, translate) para o texto de apoio e o botao de "Seguir". (Postergado).

#### 5. QA (Quality Assurance) e Deploy
- [ ] **Fluxo de Producao:** Executar o protocolo de deploy final (apontamento de DNS na Hostinger, configuracao de edge na Vercel e alteracao de visibilidade do repositorio no GitHub para PRIVATE).

---

## Historico de Sprints (Changelog)

### [2026-02-27] - QA, Copy e Revisao
- [x] **SEO Local (Infra):** Injecao de Structured Data (JSON-LD schema: JewelryStore) no layout global para dominancia em buscas na regiao de Curitiba.
- [x] **Social Media (Infra):** Expansao de metadados com Open Graph e Twitter Cards para renderizacao de Rich Links no WhatsApp e Instagram.
- [x] **Performance (Rede):** Implementacao de tags de pre-connect no header para antecipacao de resolucao de DNS (Google Maps e Instagram).
- [x] **SEO Tecnico:** Implementacao nativa de rastreamento com sitemap.xml e regras em robots.txt via Next.js API.
- [x] **Hero (UX):** Reimplementada a ancora de rolagem suave no link "Joias artesanais" direcionando para a secao Showcase.
- [x] **Geolocalizacao (Infra):** Atualizacao global da URL de apontamento do Google Maps (loja fisica) no siteConfig, Footer e Hero.
- [x] **Instagram CTA (UI):** Correcao de conflito de renderizacao entre bg-clip-text e framer-motion na seta animada, garantindo o gradiente prata nativo.
- [x] **Hero (Design):** Refinamento milimetrico de coordenadas (Eixo X e Y) do bloco tipografico para balanco visual perfeito com o asset fotografico no desktop.
- [x] **Tratamento e Curadoria de Asset:** Deep Etching validado via Remove.bg. Arquivo com coroa (logo-abelha-raw-05-removebg-preview.png) eleito como asset oficial para a secao Manifesto e renderizado com sucesso no DOM.
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