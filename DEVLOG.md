# DEVLOG - Portfolio DaRafa Joias

Documentação viva das decisões arquiteturais, evolução do layout e roadmap do projeto.

---

## Arquitetura e Stack Tecnológica
- **Ambiente de Desenvolvimento:** Google Project IDX.
- **Stack Front-end:** Next.js 15, TypeScript Strict, Tailwind v4.
- **Padrão de Organização:** Metodologia Atomic Design para subpastas e componentes lógicos.
- **Integrações de Back-end/Automação:** API para comunicação futura com n8n, Airtable e OpenAI API (Python 3.11/FastAPI protegido).

## Protocolo de Versionamento e Entrega
- **Commits:** Padronização estrita utilizando Conventional Commits em português (ex: `feat:`, `fix:`, `chore:`).
- **Registro:** Todo código gerado e implementado deve ter seu respectivo comando Git registrado e a alteração documentada no Changelog deste DEVLOG.
- **Integração IDX:** Entregas de código complexas devem ser divididas em duas partes, acompanhadas de instruções diretas de onde inserir o código e a ordem para a IA do IDX explicar e comentar o código em português.

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

### Backlog de Implementação (Tarefas Pendentes)

#### 1. Injeção de Conteúdo Final (Hero e Showcase) - AGENDADO PARA 05/03
- [x] **Conversão Viewport Hero:** Refatorar medidas fixas da seção Hero para `vw` garantindo consistência responsiva, seguindo o padrão aplicado no Instagram CTA.
- [ ] **Substituição Hero:** Trocar a imagem principal de destaque da seção Hero pela versão final aprovada.
- [ ] **Preenchimento de Catálogo:** Popular os cards vazios do carrossel com os assets fotográficos restantes.
- [ ] **Estratégia de Retenção (UX):** Adicionar 1 card extra ao final de cada categoria do Showcase com a etiqueta "Em breve", sinalizando atualização frequente de acervo para o utilizador.

#### 2. Tarefas Postergadas
- [ ] **Seta Mobile Longa (Instagram CTA):** Implementação de seta direcional estendida apontando para o footer. O código atual causou instabilidade no inline-block flex. Tarefa movida para branch de pesquisa/testes e temporariamente congelada na Main.
- [ ] **Staircase Typography (Botão CTA):** Transformar o botão "Seguir no Instagram" em uma escada tipográfica. O código foi testado e validado com sucesso na arquitetura, mas a aplicação definitiva foi adiada por questões de gestão de tempo e priorização da reta final.

#### 3. Infraestrutura e Deploy
- [ ] **Fluxo de Producao:** Executar o protocolo de deploy final (apontamento de DNS na Hostinger, configuracao de edge na Vercel e alteracao de visibilidade do repositorio no GitHub para PRIVATE).

---

## Roadmap de Engenharia (SEO, Seguranca e Infraestrutura)

### Concluídos (Logica - Invisivel na UI)

#### 1. SEO Avancado e Descoberta Organica
- [x] **Grafo de Conhecimento (God Mode SEO):** Reestruturação do JSON-LD utilizando a propriedade `@graph` para unificar `WebSite`, `Organization/JewelryStore` e `Person` (Fundadora) em uma única teia semântica para IAs.
- [x] **Acessibilidade e Machine Experience (MX):** Injeção de atributos `aria-label` invisíveis em elementos não-textuais (dots de navegação no Showcase e ícone SVG no Footer) garantindo legibilidade para LLMs e nota máxima no Lighthouse.
- [x] **Domínio de Entidade e Prova Social (JSON-LD):** Injeção de schema `JewelryStore` no layout raiz englobando `aggregateRating` (estrelas douradas na busca), `priceRange` (qualificação de público) e `sameAs` (vinculação de autoridade com o Instagram).
- [x] **Captura de Cauda Longa (FAQPage):** Implementação de microdados invisíveis na página principal respondendo perguntas estratégicas de negócio para ativar Rich Snippets (As pessoas também perguntam).
- [x] **Microdados de Produto Dinamicos (Schema.org):** Injetar JSON-LD do tipo `Product` no `Showcase.tsx` para ativar Rich Snippets no Google (visualizacao de produto na busca).
- [x] **Sitemap Orientado a Imagens:** Expandir `sitemap.ts` para mapear explicitamente as imagens HD, capturando trafego massivo via Google Images e Pinterest.
- [x] **Tratamento Rigoroso de Canonical URLs:** Parametrizar URLs canonicas no `layout.tsx` para forcar o dominio base e evitar punicao por conteudo duplicado.
- [x] **Politicas Avancadas no robots.txt:** Escrever diretivas para bloquear scrapers de IA e bots de spam, otimizando o Crawl Budget do Googlebot.

#### 2. Infraestrutura Edge e Performance
- [x] **Otimização Extrema de Core Web Vitals (LCP):** Refatoração paramétrica do componente `next/image`. Aplicação estrita de `priority`, `quality` customizado e regras `sizes` responsivas na imagem de dobra (Hero) para renderização instantânea, combinada com lazy loading escalável na galeria (Showcase).
- [x] **Geracao Dinamica de Open Graph (next/og):** Implementar biblioteca para gerar imagens de compartilhamento dinamicamente no servidor Edge.
- [x] **Middleware Edge (Seguranca e Roteamento):** Implementar `proxy.ts` na raiz para protecao contra bots maliciosos, injecao de HSTS e fundacao para testes A/B.
- [x] **Prefetching Estrategico e Cache:** Auditar a aplicacao para garantir geracao estatica (SSG) maxima e Stale-While-Revalidate (SWR) na CDN.
- [x] **Compressao e Image Caching:** Configurar politicas agressivas no `next.config.ts` para estender o TTL do cache de imagens HD e forcar otimizacao de banda.

#### 3. Escalabilidade de Dados e Integracoes
- [x] **Abstracao de Analytics (Data Layer):** Criar utilitario (`src/lib/analytics.ts`) com contratos de funcoes para engatilhar metodos de rastreamento (Pixel/GTM) nos botoes de CTA sem poluir os componentes.
- [x] **Estrutura Base de Webhooks para Leads:** Criar rota de API (`src/app/api/leads/route.ts`) blindada para o futuro envio de dados ao n8n e Airtable.

---

## Historico de Sprints (Changelog)

### [2026-03-05] - SEO Extremo, LLMO e Machine Experience
- [x] **Core Web Vitals (Hero & Showcase):** Implementação cirúrgica de propriedades LCP nativas (`priority`, `quality={90}`, `sizes`) no Next Image da seção Hero. Otimização de WebP em lote no Showcase para garantir lazy loading eficiente.
- [x] **Machine Experience (a11y):** Injetados `aria-labels` semânticos nos `dots` do Showcase e no link do Instagram no Footer para leitura nativa de robôs (ChatGPT, Perplexity) sem alterar hierarquia de Grid/Flexbox.
- [x] **SEO (Knowledge Graph):** Conversão do JSON-LD isolado para o formato interligado `@graph`, mapeando autoridade de domínio, loja física e pessoa fundadora (Rafaela) num único payload no `layout.tsx`.
- [x] **SEO (Microdados de Entidade):** Implementação de `JewelryStore` schema no `layout.tsx` com `aggregateRating` (nota 5.0 baseada em 147 avaliações), `priceRange` ($$$) e vinculação de rede social (`sameAs`).
- [x] **SEO (Rich Snippets):** Injeção de `FAQPage` estruturado na `page.tsx` para respostas diretas no motor de busca sem impacto na interface minimalista.
- [x] **Manifesto (Bugfix Mobile):** Correção do vazamento de scroll vertical (cross-axis overflow) no carrossel híbrido aplicando `overflow-y-hidden` e `touch-pan-x`.
- [x] **Instagram CTA (Cascata Tipográfica):** Implementado efeito visual de "escada" nas palavras "Seguir" e "no Instagram" exclusivamente para mobile.
- [x] **Hero (Responsividade Geométrica):** Refatoração completa da seção para Viewport Width (`vw`), garantindo proporção e escalabilidade cravada no modelo Poco X3 Pro (393px base).
- [x] **Hero (Cascata Tipográfica e Bugfix):** Implementado efeito "escada" nas palavras "OS" e "METAIS". Substituído `translate-x` por margens negativas em blocos `inline-block` para corrigir bug de clipping.

### [2026-03-04] - Refinamento Estrutural e Responsividade Universal
- [x] **Instagram CTA (Responsividade Geométrica):** Conversão definitiva das coordenadas de pixels estáticos (`px`) para Viewport Width (`vw`).
- [x] **Showcase (UX & Layout):** Aplicado padrão de margem global de 8px (gap-2), recuando limites horizontais e injetando "respiro".
- [x] **Manifesto (UX & Arquitetura):** Refatoração completa da seção para carrossel híbrido. 
- [x] **Hero & Instagram CTA (Pixel Pushing):** Balanço espacial milimétrico aplicado com travamento (`md:translate-x-0`) para blindar o Desktop.
- [x] **Footer (Layout Panorâmico):** Refatoração da navegação mobile com distribuição Edge-to-Edge (`justify-between`).

### [2026-03-02] - Engenharia de Mobile UI/UX
- [x] **Hero (Copywriting):** Alterado o texto do botão principal de "coleção completa" para "coleção autoral".
- [x] **Showcase (Mobile-First):** Implementada imersão Edge-to-Edge sem transbordo e navegação por arrasto (swipe).
- [x] **Instagram CTA (Brutalist Typography):** Implementada quebra estrutural assimétrica da palavra "Autoral" ("Auto/ral").

### [2026-02-28] - Arquitetura de SEO e Infraestrutura Invisivel
- [x] **Performance (Edge):** Criacao de rota em `api/og` integrando `next/og` para geracao dinamica de imagens estruturadas.
- [x] **Seguranca (Edge & Robots):** Implementacao de `proxy.ts` (HSTS) e bloqueio explicito de web scrapers de IA no `robots.ts`.
- [x] **SEO (Canonical & Sitemap):** Parametrizacao de canonical no `layout.tsx` e mapeamento de imagens HD no `sitemap.ts`.

### [2026-02-27] - QA, Copy e Revisao
- [x] **Seguranca (Infra):** Implementacao de Content Security Policy (CSP) no next.config.ts e prevencao de Tabnabbing.
- [x] **SEO Local (Infra):** Injecao de Structured Data (JewelryStore) para dominancia em buscas em Curitiba.

### [2026-02-26] - Engenharia de Dados e Assets
- [x] **Hooks & Arquitetura:** Criacao do hook `useScrollLock`, tipagem em `src/types` e desacoplamento de links globais em `siteConfig`.

### [2026-02-25] - Refinamentos de UX e Micro-interacoes
- [x] **UX Geral:** Aplicacao de tipografia metalica prata no @DARAFA_CWB e expansao do hitbox da logo.