// Formata telefone brasileiro: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
export const formatPhone = (value: string): string => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '');

  // Limita a 11 dígitos (com DDD e 9 dígitos)
  const limitedNumbers = numbers.slice(0, 11);

  // Aplica a máscara
  if (limitedNumbers.length <= 10) {
    // Telefone fixo: (XX) XXXX-XXXX
    return limitedNumbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  } else {
    // Celular: (XX) XXXXX-XXXX
    return limitedNumbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  }
};

// Remove a máscara do telefone (retorna apenas números)
export const removePhoneMask = (value: string): string => {
  return value.replace(/\D/g, '');
};

