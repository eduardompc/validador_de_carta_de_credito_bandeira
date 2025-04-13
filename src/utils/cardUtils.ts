import { CARD_TYPES, CARD_PATTERNS } from '../constants/cardTypes';

/**
 * Remove caracteres não numéricos do número do cartão
 * @param cardNumber - Número do cartão com ou sem formatação
 * @returns Número do cartão limpo
 */
export const cleanCardNumber = (cardNumber: string): string => {
  return cardNumber.replace(/[\s-]/g, '');
};

/**
 * Formata o número do cartão em grupos de 4 dígitos
 * @param cardNumber - Número do cartão
 * @returns Número do cartão formatado
 */
export const formatCardNumber = (cardNumber: string): string => {
  return cardNumber
    .replace(/\D/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim();
};

/**
 * Identifica a bandeira do cartão com base no número fornecido
 * @param cardNumber - Número do cartão
 * @returns Nome da bandeira do cartão
 */
export const identifyCardType = (cardNumber: string): string => {
  const cleanNumber = cleanCardNumber(cardNumber);

  if (CARD_PATTERNS.VISA.test(cleanNumber)) return CARD_TYPES.VISA;
  if (CARD_PATTERNS.MASTERCARD.test(cleanNumber)) return CARD_TYPES.MASTERCARD;
  if (CARD_PATTERNS.AMERICAN_EXPRESS.test(cleanNumber)) return CARD_TYPES.AMERICAN_EXPRESS;
  if (CARD_PATTERNS.DINERS_CLUB.test(cleanNumber)) return CARD_TYPES.DINERS_CLUB;
  if (CARD_PATTERNS.DISCOVER.test(cleanNumber)) return CARD_TYPES.DISCOVER;
  if (CARD_PATTERNS.ELO.test(cleanNumber)) return CARD_TYPES.ELO;
  if (CARD_PATTERNS.JCB.test(cleanNumber)) return CARD_TYPES.JCB;
  if (CARD_PATTERNS.UNIONPAY.test(cleanNumber)) return CARD_TYPES.UNIONPAY;
  if (CARD_PATTERNS.HIPERCARD.test(cleanNumber)) return CARD_TYPES.HIPERCARD;
  if (CARD_PATTERNS.HIPER.test(cleanNumber)) return CARD_TYPES.HIPER;
  if (CARD_PATTERNS.AURA.test(cleanNumber)) return CARD_TYPES.AURA;
  
  return cleanNumber.length > 0 ? CARD_TYPES.UNKNOWN : '';
}; 