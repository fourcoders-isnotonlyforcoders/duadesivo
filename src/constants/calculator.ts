export interface PriceRange {
  min: number;
  max: number | null; // null significa "em diante"
  price: number;
}

export interface SizePrices {
  [size: string]: PriceRange[];
}

export interface MaterialPrices {
  [material: string]: SizePrices;
}

export const MATERIAL_PRICES: MaterialPrices = {
  "Vinil Branco": {
    "3x3": [
      { min: 50, max: 99, price: 0.225 },
      { min: 100, max: 249, price: 0.162 },
      { min: 250, max: 499, price: 0.135 },
      { min: 500, max: 999, price: 0.090 },
      { min: 1000, max: null, price: 0.063 }
    ],
    "4x4": [
      { min: 50, max: 99, price: 0.400 },
      { min: 100, max: 249, price: 0.288 },
      { min: 250, max: 499, price: 0.240 },
      { min: 500, max: 999, price: 0.160 },
      { min: 1000, max: null, price: 0.112 }
    ],
    "5x5": [
      { min: 50, max: 99, price: 0.625 },
      { min: 100, max: 249, price: 0.450 },
      { min: 250, max: 499, price: 0.375 },
      { min: 500, max: 999, price: 0.250 },
      { min: 1000, max: null, price: 0.175 }
    ],
    "6x6": [
      { min: 50, max: 99, price: 0.900 },
      { min: 100, max: 249, price: 0.648 },
      { min: 250, max: 499, price: 0.540 },
      { min: 500, max: 999, price: 0.360 },
      { min: 1000, max: null, price: 0.252 }
    ],
    "7x7": [
      { min: 50, max: 99, price: 1.225 },
      { min: 100, max: 249, price: 0.882 },
      { min: 250, max: 499, price: 0.735 },
      { min: 500, max: 999, price: 0.490 },
      { min: 1000, max: null, price: 0.343 }
    ],
    "8x8": [
      { min: 50, max: 99, price: 1.600 },
      { min: 100, max: 249, price: 1.152 },
      { min: 250, max: 499, price: 0.960 },
      { min: 500, max: 999, price: 0.640 },
      { min: 1000, max: null, price: 0.448 }
    ],
    "9x9": [
      { min: 50, max: 99, price: 2.025 },
      { min: 100, max: 249, price: 1.458 },
      { min: 250, max: 499, price: 1.215 },
      { min: 500, max: 999, price: 0.810 },
      { min: 1000, max: null, price: 0.567 }
    ],
    "10x10": [
      { min: 50, max: 99, price: 2.500 },
      { min: 100, max: 249, price: 1.800 },
      { min: 250, max: 499, price: 1.500 },
      { min: 500, max: 999, price: 1.000 },
      { min: 1000, max: null, price: 0.700 }
    ],
    "11x11": [
      { min: 50, max: 99, price: 3.025 },
      { min: 100, max: 249, price: 2.178 },
      { min: 250, max: 499, price: 1.815 },
      { min: 500, max: 999, price: 1.210 },
      { min: 1000, max: null, price: 0.847 }
    ],
    "12x12": [
      { min: 50, max: 99, price: 3.600 },
      { min: 100, max: 249, price: 2.592 },
      { min: 250, max: 499, price: 2.160 },
      { min: 500, max: 999, price: 1.440 },
      { min: 1000, max: null, price: 1.008 }
    ]
  },
  "Vinil Holográfico": {
    "3x3": [
      { min: 50, max: 99, price: 0.270 },
      { min: 100, max: 249, price: 0.225 },
      { min: 250, max: 499, price: 0.180 },
      { min: 500, max: 999, price: 0.135 },
      { min: 1000, max: null, price: 0.108 }
    ],
    "4x4": [
      { min: 50, max: 99, price: 0.480 },
      { min: 100, max: 249, price: 0.400 },
      { min: 250, max: 499, price: 0.320 },
      { min: 500, max: 999, price: 0.240 },
      { min: 1000, max: null, price: 0.192 }
    ],
    "5x5": [
      { min: 50, max: 99, price: 0.750 },
      { min: 100, max: 249, price: 0.625 },
      { min: 250, max: 499, price: 0.500 },
      { min: 500, max: 999, price: 0.375 },
      { min: 1000, max: null, price: 0.300 }
    ],
    "6x6": [
      { min: 50, max: 99, price: 1.080 },
      { min: 100, max: 249, price: 0.900 },
      { min: 250, max: 499, price: 0.720 },
      { min: 500, max: 999, price: 0.540 },
      { min: 1000, max: null, price: 0.432 }
    ],
    "7x7": [
      { min: 50, max: 99, price: 1.470 },
      { min: 100, max: 249, price: 1.225 },
      { min: 250, max: 499, price: 0.980 },
      { min: 500, max: 999, price: 0.735 },
      { min: 1000, max: null, price: 0.588 }
    ],
    "8x8": [
      { min: 50, max: 99, price: 1.920 },
      { min: 100, max: 249, price: 1.600 },
      { min: 250, max: 499, price: 1.280 },
      { min: 500, max: 999, price: 0.960 },
      { min: 1000, max: null, price: 0.768 }
    ],
    "9x9": [
      { min: 50, max: 99, price: 2.430 },
      { min: 100, max: 249, price: 2.025 },
      { min: 250, max: 499, price: 1.620 },
      { min: 500, max: 999, price: 1.215 },
      { min: 1000, max: null, price: 0.972 }
    ],
    "10x10": [
      { min: 50, max: 99, price: 3.000 },
      { min: 100, max: 249, price: 2.500 },
      { min: 250, max: 499, price: 2.000 },
      { min: 500, max: 999, price: 1.500 },
      { min: 1000, max: null, price: 1.200 }
    ],
    "11x11": [
      { min: 50, max: 99, price: 3.630 },
      { min: 100, max: 249, price: 3.025 },
      { min: 250, max: 499, price: 2.420 },
      { min: 500, max: 999, price: 1.815 },
      { min: 1000, max: null, price: 1.452 }
    ],
    "12x12": [
      { min: 50, max: 99, price: 4.320 },
      { min: 100, max: 249, price: 3.600 },
      { min: 250, max: 499, price: 2.880 },
      { min: 500, max: 999, price: 2.160 },
      { min: 1000, max: null, price: 1.728 }
    ]
  }
};

export const AVAILABLE_SIZES = [
  { value: "", label: "Selecione o Tamanho" },
  { value: "3x3", label: "3x3 cm" },
  { value: "4x4", label: "4x4 cm" },
  { value: "5x5", label: "5x5 cm" },
  { value: "6x6", label: "6x6 cm" },
  { value: "7x7", label: "7x7 cm" },
  { value: "8x8", label: "8x8 cm" },
  { value: "9x9", label: "9x9 cm" },
  { value: "10x10", label: "10x10 cm" },
  { value: "11x11", label: "11x11 cm" },
  { value: "12x12", label: "12x12 cm" },
  { value: "personalizado", label: "Tamanho Personalizado" }
];

export const CUSTOM_SIZE_VALUE = "personalizado";

export const MIN_QUANTITY = 50;

export const CARTAO_PRICES = {
  STANDARD: 14.90,
  PREMIUM: 19.90
};

export const BRAZILIAN_STATES = [
  { value: "", label: "Selecione o Estado" },
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" }
];

