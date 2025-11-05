import { calculatePrice, CalculationResult } from "./calculatePrice";

// Mapeia os tipos do formulário para os tipos da tabela de preços
export const mapFormTypeToPriceType = (formType: string): string => {
  const mapping: { [key: string]: string } = {
    "Holográfico (Brilho / Fosco)": "Vinil Holográfico",
    "Vinil Branco (Brilho)": "Vinil Branco",
    "Vinil Branco (Fosco)": "Vinil Branco",
    "Transparente (Brilho)": "Vinil Branco"
  };

  return mapping[formType] || "";
};

// Calcula o tamanho aproximado baseado na maior dimensão (altura ou largura)
export const calculateSizeFromDimensions = (altura: number, largura: number): { size: string; original: string } => {
  const maiorDimensao = Math.max(altura, largura);

  // Arredonda para o tamanho mais próximo disponível
  const sizes = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Encontra o tamanho mais próximo
  let closestSize = sizes[0];
  let minDiff = Math.abs(maiorDimensao - closestSize);

  for (const size of sizes) {
    const diff = Math.abs(maiorDimensao - size);
    if (diff < minDiff) {
      minDiff = diff;
      closestSize = size;
    }
  }

  return {
    size: `${closestSize}x${closestSize}`,
    original: `${altura.toFixed(1)}x${largura.toFixed(1)}`
  };
};

// Calcula o preço baseado nos dados do formulário
export const calculateFormPrice = (
  tipo: string,
  quantidade: number,
  altura: number,
  largura: number
): CalculationResult & { calculatedSize?: string; originalSize?: string } => {
  // Mapeia o tipo do formulário para o tipo da tabela
  const priceType = mapFormTypeToPriceType(tipo);

  if (!priceType) {
    return {
      unitPrice: 0,
      totalPrice: 0,
      isValid: false,
      error: "Tipo de adesivo não encontrado"
    };
  }

  // Calcula o tamanho baseado nas dimensões
  const sizeInfo = calculateSizeFromDimensions(altura, largura);

  // Calcula o preço usando a função existente
  const result = calculatePrice(priceType, sizeInfo.size, quantidade);

  // Adiciona informações sobre o tamanho calculado
  return {
    ...result,
    calculatedSize: sizeInfo.size,
    originalSize: sizeInfo.original
  };
};

