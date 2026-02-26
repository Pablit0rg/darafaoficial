/**
 * CONFIGURAÇÃO GLOBAL DO SITE - DaRafa Joias
 * Centraliza todos os dados de negócio para facilitar a manutenção e escalabilidade.
 */

export const siteConfig = {
  name: "Darafa",
  slogan: "Onde a arte encontra os metais",
  location: {
    city: "Curitiba",
    state: "PR",
    address: "Curitiba, PR",
    mapLink: "https://maps.google.com/?q=Curitiba,+PR", // Link vindo do seu Footer
  },
  links: {
    instagram: "https://instagram.com/darafa_cwb",
    // Centralizando a lógica da mensagem de contato que estava no Navigation
    whatsappContact: "https://ig.me/m/darafa_cwb?text=Vi%20seu%20site%20e%20gostaria%20de%20ver%20os%20drops%20disponíveis",
  },
  seo: {
    description: "Identidade moldada à mão. Joias exclusivas, drops limitados e atendimento personalizado em Curitiba.",
  }
};

export type SiteConfig = typeof siteConfig;