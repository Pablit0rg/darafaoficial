/**
 * CONTRATOS DE DADOS - DaRafa Joias
 * Define a estrutura inegociável para garantir integridade entre Front-end e Back-end.
 */

// Tipagem para os itens do portfólio/vitrine
export interface Product {
  id: string;
  slug: string; // URL amigável (ex: 'brinco-prata-950')
  name: string;
  category: 'Prata' | 'Ouro' | 'Artesanal';
  description?: string;
  image: string;
  isFeatured: boolean; // Se deve aparecer no Hero ou destaque
}

// Tipagem para as configurações globais do site
export interface SiteConfig {
  name: string;
  instagram: string;
  whatsapp: string;
  location: {
    city: string;
    state: string;
    mapLink: string;
  };
}

// Tipagem para logs do sistema (rastreabilidade)
export type LogLevel = 'info' | 'warn' | 'error';