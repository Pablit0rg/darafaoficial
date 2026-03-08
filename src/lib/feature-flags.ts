// src/lib/feature-flags.ts

/**
 * Utilitário para Gerenciamento Centralizado de Feature Flags.
 *
 * Feature Flags permitem ativar ou desativar funcionalidades da aplicação dinamicamente
 * através de variáveis de ambiente, sem a necessidade de realizar um novo deploy.
 * Isso é ideal para testes A/B, lançamentos graduais (canary releases) ou para
 * habilitar/desabilitar recursos sazonais.
 *
 * As variáveis de ambiente devem ser prefixadas com `NEXT_PUBLIC_` para que sejam
 * expostas ao código do lado do cliente (browser).
 *
 * A conversão para booleano é feita de forma estrita (comparando com a string 'true'),
 * garantindo que qualquer outro valor (incluindo undefined) resulte em `false`.
 */

export const FLAGS = {
  /**
   * @name ENABLE_CHATBOT
   * @description Controla a visibilidade e o funcionamento do componente de Chatbot.
   * @env NEXT_PUBLIC_ENABLE_CHATBOT
   * @default false
   */
  ENABLE_CHATBOT: process.env.NEXT_PUBLIC_ENABLE_CHATBOT === 'true',

  /**
   * @name ENABLE_ECOMMERCE_CHECKOUT
   * @description Habilita ou desabilita o fluxo de finalização de compra.
   * @env NEXT_PUBLIC_ENABLE_ECOMMERCE_CHECKOUT
   * @default false
   */
  ENABLE_ECOMMERCE_CHECKOUT: process.env.NEXT_PUBLIC_ENABLE_ECOMMERCE_CHECKOUT === 'true',

  /**
   * @name ENABLE_HOLIDAY_MODE
   * @description Ativa um modo especial para feriados ou eventos, podendo alterar banners,
   * promoções ou desativar funcionalidades específicas como agendamentos.
   * @env NEXT_PUBLIC_ENABLE_HOLIDAY_MODE
   * @default false
   */
  ENABLE_HOLIDAY_MODE: process.env.NEXT_PUBLIC_ENABLE_HOLIDAY_MODE === 'true',
};
