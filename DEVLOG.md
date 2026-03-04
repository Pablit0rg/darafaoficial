# DEVLOG - Portfolio DaRafa Joias

Documentacao viva das decisoes arquiteturais, evolucao do layout e roadmap do projeto.

---

## Foco Atual: Sprint Definitiva de Refinamento e Conteúdo (QA Final)

A arquitetura visual entra na sua última fase de ajustes de espaçamento estrutural, injeção de assets finais e calibração de componentes. O referencial estrito para validação mobile permanece sendo as dimensões do dispositivo Poco X3 Pro.

### Protocolo de Inicialização Diária
**Regra de Setup (Gatilho: "bom gemini dia..."):**
Antes de iniciar o desenvolvimento e aplicar qualquer edição de layout, verificar e configurar obrigatoriamente as dimensões do modelo base no *DevTools* para simulação precisa:
* **Device Name:** Poco X3 Pro
* **Width (Largura):** 393
* **Height (Altura):** 873
* **Device pixel ratio:** 2.75
* **User agent string:** (Em branco)
* **Device type:** Mobile

### Backlog de Implementação (Tarefas Definitivas)

#### 1. Engenharia de Espaçamento e Margens (Global)
- [x] **Respiro Vertical:** Desacoplar as seções Manifesto, Showcase (Catálogo) e Autoral (Instagram CTA). Restaurar o espaçamento vertical entre elas, garantindo uma transição fluida ("breathing room") tanto no PC quanto no Mobile.
- [x] **Padronização de Margens Laterais (X-Axis):** Reduzir as margens laterais globais (esquerda e direita) das seções. O novo valor de *padding* deve ser matematicamente idêntico ao espaçamento interno (gap) existente entre os cards do carrossel, unificando a grelha do portfólio.
- [x] **Restituição de Hierarquia:** Injetar novamente o subtítulo "Algumas criações" no topo da seção Showcase (Catálogo), posicionado com o novo padrão de margem estabelecido.

#### 2. Secao Manifesto (Refatoração de Componente)
- [x] **Carrossel de Assets:** Substituir a imagem estática da "abelha rainha" por um componente de carrossel interativo (arraste/swipe), mantendo a mesma engenharia do catálogo.
- [x] **Tratamento Visual:** Aplicar filtro escuro (overlay) nas imagens do novo carrossel para manter a consistência com a paleta Preto de Luxo.
- [x] **Restauração de Copy:** Reativar o texto original do manifesto que havia sido ocultado, avaliando a necessidade de ajuste tipográfico no letreiro/título da seção para acomodar o novo layout.

#### 3. Secao Instagram CTA / Autoral
- [x] **Bugfix de Coordenadas (Desktop):** Realinhar manualmente as posições do título, texto e botão estritamente na visualização de PC, garantindo que a versão Mobile (Poco X3 Pro) permaneça 100% blindada e inalterada.
- [x] **Micro-tipografia (O "Cubo"):** Ajustar o rastreamento (tracking/word-spacing) do texto justificado "Novos drops, processos de criação e atendimento exclusivo via Direct." para eliminar espaços irregulares entre as palavras ("rios" de texto), garantindo a estética de um bloco editorial perfeito.
- [ ] **Staircase Typography (Botão CTA) - POSTERGADO:** Transformar o botão "Seguir no Instagram" em uma escada tipográfica. O código foi testado e validado com sucesso na arquitetura, mas a aplicação definitiva foi adiada por questões de gestão de tempo e priorização da reta final.

#### 4. Injeção de Conteúdo Final (Hero e Showcase)
- [ ] **Substituição Hero:** Trocar a imagem principal de destaque da seção Hero pela versão final aprovada.
- [ ] **Preenchimento de Catálogo:** Popular os cards vazios do carrossel com os assets fotográficos restantes.
- [ ] **Estratégia de Retenção (UX):** Adicionar 1 card extra ao final de cada categoria do Showcase com a etiqueta "Em breve", sinalizando atualização frequente de acervo para o utilizador.

#### 5. Infraestrutura e Deploy
- [ ] **Fluxo de Producao:** Executar o protocolo de deploy final (apontamento de DNS na Hostinger, configuracao de edge na Vercel e alteracao de visibilidade do repositorio no GitHub para PRIVATE).

---

## Roadmap de Engenharia (SEO, Seguranca e Infraestrutura)

### Concluídos (Logica - Invisivel na UI)

#### 1. SEO Avancado e Descoberta Organica
- [x] **Microdados de Produto Dinamicos (Schema.org):** Injetar JSON-LD do tipo `Product` no `Showcase.tsx` para ativar Rich Snippets no Google (visualizacao de produto na busca).
- [x] **Sitemap Orientado a Imagens:** Expandir `sitemap.ts` para mapear explicitamente as imagens HD, capturando trafego massivo via Google Images e Pinterest.
- [x] **Tratamento Rigoroso de Canonical URLs:** Parametrizar URLs canonicas no `layout.tsx` para forcar o dominio base e evitar punicao por conteudo duplicado.
- [x] **Politicas Avancadas no robots.txt:** Escrever diretivas para bloquear scrapers de IA e bots de spam, otimizando o Crawl Budget do Googlebot.

#### 2. Infraestrutura Edge e Performance
- [x] **Geracao Dinamica de Open Graph (next/og):** Implementar biblioteca para gerar imagens de compartilhamento (WhatsApp/Meta) dinamicamente no servidor Edge.
- [x] **Middleware Edge (Seguranca e Roteamento):** Implementar `proxy.ts` na raiz para protecao contra bots maliciosos, injecao de HSTS e fundacao para testes A/B.
- [x] **Prefetching Estrategico e Cache:** Auditar a aplicacao para garantir geracao estatica (SSG) maxima e Stale-While-Revalidate (SWR) na CDN.
- [x] **Compressao e Image Caching:** Configurar politicas agressivas no `next.config.ts` para estender o TTL do cache de imagens HD e forcar otimizacao de banda.

#### 3. Escalabilidade de Dados e Integracoes
- [x] **Abstracao de Analytics (Data Layer):** Criar utilitario (`src/lib/analytics.ts`) com contratos de funcoes para engatilhar metodos de rastreamento (Pixel/GTM) nos botoes de CTA sem poluir os componentes.
- [x] **Estrutura Base de Webhooks para Leads:** Criar rota de API (`src/app/api/leads/route.ts`) blindada para o futuro envio de dados ao n8n e Airtable.

---

## Historico de Sprints (Changelog)

### [2026-03-04] - Refinamentos Manuais e Pixel Pushing (Mobile)
- [x] **Instagram CTA (Arquitetura):** Postergada a aplicacao estética de "Staircase Typography" (escada) no botao principal. O isolamento de blocos e coordenadas foi validado, mas a tarefa foi congelada estrategicamente para combater a fadiga visual e priorizar a injecao de conteudo final.
- [x] **Hero (Pixel Pushing):** Links "Curitiba" e "Joias artesanais" deslocados assimetricamente no eixo X e Y (linha de visao da fotografia) no mobile, blindando a resolucao Desktop.
- [x] **Instagram CTA (Pixel Pushing):** Balanço espacial milimétrico aplicado com `translate`. Título `@DARAFA_CWB` reposicionado e "Cubo" editorial puxado assimetricamente para o espaço vazio entre a quebra tipográfica "Auto/ral".
- [x] **Instagram CTA (Bugfix):** Trava de breakpoint implementada (`md:translate-x-0`) para garantir que o *pixel pushing* mobile não interfira ou quebre o alinhamento da versão Desktop.
- [x] **Instagram CTA (UX):** Botão principal de conversão deslocado nos eixos X e Y de forma autônoma para harmonizar o balanço visual da seção.
- [x] **Footer (Layout Panorâmico):** Refatoração da navegação mobile com distribuição Edge-to-Edge (`justify-between`), ancorando itens nas extremidades e centralizando "Curitiba, PR" com posicionamento absoluto.
- [x] **Manifesto (UX e Integração):** Ocultação do bloco de texto original com a classe `invisible` para preservar milimetricamente as dimensões do container e a proporção da imagem da abelha.
- [x] **Hero (Arquitetura):** Postergada animação individual da string "ONDE A ARTE" devido a conflitos de renderização de árvore no Framer Motion com `inline-block`.

### [2026-03-02] - Engenharia de Mobile UI/UX
- [x] **Hero (Copywriting):** Alterado o texto do botão principal de "coleção completa" para "coleção autoral".
- [x] **Manifesto (UX):** Reposicionamento de linha dourada e ajustes de proporção da marca d'água.
- [x] **Showcase (Mobile-First):** Implementada imersão Edge-to-Edge sem transbordo e engenharia de carrossel de produtos com navegação por arrasto (swipe) e dot indicators.
- [x] **Showcase (Limpeza):** Remoção do título "Últimas Criações" e zeramento do preenchimento superior para colapsar o grid na seção Manifesto.
- [x] **Instagram CTA (Responsive Design):** Escala de impacto aplicada no mobile com Viewport Width (`vw`), garantindo proporção responsiva contínua para o título principal `@DARAFA_CWB`.
- [x] **Instagram CTA (Brutalist Typography):** Implementada quebra estrutural assimétrica da palavra "Autoral" ("Auto/ral") no background mobile.
- [x] **Footer (Mobile):** Inversão da hierarquia de informação, posicionando links de navegação no topo e direitos autorais na base absoluta.

### [2026-02-28] - Arquitetura de SEO e Infraestrutura Invisivel
- [x] **Infra (Cache):** Configuracao de politicas de TTL para compressao de imagens e habilitacao de SWR no `page.tsx` para performance edge.
- [x] **Dados e Integracoes:** Criacao de camada de Analytics (`src/lib/analytics.ts`) e endpoint blindado de API (`src/app/api/leads/route.ts`) para futura conexao com n8n/Airtable.
- [x] **Hero (UI):** Aplicacao de tipografia metalica (Prata e Ouro/Bronze) separada e injecao de componente de ruido visual (NoiseOverlay) para textura premium.
- [x] **Performance (Edge):** Criacao de rota em `api/og` integrando `next/og` para geracao dinamica de imagens estruturadas de Open Graph via query params.
- [x] **Seguranca (Edge):** Implementacao de `proxy.ts` para interceptacao de rede, bloqueio de bad bots e injecao de HSTS na fronteira.
- [x] **Seguranca (Robots):** Configuracao avancada de `robots.ts` com bloqueio explicito de web scrapers de IA para protecao de Crawl Budget e propriedade intelectual.
- [x] **SEO (Canonical):** Parametrizacao estrita da tag canonical no `layout.tsx` para prevencao de duplicate content e consolidacao de autoridade do dominio.
- [x] **Infraestrutura (Config):** Atualizacao do `siteConfig.ts` com o dominio oficial absoluto (`https://www.darafa.com`) e resolucao de bypass de tipagem no sitemap.
- [x] **SEO (Visual):** Refatoracao do `sitemap.ts` para incluir mapeamento explicito de imagens HD e forcar a indexacao profunda no Google Images.
- [x] **SEO (Microdados):** Injecao de JSON-LD (`ItemList` e `Product`) silenciosa no componente Showcase para qualificar a pagina para Rich Snippets comerciais.

### [2026-02-27] - QA, Copy e Revisao
- [x] **Seguranca (Infra):** Implementacao de Content Security Policy (CSP) rigorosa no next.config.ts para prevencao de ataques XSS.
- [x] **Performance (Analytics):** Criacao de wrapper isolado (AnalyticsWrapper) com lazyOnload para ofuscacao de metricas sem bloqueio de renderizacao.
- [x] **Arquitetura (Config):** Adicao da propriedade url global no siteConfig para resolucao de rotas canonicas e metadados.
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