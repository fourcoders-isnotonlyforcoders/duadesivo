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

