import { MATERIAL_PRICES, MIN_QUANTITY } from "../constants/calculator";

export interface CalculationResult {
  unitPrice: number;
  totalPrice: number;
  isValid: boolean;
  error?: string;
}

export const calculatePrice = (
  material: string,
  size: string,
  quantity: number
): CalculationResult => {
  // Validação de quantidade mínima
  if (quantity < MIN_QUANTITY) {
    return {
      unitPrice: 0,
      totalPrice: 0,
      isValid: false,
      error: `Quantidade mínima é de ${MIN_QUANTITY} unidades`
    };
  }

  // Verifica se o material existe na tabela de preços
  if (!MATERIAL_PRICES[material]) {
    return {
      unitPrice: 0,
      totalPrice: 0,
      isValid: false,
      error: "Material não encontrado"
    };
  }

  // Verifica se o tamanho existe para o material
  if (!MATERIAL_PRICES[material][size]) {
    return {
      unitPrice: 0,
      totalPrice: 0,
      isValid: false,
      error: "Tamanho não encontrado para este material"
    };
  }

  // Busca o preço unitário baseado no tamanho e quantidade
  const priceRanges = MATERIAL_PRICES[material][size];
  let unitPrice = 0;

  for (const range of priceRanges) {
    if (range.max === null) {
      // "em diante"
      if (quantity >= range.min) {
        unitPrice = range.price;
        break;
      }
    } else {
      if (quantity >= range.min && quantity <= range.max) {
        unitPrice = range.price;
        break;
      }
    }
  }

  if (unitPrice === 0) {
    return {
      unitPrice: 0,
      totalPrice: 0,
      isValid: false,
      error: "Não foi possível calcular o preço para esta quantidade"
    };
  }

  const totalPrice = quantity * unitPrice;

  return {
    unitPrice,
    totalPrice,
    isValid: true
  };
};

