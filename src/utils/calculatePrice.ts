import { MATERIAL_PRICES, MIN_QUANTITY } from "../constants/calculator";

export interface CalculationResult {
  unitPrice: number;
  totalPrice: number;
  isValid: boolean;
  error?: string;
}

export const calculatePrice = (
  material: string,
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

  // Busca o preço unitário baseado na quantidade
  const priceRanges = MATERIAL_PRICES[material];
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

