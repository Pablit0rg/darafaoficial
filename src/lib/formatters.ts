/**
 * FORMATADORES DE DADOS
 * Funções puras para garantir consistência visual via lógica.
 */

// Transforma qualquer string em um slug para URLs ou IDs
export const toSlug = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Substitui espaços por hífens
    .replace(/[^\w-]+/g, '')  // Remove caracteres especiais
    .replace(/--+/g, '-');    // Remove hífens duplicados
};

// Formatação padrão de moeda (BRL) para futuras implementações de preço
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};