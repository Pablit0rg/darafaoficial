# 📜 DEVLOG - Portfólio DaRafa Joias

Documentação viva das decisões arquiteturais, evolução do layout e roadmap do projeto.

---

## Roadmap de UI/UX (Backlog Master)

### A Fazer (Pendências de Design e Engenharia)

#### 1. Seção Hero (`Hero.tsx`)
- [ ] **Responsividade da Imagem (Art Direction):** Ajustar manualmente o enquadramento, posicionamento e zoom (`object-position`) da foto principal na versão mobile para garantir que a silhueta da modelo fique perfeitamente centralizada em viewports estreitos.
- [ ] **Efeito de Cor Seletiva (Asset Fotográfico):** Editar a foto no Photoshop aplicando P&B, porém isolando e preservando o brilho original Prata e Dourado estritamente nas unhas e no piercing (ver *Diretrizes Técnicas* abaixo).
- [ ] **Tipografia Metálica (UI):** Aplicar gradientes metálicos independentes no título principal para criar simetria com a fotografia. A palavra "ARTE" deve brilhar em Prata (`bg-metal-silver`), e a palavra "METAIS" deve brilhar em Ouro (`bg-metal-gold`).
- [ ] **Refinamento de Espaçamento Tipográfico:** Ajustar o deslocamento do container de texto no desktop para a direita, liberando a área de respiro visual em torno do rosto da modelo (ver *Diretrizes Técnicas* abaixo).

> **Diretrizes Técnicas de Implementação (Hero):**
> * **Integração de Cor Seletiva (Selective Color):** O design atual utiliza a classe utilitária `grayscale` do Tailwind para forçar o P&B via motor de renderização. Assim que o asset fotográfico editado (com as unhas e piercing coloridos) for upado, a classe `grayscale` **deve ser obrigatoriamente removida** da tag `<Image />`. Caso contrário, o CSS anulará o tratamento nativo do arquivo.
> * **Posicionamento Defensivo (Desktop):** Para realizar o deslocamento horizontal da tipografia sem quebrar a grade mobile, o ajuste deve ser isolado por breakpoint. Localize o `<motion.div>` principal que agrupa os textos (aprox. linha 32) e aplique utilitários com o prefixo `md:` (ex: `md:translate-x-16`, `md:translate-x-24` ou `md:pl-20`). Teste os incrementos até que o alinhamento esquerdo do texto libere perfeitamente a silhueta da modelo.

#### 2. Revisão Final
- [ ] **Seção Instagram CTA:** Revisar a seção `InstagramCTA.tsx` para garantir que ela converse visualmente com o novo "Preto de Luxo" e com os fios metálicos do restante do site (versão atual mantida estável com alinhamentos manuais).

---

## 📅 Histórico de Sprints (Changelog)

### [2026-02-24] - Integração de Assets Oficiais e Tratamento
- [x] **Tratamento de Asset (Deep Etching):** Recorte do fundo da foto principal da Rafaela finalizado, removendo bordas duras e criando uma silhueta limpa com arquivo transparente/HD.
- [x] **Hero (Integração Oficial):** Rota atualizada para a imagem definitiva `rafaela-destaqueHeroOficial-hd.jpg` com composição editorial confirmada.

### [2026-02-24] - Decisões de Design System e Qualidade de Assets
- [x] **Hero (Overlays e Iluminação):** Bateria de 5 testes de sombras concluída. Decisão arquitetural: reversão para a "Composição Editorial" original (mix-blend-lighten com fade lateral suave). Provou-se a mais equilibrada e luxuosa sem pesar o contraste.
- [x] **Design System (Paleta Definitiva):** Decisão arquitetural de manter a paleta "Preto de Luxo" (`#050505`, `#0a0a0a`) como definitiva. 
- [x] **Showcase (Qualidade Visual):** Substituição de capturas de tela por assets em alta definição (HD), com quebra de cache implementada.
- [x] **Hero (Limpeza Visual):** Remoção do componente de granulação (`NoiseOverlay`) global para máxima nitidez fotográfica.

### [2026-02-24] - Arquitetura Editorial e Refinamento Visual
- [x] **Hero (Background Test 1):** Implementação de layout centralizado com imagem *dark mode* ao fundo.
- [x] **UI Global (Texturas Metálicas):** Criação de utilitários de gradiente (`bg-metal-gold`, `bg-metal-silver`) e aplicação nas divisórias de seções.
- [x] **Footer (Localização):** Adição de link para o Google Maps ("Curitiba, PR ↗").

### [2026-02-23] - Integração de Assets e Micro-interações
- [x] **Showcase (Imagens):** Integração inicial das imagens.
- [x] **Boas Práticas de Engenharia:** Nomenclatura de assets estáticos (kebab-case).
- [x] **Hero (Indicador Visual):** Seta minimalista animada com Framer Motion.
- [x] **Manifesto (Marca D'água):** Adição do símbolo da marca (`logo-abelha.png`).