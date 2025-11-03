export interface PriceRange {
  min: number;
  max: number | null; // null significa "em diante"
  price: number;
}

export interface MaterialPrices {
  [key: string]: PriceRange[];
}

export const MATERIAL_PRICES: MaterialPrices = {
  "Vinil Branco": [
    { min: 50, max: 99, price: 250 },
    { min: 100, max: 249, price: 180 },
    { min: 250, max: 499, price: 150 },
    { min: 500, max: 999, price: 100 },
    { min: 1000, max: null, price: 70 }
  ],
  "Vinil Holográfico": [
    { min: 50, max: 99, price: 300 },
    { min: 100, max: 249, price: 250 },
    { min: 250, max: 499, price: 200 },
    { min: 500, max: 999, price: 150 },
    { min: 1000, max: null, price: 120 }
  ]
};

export const MIN_QUANTITY = 50;

export const CARTAO_PRICES = {
  STANDARD: 14.90,
  PREMIUM: 19.90
};

