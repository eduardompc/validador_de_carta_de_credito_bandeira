export const CARD_TYPES = {
  VISA: 'Visa',
  MASTERCARD: 'Mastercard',
  AMERICAN_EXPRESS: 'American Express',
  DINERS_CLUB: 'Diners Club',
  DISCOVER: 'Discover',
  ELO: 'Elo',
  JCB: 'JCB',
  UNIONPAY: 'UnionPay',
  HIPERCARD: 'Hipercard',
  HIPER: 'Hiper',
  AURA: 'Aura',
  UNKNOWN: 'Bandeira não identificada'
} as const;

export const CARD_PATTERNS = {
  VISA: /^4/,
  MASTERCARD: /^5[1-5]/,
  AMERICAN_EXPRESS: /^3[47]/,
  DINERS_CLUB: /^(36|38|30[0-5])/,
  DISCOVER: /^(6011|65|64[4-9]|622)/,
  ELO: /^(50|5[6-9]|6[0-9])/,
  JCB: /^35(2[89]|[3-8][0-9])/,
  UNIONPAY: /^62/,
  HIPERCARD: /^6(304|7[0-9]{2}|9[0-9]{2})/,
  HIPER: /^606282|^3841(?:0[4-9]|1[0-2])|^3(?:085|095|55)[0-9]{0,}/,
  AURA: /^636368|^438935|^504175|^451416|^636297|^506699|^509048|^509067|^509049|^509069|^509050|^509074|^509068|^509040|^509045|^509051|^509046|^509066|^509047|^509042|^509052|^509043|^509064|^509040/
} as const; 