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
- [x] **Seta Mobile Longa (Instagram CTA):** Implementação de seta direcional concluída com sucesso. Código estabilizado.
- [ ] **Staircase Typography (Botão CTA):** Transformar o botão "Seguir no Instagram" em uma escada tipográfica. O código foi testado e validado com sucesso na arquitetura, mas a aplicação definitiva foi adiada por questões de gestão de tempo e priorização da reta final.

#### 3. Infraestrutura e Deploy
- [ ] **Fluxo de Producao:** Executar o protocolo de deploy final (apontamento de DNS na Hostinger, configuracao de edge na Vercel e alteracao de visibilidade do repositorio no GitHub para PRIVATE).
- [ ] **Auditoria Cross-Device (UX Final):** Verificar a estabilidade da métrica `left-[75%]` da seta do Instagram CTA em resoluções diferentes (iPhone, Galaxy) e ajustar se necessário antes do deploy.

#### 4. Homologação Visual do Manifesto (Próximos Passos)
- [ ] **Parâmetros de Dimensão para o Grok (Desktop):** A seção Manifesto na versão PC atua como um banner panorâmico de largura total (100vw). Instruir o Grok a gerar imagens com Aspect Ratio de 21:9 (Ultra-wide) ou 16:9, com resolução de 1920x800 ou 1920x1080 pixels. Exigir enquadramento centralizado para a imagem encaixar perfeitamente como uma luva, sem vazar (clipping) pelas bordas do retângulo.
- [ ] **Restauração da Tipografia Inicial:** Após validar e inserir as novas imagens no repositório com o padrão de nomenclatura correto, restaurar a frase/copy original que ficava sobreposta à logo da Abelha Rainha.
- [ ] **Aplicação de Filtro P&B (Isolamento de PC):** Aplicar o filtro Preto e Branco (`grayscale`) diretamente via código Tailwind com o prefixo `md:grayscale`. Isso força o filtro exclusivamente no desktop, garantindo simetria visual com a logo da abelha rainha, sem afetar o celular.
- [ ] **Protocolo de Validação Mobile:** A versão mobile foi validada e permanecerá estritamente intacta no formato vertical colorido atual. A possibilidade de alterar o mobile fica congelada. Reavaliações no layout mobile só serão cogitadas após o check final e absoluto nas imagens de PC.

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
- [x] **Offload de Main Thread (Web Workers):** Integração nativa com `@builder.io/partytown` no `AnalyticsWrapper.tsx`, isolando scripts de terceiros (Analytics/Pixels) e protegendo o Total Blocking Time (TBT).
- [x] **Telemetria Estruturada (JSON Logging):** Implementação de logger sanitizado nativamente para LGPD (mascaramento de PII), com saída em JSON para ingestão em plataformas de observabilidade, mantendo otimização de processamento via variável `isDev`.

#### 3. Escalabilidade de Dados e Integracoes
- [x] **Abstracao de Analytics (Data Layer):** Criar utilitario (`src/lib/analytics.ts`) com contratos de funcoes para engatilhar metodos de rastreamento (Pixel/GTM) nos botoes de CTA sem poluir os componentes.
- [x] **Zero-Trust API e Anti-Spam (Honeypot):** Refatoração da rota `/api/leads/route.ts` implementando validação estrita de CORS, checagem de payload JSON e campo invisível (`_website_url_`) para descartar bots silenciosamente e proteger a integração futura com n8n/Airtable.
- [x] **Segurança na Borda (Rate Limiting e Zod):** Blindagem do endpoint de contatos contra ataques automatizados (máx. 5 requisições/minuto via Token Bucket) e validação estrita de contratos de dados (Zod), prevenindo injeções maliciosas.
- [x] **Resiliência de Rede (Exponential Backoff + Jitter):** Algoritmo de reconexão inteligente implementado no cliente HTTP (`fetch-retry.ts`) para garantir a entrega de payloads aos webhooks mesmo sob instabilidade de rede ou do servidor de destino (Thundering Herd).

### Backlog de Escalabilidade (Arquitetura Big Tech - Futuro)
- [ ] **Rastreamento Server-Side (CAPI / GA4):** Criar rota `/api/track` para disparo de eventos de conversão de servidor para servidor. Mitiga perda de dados por AdBlockers e iOS, melhorando a inteligência do algoritmo em campanhas pagas e otimizando o CAC.
- [ ] **Pipeline de CI/CD com Quality Gates:** Implementar `.yml` no GitHub Actions para rodar checagens de Typescript e ESLint automaticamente a cada commit, bloqueando deploys contendo bugs e mantendo a ramificação principal impecável.
- [ ] **Invalidação de Cache sob Demanda (On-Demand ISR):** Integrar sistema de Webhooks para escutar o Airtable e invalidar seções estáticas do catálogo apenas quando novos produtos forem cadastrados, unindo a velocidade do cache estático à atualização em tempo real.
- [ ] **Sistema de Feature Flags:** Atrelar o disparo de injeção de funcionalidades críticas (ex: Chatbot de Atendimento) a variáveis de ambiente (Vercel Edge Config). Permite habilitar recursos em produção sob demanda sem necessidade de refatoração do código principal.
- [ ] **Máquina de Estados para Triagem (Intent Routing):** Utilizar RegEx avançada ou LLM na rota `/api/leads` para analisar a intenção da mensagem do usuário e aplicar *Tags* invisíveis, roteando contatos urgentes e curiosos para fluxos de atendimento diferentes no n8n de forma automática.
- [ ] **Fila de Mensagens Assíncrona (Message Queue/DLQ):** Integrar Redis ou Upstash para armazenar payloads de leads na memória em caso de falha de conexão prolongada com o n8n. Garante resiliência de nível bancário e entrega 100% dos eventos.
- [ ] **Geofencing Dinâmico no Edge:** Interceptar o IP do usuário no `proxy.ts` para determinar o Estado/Região e injetar headers silenciósos de geolocalização. Prepara a infraestrutura para cálculos preditivos de frete nacional e personalização de anúncios locais.
- [ ] **Criptografia de Envelope de PII:** Aplicar Key Management Service (KMS) nativo no back-end para criptografar telefone, e-mail e dados de clientes antes de enviá-los ao banco de dados, neutralizando danos em caso de vazamentos (Data Privacy Nível 3).
- [ ] **Desafio Criptográfico Invisível (Zero-Trust Bot Detection):** Implementar Cloudflare Turnstile ou lógica de Proof-of-Work no middleware para barrar scrapers munidos de LLMs avançados, sem prejudicar a fricção de UX do cliente humano.
- [ ] **Observabilidade Ativa de Anomalias:** Desenvolver sistema de alerta webhooks no back-end acionado exclusivamente em eventos anormais (ex: pico de tráfego de 500%, falhas em cascata da API), notificando o engenheiro via Telegram instantaneamente.

---

## Historico de Sprints (Changelog)

### [2026-03-07] - Engenharia de Infraestrutura e Resiliencia "Big Tech"
- [x] **Performance (Web Workers):** Configurado `nextScriptWorkers: true` e injetada a biblioteca Partytown para transferir o peso de rastreadores analíticos para threads secundárias.
- [x] **Segurança (Rate Limiting):** Implementado rastreamento de IP em memória na rota de leads para barrar flood de submissões (Erro 429).
- [x] **Resiliência (Backoff Exponencial):** Refatorado o utilitário `fetch-retry.ts` para aplicar recuo de tempo multiplicativo e variância matemática (Jitter) em caso de falhas de comunicação com a automação.
- [x] **Integridade de Dados (Zod):** Injetada tipagem forte e validação de schema na borda, descartando payloads corrompidos ou incompletos (Erro 400).
- [x] **Observabilidade (JSON Logging):** Reescrevimento completo do `logger.ts` para padrão corporativo. O sistema agora cospe logs em JSON estruturado, sanitiza e-mails automaticamente por questões legais e suprime alertas desnecessários em produção.

### [2026-03-06] - Refinamento Estrutural, Testes de Assets e Pixel Pushing
- [x] **Instagram CTA (Posicionamento Fantasma):** Implementação cirúrgica da seta direcional (mobile). Utilizada classe `absolute` e táticas de isolamento (`top-[100%]`, `left-[75%]`, `-translate-x-1/2`) para alinhar a seta perfeitamente com o ícone do footer sem interferir no fluxo do Box Model (preservando o layout da tipografia). Métrica de `75%` validada no modelo base (Poco X3 Pro), com revisão de breakpoints pendente no QA Final.
- [x] **Showcase (UX & Layout):** Remoção do título `Algumas criações` e recálculo milimétrico da tag `<section>`. Preenchimento superior zerado para `pt-[8px]`, encostando perfeitamente os cards na linha dourada do CTA anterior e garantindo consistência visual de grids colados (gap de 8px).
- [x] **Manifesto (Pixel Pushing Desktop):** Aplicação de classe `md:bottom-[1.0rem]` para deslocar isoladamente os indicadores de imagem (dots) para o centro do espaço morto inferior no desktop. Coordenadas blindadas para não interferir no mobile.
- [x] **Manifesto (Engenharia de Teste A/B):** Criação estrutural da pasta `public/assets/images/manifesto/` e injeção de 5 imagens (`.jpg`) para homologação de layout. Lógica do carrossel expandida para rodar as imagens em loop durante os testes de opacidade com o tema "Preto de Luxo".

### [2026-03-05] - Segurança Zero-Trust, LLMO e Machine Experience
- [x] **Segurança (Zero-Trust API):** Implementação de Honeypot invisível na rota de leads (`src/app/api/leads/route.ts`) com validação estrita de CORS e descarte silencioso de bots de spam para proteção de custos de webhook (n8n).
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