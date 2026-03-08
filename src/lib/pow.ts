/**
 * @file src/lib/pow.ts
 * @description Implementação do Desafio Criptográfico de Prova de Trabalho (Proof of Work - PoW).
 *
 * @strategy Zero-Trust Invisible CAPTCHA
 * Este módulo implementa uma barreira de segurança computacional para mitigar ataques
 * automatizados de Layer 7 (DDoS de aplicação) e web scraping por bots avançados.
 * A estratégia consiste em exigir que o cliente (front-end) resolva um pequeno desafio
 * criptográfico antes de submeter dados a rotas de API críticas (ex: /api/leads).
 *
 * @workflow
 * 1. O front-end solicita um `challenge` único de uma rota da API antes de renderizar um formulário.
 * 2. Em background, o front-end entra em um loop, incrementando um `nonce` (número usado uma vez)
 *    e calculando o hash SHA-256 de `challenge + nonce`.
 * 3. O loop continua até que o hash resultante satisfaça a `difficulty` (ex: começar com '000').
 * 4. O `nonce` vencedor é então enviado junto com o payload do formulário.
 * 5. O back-end (esta função `verifyProofOfWork`) re-executa o mesmo cálculo UMA VEZ e valida o resultado.
 *
 * @impact
 * - **Usuário Legítimo:** O custo computacional é trivial e resolvido em milissegundos, sendo imperceptível.
 * - **Atacante:** A necessidade de resolver o desafio para cada requisição impõe um custo de CPU
 *   significativo, tornando ataques em larga escala economicamente e computacionalmente inviáveis.
 */

import crypto from 'crypto';

/**
 * Gera um desafio criptográfico único e aleatório.
 * Este desafio será enviado ao cliente para que ele possa iniciar o processo de Prova de Trabalho.
 * @returns {string} Uma string hexadecimal aleatória de 16 bytes (32 caracteres).
 */
export function generateChallenge(): string {
  // Gera 16 bytes de dados aleatórios, resultando em uma string de 32 caracteres hexadecimais.
  // A aleatoriedade é crucial para garantir que cada desafio seja único.
  return crypto.randomBytes(16).toString('hex');
}

/**
 * Verifica a Prova de Trabalho submetida pelo cliente.
 * @param {string} challenge - O desafio original que foi enviado ao cliente.
 * @param {number} nonce - O número que o cliente encontrou e que resolve o desafio.
 * @param {number} [difficulty=3] - O número de zeros iniciais que o hash resultante deve ter.
 *                                  Aumentar este número torna o desafio exponencialmente mais difícil.
 * @returns {boolean} - Retorna `true` se o nonce for válido para o desafio e a dificuldade;
 *                      caso contrário, `false`.
 */
export function verifyProofOfWork(
  challenge: string,
  nonce: number,
  difficulty: number = 3
): boolean {
  // 1. Recria a string exata que o cliente usou para encontrar o nonce.
  const attempt = `${challenge}${nonce}`;

  // 2. Calcula o hash SHA-256 da tentativa. O SHA-256 é rápido e seguro para este propósito.
  const hash = crypto.createHash('sha256').update(attempt).digest('hex');

  // 3. Cria o prefixo de zeros necessário com base na dificuldade.
  const requiredPrefix = '0'.repeat(difficulty);

  // 4. Valida se o hash gerado começa com o prefixo de zeros.
  // Esta é a verificação da Prova de Trabalho. Se for verdadeiro, o cliente provou
  // que gastou os ciclos de CPU necessários para encontrar o nonce.
  return hash.startsWith(requiredPrefix);
}
