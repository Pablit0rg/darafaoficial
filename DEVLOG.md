# 📜 DEVLOG - Portfólio DaRafa Joias

Documentação viva das decisões arquiteturais, evolução do layout e roadmap do projeto.

---

## 📅 [2026-02-23] - Sprint Atual: Integração de Assets e Micro-interações

### ✅ Implementações Concluídas
- [x] **Showcase (Imagens):** Integração das imagens reais no grid (`PontoDeLuz.jpg`, `Colar.jpg`, `Brincos.jpg`, `Lilás&Azul.jpg`, `BraceletesComPingente&Miçangas.jpg`).
- [x] **Showcase (Correção):** Resolução do bug de renderização ajustando o *path* das imagens para a regra *case-sensitive* do ambiente Linux.
- [x] **Boas Práticas de Engenharia:** Documentação da regra para nomenclatura de assets estáticos (evitar caracteres especiais/acentos, usar *kebab-case* em minúsculo).
- [x] **Hero (Indicador Visual):** Implementação de seta minimalista animada com Framer Motion indicando scroll direto para o botão CTA.
- [x] **Manifesto (Marca D'água):** Adição do símbolo da marca (`logo-abelha.png`) ao fundo utilizando Z-Index hierarchy e filtros CSS (`mix-blend-screen`, `grayscale`, `opacity-5`).

---

## 🎯 Roadmap de UI/UX (Backlog)

### ⏳ A Fazer (Pendências)
- [ ] **Hero - Composição de Imagem:** Integrar imagem autêntica lateral (Rafaela usando acessório ou peça destaque) sem sobrepor o conteúdo textual à esquerda.
- [ ] **UI Global - Linhas Divisórias:** Substituir as bordas sólidas padrão do projeto por gradientes dinâmicos que simulem texturas metálicas (ouro pálido, prata envelhecida, ródio escuro).
- [ ] **Footer - Mapa de Localização:** Incorporar mapa embutido de Curitiba com estética *dark mode* minimalista (testar centralizado vs. substituindo o link do Instagram).
- [ ] **Design System - Paleta de Cores Definitiva:** Atualizar as variáveis de cor no Tailwind com base na identidade visual oficial da logo e na padronização do Instagram profissional.