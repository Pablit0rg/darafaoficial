# DEVLOG - Portfolio DaRafa Joias

Documentação viva das decisões arquiteturais, evolução do layout e roadmap do projeto.

---

## Arquitetura e Stack Tecnológica

- **Ambiente de Desenvolvimento:** Google Project IDX.
- **Stack Front-end:** Next.js 15, TypeScript Strict, Tailwind v4.
- **Padrão de Organização:** Metodologia Atomic Design para subpastas e componentes lógicos.
- **Integrações de Back-end/Automação:** API para comunicação futura com n8n, Airtable e OpenAI API (Python 3.11/FastAPI protegido).

---

## Protocolo de Versionamento e Entrega

- **Commits:** Padronização estrita utilizando Conventional Commits em português (ex: `feat:`, `fix:`, `chore:`).
- **Registro:** Todo código gerado e implementado deve ter seu respectivo comando Git registrado e a alteração documentada no Changelog deste DEVLOG.
- **Integração IDX:** Entregas de código complexas devem ser divididas em duas partes, acompanhadas de instruções diretas de onde inserir o código e a ordem para a IA do IDX explicar e comentar o código em português.

---

## Foco Atual: Sprint de Refinamento Final e Conteúdo

A arquitetura visual entra na fase final de ajustes de conteúdo, calibração matemática de UI e preparação para o Deploy.

### Protocolo de Inicialização Diária

**Regra de Setup (Gatilho: "bom gemini dia..."):** Antes de iniciar o desenvolvimento e aplicar qualquer edição de layout, verificar e configurar obrigatoriamente as dimensões do modelo base no DevTools para simulação precisa:

- **Device Name:** Poco X3 Pro
- **Width (Largura):** 393
- **Height (Altura):** 873
- **Device pixel ratio:** 2.75
- **User agent string:** (Em branco)
- **Device type:** Mobile

---

## Backlog de Implementação (Tarefas Pendentes)

### 1. Hero Section (Visibilidade, Anatomia e Estabilidade)

- [x] **Conversao Viewport Hero:** Refatoracao de medidas fixas para `vw` garantindo consistencia responsiva.
- [ ] **Refatoracao Matematica (Clamp) — PRIORIDADE:** Substituir medidas puras de `vw` por `clamp(MIN, IDEAL, MAX)` nos textos e coordenadas de `translate` para blindar o layout contra quebras no formato Tablet/Chromebook. O texto deve congelar em um tamanho maximo seguro.
- [ ] **Substituicao e Teste de Imagem (Rafa):** Aplicar a nova foto da Rafaela no container da Hero. Avaliar o enquadramento do rosto com `object-cover`. A imagem atual apresenta artefato de geracao no osso nasal.
- [ ] **Refacao no Grok (se necessario):** Recriar a foto com instrucao explicita: `"Nasal bridge perfectly straight, smooth, zero bump"`. Usar High-Key lighting e fundo claro para visibilidade outdoor. Gerar o asset diretamente em P&B para eliminar a necessidade do filtro `grayscale` via CSS.
- [ ] **Engenharia de Filtros (Tailwind):** Caso o asset nativo P&B nao seja viavel, revisar o filtro para nao escurecer a tela outdoor. Classe de teste: `grayscale contrast-125 brightness-110`.

### 2. Showcase (Catalogo)

- [ ] **Engenharia de Interacao (UX Silenciosa):** Remover o efeito de animacao de zoom (`scale` / `hover:scale`) dos cards. O layout deve permanecer estatico e elegante ao passar o mouse.
- [ ] **Sinalizacao de Clique (Hitbox):** Garantir que a unica micro-interacao visual seja a alteracao do ponteiro do mouse para `cursor-pointer`.
- [ ] **Expansao de Acervo (Grid):** Criar e adicionar mais 10 cards estruturais ao grid (aproximadamente duas fileiras completas de produtos).
- [ ] **Limpeza de Placeholders:** Remover todos os cards de teste e placeholders antigos.
- [ ] **Injecao de Assets Reais:** Inserir as imagens oficiais em alta resolucao baixadas do Instagram nos cards recriados.
- [ ] **Estrategia de Retencao (UX):** Adicionar 1 card extra ao final de cada categoria com a etiqueta "Em breve", sinalizando atualizacao frequente de acervo.

### 3. Instagram CTA (Protecao de Box Model e Setas)

- [ ] **Protecao de Box Model — PRIORIDADE:** Injetar `padding-bottom` no contêiner para criar um para-choque inferior no mobile, impedindo que a seta vaze da secao quando a barra de enderecos do browser (`dvh`) aparecer.
- [ ] **Conversao de Medidas da Seta (Mobile) — PRIORIDADE:** Converter as medidas dinamicas da seta de `vw` para `px` estaticos, protegendo a proporcao geometrica contra distorcoes.
- [ ] **Seta Vertical Desktop (Postergada):** Substituir a seta tipografica `->` pela versao SVG apontando para baixo, usando posicionamento `absolute` sem quebrar a estrutura Flexbox existente.

### 4. Secao Manifesto (Expansao Panoramica)

- [ ] **Sequencia Narrativa:** Configurar o carrossel para iniciar com a Logo Abelha Rainha, seguida pela foto focada no brinco.
- [ ] **Expansao via Outpainting (Desktop):** Utilizar o Grok para expandir os assets para a proporcao panoramica `1920x480px` (ratio ~4:1). Exigir enquadramento centralizado, preservar sujeito central, expandir apenas lateralmente, manter textura e iluminacao do fundo original.
- [ ] **Protocolo de Entrega do Asset:** Recortar as barras cinzas superior e inferior, exportar em `1920x480px` JPG e salvar como `manifesto-processo-criativo-N-desktop.jpg` em `/public/assets/images/manifesto/`.
- [ ] **Isolamento de Filtro P&B (Desktop):** Aplicar `md:grayscale` via Tailwind exclusivamente na versao Desktop, mantendo a versao mobile colorida intacta.
- [ ] **Restauracao da Tipografia Inicial:** Restaurar a copy original sobreposta a logo da Abelha Rainha apos validar a insercao das imagens finais.

### 5. Identidade Visual (Logo Abelha Rainha)

- [ ] **Retrabalho Artistico no Grok:** Gerar novas variacoes da logo focando em estetica High-Ticket (ex: "esculpida em fio de aluminio dourado/rose gold" ou textura de ouro/ambar envelhecido sobre fundo preto absoluto).

### 6. Auditoria de Breakpoints Tailwind (Responsividade Cross-Device)

- [x] **QA `xl` (1280px+) — Desktop:** Validado. Layout estavel apos remocao do `min-w-[280px]` no `Showcase.tsx`.
- [x] **QA `lg` (1024px+) — Showcase:** Estavel apos correcao do `min-w`.
- [ ] **QA `lg` Hero (1024px+):** Pendente de prints do Chromebook para diagnostico. A refatoracao de `clamp()` deve resolver este breakpoint.
- [ ] **QA `md` (768px+) — Tablet:** Comportamento identificado — layout muda em 1023px. Sessao dedicada apos conclusao do desktop.
- [ ] **QA `sm` (640px+) — Mobile grande / Tablet pequeno:** Validar textos, espacamentos e posicionamentos em iPhone 14 Pro Max e tablets compactos.
- [ ] **QA `2xl` (1536px+) — Desktop grande:** Garantir que elementos nao fiquem excessivamente espacados ou desproporcionais em ultrawide.
- **Referencial de Dispositivos:** `sm` → Samsung Galaxy A51/71 | `md` → iPad Air | `lg` → Surface Pro 7 | `xl` → desktop 1280px | `2xl` → desktop 1920px.

### 7. QA Final, Auditoria e Deploy

- [ ] **Auditoria de Responsividade Completa:** Varredura de scroll simulando Poco X3 Pro, iPhone, Tablet e Desktop. Validar se a insercao dos 10 novos cards e fotos preservou os paddings globais.
- [ ] **QA Final de Navegacao:** Testar rigorosamente todos os links, ancoras e botoes de CTA (Instagram, WhatsApp) para garantir zero rotas 404.
- [ ] **Fluxo de Producao:** Executar deploy final na Vercel (apontamento de DNS na Hostinger ja concluido e propagado) e alterar visibilidade do repositorio no GitHub para PRIVATE.

### 8. Tarefas Postergadas (Backlog Secundario)

- [ ] **Staircase Typography (Botao CTA):** Transformar o botao "Seguir no Instagram" em escada tipografica. Logica validada, postergada para priorizar a estabilidade estrutural da reta final.
- [ ] **Blindagem do Box Model (Hero e Autoral):** Aplicar `h-[100dvh]`, tipografia fluida com `clamp()` e `relative overflow-hidden` para garantir responsividade nativa em resolucoes atipicas.

---

## Roadmap de Engenharia (Concluidos)

### 1. SEO Avancado e Descoberta Organica

- [x] **Grafo de Conhecimento (God Mode SEO):** Reestruturacao do JSON-LD com `@graph` para unificar `WebSite`, `Organization/JewelryStore` e `Person` (Fundadora) em uma unica teia semantica para IAs.
- [x] **Acessibilidade e Machine Experience (MX):** Injecao de `aria-label` invisíveis em elementos nao-textuais garantindo legibilidade para LLMs e nota maxima no Lighthouse.
- [x] **Dominio de Entidade e Prova Social:** Schema `JewelryStore` com `aggregateRating` (5.0, 147 avaliacoes), `priceRange` ($$$) e `sameAs` (vinculacao com o Instagram).
- [x] **Captura de Cauda Longa (FAQPage):** Microdados invisíveis na pagina principal para ativar Rich Snippets ("As pessoas tambem perguntam").
- [x] **Microdados de Produto Dinamicos:** JSON-LD `Product` injetado no `Showcase.tsx` para Rich Snippets de produto na busca.
- [x] **Sitemap Orientado a Imagens:** Mapeamento explicito de imagens HD para capturar trafego via Google Images e Pinterest.
- [x] **Canonical URLs:** Parametrizacao estrita de rotas base no `layout.tsx` para prevencao de punicao por conteudo duplicado.
- [x] **robots.txt Avancado:** Bloqueio de scrapers de IA e bots de spam para otimizacao do Crawl Budget.

### 2. Infraestrutura Edge e Performance

- [x] **Otimizacao Extrema de LCP:** Refatoracao parametrica do `next/image` com `priority`, `quality` customizado e `sizes` responsivos no Hero. Lazy loading escalavel no Showcase.
- [x] **Geracao Dinamica de Open Graph (next/og):** Imagens de compartilhamento geradas dinamicamente no servidor Edge.
- [x] **Middleware Edge:** `proxy.ts` implementado para protecao contra bots, injecao de HSTS e fundacao para testes A/B.
- [x] **Cache Agressivo e Prefetching:** Politicas de SSG maximo e Stale-While-Revalidate (SWR) configuradas no `next.config.ts` com TTL estendido para imagens HD.
- [x] **Offload de Main Thread (Web Workers):** Integracao com `@builder.io/partytown` no `AnalyticsWrapper.tsx`, isolando scripts de terceiros e protegendo o TBT.
- [x] **Telemetria Estruturada:** `logger.ts` sanitizado para LGPD com saida JSON estruturado e supressao de alertas desnecessarios em producao.

### 3. Escalabilidade de Dados, Seguranca e Arquitetura Big Tech

- [x] **Abstracao de Analytics (Data Layer):** Utilitario `src/lib/analytics.ts` com contratos de funcoes para rastreamento de CTAs sem poluir componentes.
- [x] **Zero-Trust API e Anti-Spam (Honeypot):** Rota `/api/leads/route.ts` com validacao estrita de CORS, campo invisivel `_website_url_` e descarte silencioso de bots.
- [x] **Seguranca na Borda (Rate Limiting e Zod):** Token Bucket (max. 5 req/min) e validacao estrita de schema Zod prevenindo injections.
- [x] **Resiliencia de Rede (Exponential Backoff + Jitter):** Algoritmo de reconexao em `fetch-retry.ts` para entrega garantida de payloads ao n8n.
- [x] **Rastreamento Server-Side (CAPI / GA4):** Rota `/api/track` para disparo de eventos s2s mitigando perda de dados por AdBlockers e iOS.
- [x] **Pipeline de CI/CD (Quality Gates):** Workflow `quality-gate.yml` no GitHub Actions validando TypeScript e ESLint em cada Push/PR.
- [x] **Invalidacao de Cache sob Demanda (On-Demand ISR):** Rota `/api/revalidate` para recriacao pontual de cache via webhooks do Airtable.
- [x] **Sistema de Feature Flags:** Ativacao desacoplada de modulos via variaveis de ambiente sem refatoracao do codigo principal.
- [x] **Maquina de Estados para Triagem (Intent Routing):** RegEx na rota `/api/leads` para categorizacao lexical de mensagens e roteamento automatico no n8n via `_intent_tag_`.
- [x] **Fila de Mensagens Assíncrona (DLQ):** Padrao Singleton in-memory para retencao de payloads durante falhas de conexao, preparado para integracao com Redis/Upstash.
- [x] **Geofencing Dinamico no Edge:** Captura de IP no `proxy.ts` para determinar regiao e injetar headers silenciosos de geolocalizacao.
- [x] **Criptografia de Envelope de PII:** AES-256-GCM nativo no back-end para ofuscar telefone, e-mail e dados de clientes antes do transito.
- [x] **Desafio Criptografico (Zero-Trust Bot Detection):** Proof-of-Work com SHA-256 em `pow.ts` para barrar scrapers com LLMs sem impacto na UX do usuario humano.
- [x] **Observabilidade Ativa de Anomalias:** `monitoring.ts` com sistema de alertas webhook acionado em eventos anormais (picos de trafego, falhas em cascata) com notificacao via Telegram.

---

## Backlog de Escalabilidade (Arquitetura Futura)

- [ ] **Fila de Mensagens Persistente (Redis/Upstash):** Substituir a fila in-memory atual por solucao duravel, garantindo entrega de 100% dos leads em quedas prolongadas.
- [ ] **Geofencing com Fretes Preditivos:** Expandir o header `x-customer-geo` para calcular custos de frete nacionais e personalizar anuncios locais.
- [ ] **Criptografia KMS (Nivel Corporativo):** Substituir a chave AES estatica por gerenciamento de chaves rotativas em servico externo.

---

## Historico de Sprints (Changelog)

### [2026-03-13] — Polimento de UX, Integracao de Assets e Clean-up de Infraestrutura

**Refatoracao de UX e Navegacao:**
- [x] **Bugfix (Cache de Rota):** Restaurado o metodo imperativo `onClick` com `e.preventDefault()` e `scrollIntoView` na ancora "Joias artesanais" (`Hero.tsx`). A implementacao nativa do Next.js 15 apresentava falhas de hidratacao e ignorava cliques subsequentes na mesma ancora devido ao cache agressivo do roteador.
- [x] **Feature (Scroll Offset Milimetrico):** Substituida a classe utilitaria `scroll-mt` por uma "Sentinel Div" (`Showcase.tsx`) — `<div absolute -top-[78px] invisible pointer-events-none>` atuando como ancora fantasma para isolar o calculo espacial do Box Model e alinhar a linha dourada perfeitamente a borda da viewport.

**Assets e Componente Manifesto:**
- [x] **Integracao Fotografica em Lote:** Insercao de `logo-abelha-v1`, `v2-coroa` e trilha `processo-criativo` (v1 a v4 e versoes finais HD Desktop) via pipeline Gemini e Grok.
- [x] **Refatoracao UI:** Ajustes no componente `Manifesto.tsx` (28 linhas) para acomodar a nova esteira de imagens e correcao de extensoes duplicadas (`.jpg.jpg`).

**Infraestrutura e Controle de Versao:**
- [x] **Hotfix de Vazamento:** Purga completa do diretorio `.next/` (aprox. 1.896 arquivos) e `firebase-debug.log` do tracking do Git. `.gitignore` atualizado para bloquear novas injections de artefatos de compilacao.

---

### [2026-03-10] — Responsividade Desktop, Arquitetura Dual-Image e Reposicionamento

**Showcase:**
- [x] **Bugfix Responsividade Desktop:** Remocao cirurgica do `min-w-[280px]` no `DesktopCard`. A propriedade sobrescrevia o `w-[20vw]` em telas abaixo de 1400px, fixando cards em 280px e quebrando a proporcionalidade. Zero impacto no restante do layout.

**Instagram CTA:**
- [x] **Reposicionamento Desktop:** Ajuste manual de `md:translate-x` e `md:translate-y` no `h2` (@DARAFA_CWB) e no bloco do botao CTA. Mobile intacto.

**Manifesto — Arquitetura Dual-Image:**
- [x] **Root Cause Identificado:** Container do carrossel panoramico (~4:1, aprox. 1456x340px) vs. assets originais quase quadrados (1008x1024px). O `object-cover` exibia apenas uma fatia fina. Problema exclusivo do breakpoint `md:`.
- [x] **Dual-Image Pattern:** Implementacao de dois elementos condicionais no `.map()` — `md:hidden` para o asset mobile original e `hidden md:block` para o asset desktop panoramico. `src` apontam temporariamente para o mesmo arquivo ate os assets finais.
- [x] **Calibracao de `object-position`:** Adicionado `object-[center_35%]` no bloco desktop como ponto focal de partida.
- [x] **Parametros Definitivos de Outpainting:** Dimensao alvo definida como `1920x480px` (ratio ~4:1) conforme medicao real no DevTools. Asset da Opcao 2 do Grok aprovado (colar completo e todos os elementos da cena). Opcao 1 descartada (ausencia do colar).
- [x] **Decisao Arquitetural:** Secao Manifesto confirmada como narrativa de marca pura, sem ancoras ou CTAs de produto. Liberdade criativa total para composicao via Grok.

---

### [2026-03-09] — Arquitetura Responsiva Avancada (Desktop)

- [x] **Showcase (Grid Desktop):** Reducao do tamanho dos cards em 50% exclusivamente no desktop (de `lg:grid-cols-3` para `lg:grid-cols-6` e `lg:auto-rows-[240px]`). Mobile intacto.
- [x] **Instagram CTA (Viewport Vertical):** Sobrescrita da altura minima da secao autoral para telas grandes via `lg:min-h-[45vh]`, preservando a harmonia visual do desktop sem afetar o posicionamento `vw` do mobile.

---

### [2026-03-07] — Engenharia de Escalabilidade, Infraestrutura e Data Privacy

**Seguranca e Criptografia:**
- [x] **Criptografia PII:** Implementado `crypto.ts` (AES-256-GCM) para ofuscar dados de leads antes do transito.
- [x] **Proof-of-Work:** Adicionado `pow.ts` com desafio SHA-256 para deter bots.

**Resiliencia e Observabilidade:**
- [x] **Dead Letter Queue:** Criado `queue.ts` com fila em memoria para retencao de eventos falhados.
- [x] **Alertas Webhook:** Desenvolvido `monitoring.ts` para notificacao em tempo real de falhas na API.
- [x] **Backoff Exponencial + Jitter:** Refatorado `fetch-retry.ts` para recuo de tempo multiplicativo e variancia matematica.
- [x] **Geofencing Edge:** Configurado `proxy.ts` para capturar IP e expor o cabecalho `x-customer-geo`.

**Big Tech e Automacao:**
- [x] **Server-Side Tracking:** Implementada rota `/api/track` e requisicao assíncrona `keepalive` no cliente.
- [x] **CI/CD Quality Gates:** Workflow `quality-gate.yml` no GitHub Actions para TypeScript e ESLint.
- [x] **On-Demand ISR:** Criada rota `/api/revalidate` para invalidacao pontual de cache via webhook do CMS.
- [x] **Feature Flags:** Arquitetura de variaveis de ambiente para ativacao desacoplada de modulos.
- [x] **Intent Routing:** Maquina de estados com RegEx no endpoint de leads para categorizacao de mensagens.

**Performance e Integridade:**
- [x] **Web Workers:** Configurado `nextScriptWorkers: true` e Partytown para rastreadores analiticos.
- [x] **Rate Limiting:** Rastreamento de IP em memoria na rota de leads (Erro 429).
- [x] **Validacao Zod:** Tipagem forte e validacao de schema na borda (Erro 400).
- [x] **JSON Logging (LGPD):** Reescrita do `logger.ts` para padrao corporativo com sanitizacao automatica de e-mails.

---

### [2026-03-06] — Refinamento Estrutural, Testes de Assets e Pixel Pushing

- [x] **Instagram CTA (Seta Fantasma Mobile):** Seta direcional implementada com `absolute`, `top-[100%]`, `left-[75%]`, `-translate-x-1/2`. Metrica de `75%` validada no Poco X3 Pro. Revisao de breakpoints pendente no QA Final.
- [x] **Showcase (UX):** Remocao do titulo "Algumas criacoes" e zeramento do preenchimento superior para `pt-[8px]`, encostando os cards na linha dourada do CTA anterior.
- [x] **Manifesto (Dots Desktop):** Classe `md:bottom-[1.0rem]` aplicada para deslocar os indicadores de imagem para o centro do espaco morto inferior no desktop. Mobile blindado.
- [x] **Manifesto (Teste A/B):** Criacao da pasta `public/assets/images/manifesto/` com 5 imagens de homologacao. Carrossel expandido para loop durante testes com o tema "Preto de Luxo".

---

### [2026-03-05] — Seguranca Zero-Trust, LLMO e Machine Experience

- [x] **Zero-Trust API (Honeypot):** Implementacao em `/api/leads/route.ts` com CORS estrito e descarte silencioso de bots.
- [x] **Core Web Vitals (LCP):** `priority`, `quality={90}` e `sizes` no Hero. Otimizacao WebP em lote no Showcase.
- [x] **Machine Experience (a11y):** `aria-labels` semanticos nos dots do Showcase e no link do Instagram no Footer.
- [x] **SEO Knowledge Graph:** Conversao para JSON-LD com `@graph` no `layout.tsx`.
- [x] **SEO JewelryStore + FAQPage:** Schema com `aggregateRating`, `priceRange`, `sameAs` e Rich Snippets.
- [x] **Manifesto (Bugfix Mobile):** Correcao de vazamento de scroll (`overflow-y-hidden`, `touch-pan-x`).
- [x] **Instagram CTA (Cascata Tipografica):** Efeito visual de "escada" em "Seguir" e "no Instagram" exclusivamente no mobile.
- [x] **Hero (Responsividade Geometrica):** Refatoracao completa para Viewport Width (`vw`) na base de 393px.
- [x] **Hero (Cascata Tipografica + Bugfix):** Efeito "escada" em "OS" e "METAIS". Substituicao de `translate-x` por margens negativas em `inline-block` para corrigir bug de clipping.

---

### [2026-03-04] — Refinamento Estrutural e Responsividade Universal

- [x] **Instagram CTA:** Conversao definitiva de coordenadas de `px` para `vw`.
- [x] **Showcase:** Padrao de margem global de 8px (`gap-2`) e recuo de limites horizontais.
- [x] **Manifesto:** Refatoracao completa para carrossel hibrido.
- [x] **Hero e Instagram CTA:** Balanco espacial milimetrico com travamento `md:translate-x-0` para blindar o Desktop.
- [x] **Footer:** Layout mobile refatorado para distribuicao Edge-to-Edge (`justify-between`).

---

### [2026-03-02] — Engenharia de Mobile UI/UX

- [x] **Hero (Copywriting):** Texto do botao principal alterado de "colecao completa" para "colecao autoral".
- [x] **Showcase (Mobile-First):** Imersao Edge-to-Edge e navegacao por arrasto (swipe).
- [x] **Instagram CTA (Brutalist Typography):** Quebra estrutural assimetrica da palavra "Autoral" ("Auto/ral").

---

### [2026-02-28] — Arquitetura de SEO e Infraestrutura Invisivel

- [x] **Performance (Edge):** Rota `api/og` com `next/og` para geracao dinamica de imagens de Open Graph.
- [x] **Seguranca (Edge e Robots):** `proxy.ts` (HSTS) e bloqueio explicito de scrapers de IA no `robots.ts`.
- [x] **SEO (Canonical e Sitemap):** Parametrizacao de canonical no `layout.tsx` e mapeamento de imagens HD no `sitemap.ts`.

---

### [2026-02-27] — QA, Copy e Revisao

- [x] **Seguranca (Infra):** Content Security Policy (CSP) no `next.config.ts` e prevencao de Tabnabbing.
- [x] **SEO Local:** Structured Data `JewelryStore` para dominancia em buscas em Curitiba.

---

### [2026-02-26] — Engenharia de Dados e Assets

- [x] **Hooks e Arquitetura:** Criacao do hook `useScrollLock`, tipagem em `src/types` e desacoplamento de links globais em `siteConfig`.

---

### [2026-02-25] — Refinamentos de UX e Micro-interacoes

- [x] **UX Geral:** Aplicacao de tipografia metalica prata no @DARAFA_CWB e expansao do hitbox da logo.