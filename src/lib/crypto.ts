// src/lib/crypto.ts

import crypto from 'crypto';

/**
 * Algoritmo de criptografia a ser utilizado.
 * AES-256-GCM é uma escolha robusta que oferece tanto confidencialidade (criptografia)
 * quanto autenticidade e integridade (através da AuthTag).
 */
const ALGORITHM = 'aes-256-gcm';

/**
 * Criptografa um texto (PII - Personally Identifiable Information) usando o padrão de Envelope Encryption.
 * A função gera um IV (Vetor de Inicialização) único para cada operação, garantindo que
 * textos idênticos resultem em saídas criptografadas diferentes.
 *
 * @param {string} text - O texto plano a ser criptografado.
 * @returns {string} - Uma string concatenada no formato 'iv:authTag:encryptedText',
 *                     com todos os componentes em base 'hex'. Retorna uma string vazia se a entrada for nula/vazia.
 * @throws {Error} - Lança um erro se a variável de ambiente PII_ENCRYPTION_KEY não estiver definida
 *                   ou não tiver o tamanho correto (32 bytes).
 */
export function encryptPII(text: string): string {
  // 1. Tratamento de erro seguro: se a entrada for vazia, retorna imediatamente.
  if (!text) {
    return text;
  }

  // 2. Validação da chave de criptografia no ambiente.
  const key = process.env.PII_ENCRYPTION_KEY;
  if (!key) {
    throw new Error('[Crypto] Falha de infraestrutura: A variável de ambiente PII_ENCRYPTION_KEY não está definida.');
  }
  if (Buffer.from(key).length !== 32) {
    throw new Error('[Crypto] Falha de configuração: A PII_ENCRYPTION_KEY deve ter exatamente 32 bytes.');
  }

  // 3. Geração do Vetor de Inicialização (IV).
  // O IV deve ser único para cada criptografia para garantir a segurança. 16 bytes (128 bits) para GCM.
  const iv = crypto.randomBytes(16);

  // 4. Criação da cifra.
  // Utiliza a chave do ambiente e o IV recém-gerado.
  const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(key), iv);

  // 5. Processamento da criptografia.
  // Concatena o resultado do update com o final para obter o texto criptografado completo.
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);

  // 6. Obtenção da AuthTag.
  // A tag é um selo de integridade gerado pelo modo GCM. Essencial para a desencriptação.
  const authTag = cipher.getAuthTag();

  // 7. Concatenação e retorno no formato final.
  // O resultado é uma única string que contém tudo o que é necessário para a desencriptação.
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted.toString('hex')}`;
}

/**
 * Descriptografa um hash PII que foi previamente criptografado com a função encryptPII.
 *
 * @param {string} hash - A string criptografada no formato 'iv:authTag:encryptedText'.
 * @returns {string} - O texto plano original. Retorna uma string vazia se a entrada for nula/vazia.
 * @throws {Error} - Lança um erro se a PII_ENCRYPTION_KEY não estiver definida, ou se o hash
 *                   estiver malformado, ou se a AuthTag for inválida (indicando adulteração).
 */
export function decryptPII(hash: string): string {
  // 1. Tratamento de erro seguro.
  if (!hash) {
    return hash;
  }
  
  // 2. Validação da chave (repetida para segurança em qualquer contexto).
  const key = process.env.PII_ENCRYPTION_KEY;
  if (!key) {
    throw new Error('[Crypto] Falha de infraestrutura: A variável de ambiente PII_ENCRYPTION_KEY não está definida.');
  }
  if (Buffer.from(key).length !== 32) {
    throw new Error('[Crypto] Falha de configuração: A PII_ENCRYPTION_KEY deve ter exatamente 32 bytes.');
  }

  try {
    // 3. Extração dos componentes do hash.
    const parts = hash.split(':');
    if (parts.length !== 3) {
      console.error('[Crypto] Erro de Descriptografia: O hash está malformado e não contém as 3 partes necessárias.');
      return ''; // Retorna vazio em caso de hash inválido para não quebrar o fluxo.
    }
    const [ivHex, authTagHex, encryptedHex] = parts;

    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');
    const encrypted = Buffer.from(encryptedHex, 'hex');

    // 4. Criação da decifra.
    const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(key), iv);

    // 5. Definição da AuthTag.
    // Este passo é crucial. Se a AuthTag não corresponder à original, a descriptografia falhará,
    // protegendo contra dados corrompidos ou adulterados.
    decipher.setAuthTag(authTag);

    // 6. Processamento da descriptografia.
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);

    return decrypted.toString('utf8');
  } catch (error) {
    // 7. Tratamento de erro na descriptografia.
    // Uma falha aqui (ex: "Unsupported state or unable to authenticate data") geralmente significa
    // que a chave está errada ou os dados foram adulterados.
    console.error('[Crypto] Falha ao descriptografar PII. Verifique a chave e a integridade do hash.', error);
    return ''; // Retorna uma string vazia para evitar expor detalhes do erro.
  }
}
