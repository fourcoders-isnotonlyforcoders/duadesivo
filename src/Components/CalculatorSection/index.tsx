import React, { useState, useEffect } from "react";
import { TemplateText } from "../TemplateText";
import {
  SectionContainer,
  InfoContainer,
  CardsContainer,
  CalculatorContainer,
  CalculatorInfo,
  CalculatorTitle,
  CalculatorSubTitle,
  InputField,
  Container,
  SelectField,
  Options,
  ResultContainer,
  ResultTitle,
  ResultValue,
  ResultDetails,
  ResultDetailItem,
  ErrorMessage,
  CalculateButton,
  WAButton,
  BtnImg,
  BtnImgWrapper,
  FormSection,
  SectionLabel
} from "./styles";
import { Cards } from "./Cards";
import { calculatePrice, CalculationResult } from "../../utils/calculatePrice";
import { WA_LINK, WA_NUMBER } from "../../constants/social";
import { BRAZILIAN_STATES, AVAILABLE_SIZES, CUSTOM_SIZE_VALUE } from "../../constants/calculator";

export const CalculatorSection: React.FC = () => {
  const [tipo, setTipo] = useState("Não Selecionado");
  const [tamanho, setTamanho] = useState<string>("");
  const [tamanhoPersonalizado, setTamanhoPersonalizado] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const formatCep = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d{1,3})$/, "$1-$2")
      .slice(0, 9);
  };

  useEffect(() => {
    if (tipo !== "Não Selecionado" && tamanho) {
      if (tamanho === CUSTOM_SIZE_VALUE) {
        const calculation = calculatePrice(tipo, tamanho, 0);
        setResult(calculation);
        setShowResult(calculation.isValid);
      } else if (quantidade && parseInt(quantidade) >= 50) {
        const calculation = calculatePrice(tipo, tamanho, parseInt(quantidade));
        setResult(calculation);
        setShowResult(calculation.isValid);
      } else {
        setShowResult(false);
        setResult(null);
      }
    } else {
      setShowResult(false);
      setResult(null);
    }
  }, [tipo, tamanho, quantidade]);

  const handleCalculate = () => {
    if (tipo === "Não Selecionado") {
      setResult({
        unitPrice: 0,
        totalPrice: 0,
        isValid: false,
        error: "Selecione o tipo de adesivo"
      });
      setShowResult(true);
      return;
    }

    if (!tamanho) {
      setResult({
        unitPrice: 0,
        totalPrice: 0,
        isValid: false,
        error: "Selecione o tamanho do adesivo"
      });
      setShowResult(true);
      return;
    }

    if (tamanho === CUSTOM_SIZE_VALUE) {
      const calculation = calculatePrice(tipo, tamanho, 0);
      setResult(calculation);
      setShowResult(true);
      return;
    }

    if (!quantidade || parseInt(quantidade) < 50) {
      setResult({
        unitPrice: 0,
        totalPrice: 0,
        isValid: false,
        error: "Quantidade mínima é de 50 unidades"
      });
      setShowResult(true);
      return;
    }

    const calculation = calculatePrice(tipo, tamanho, parseInt(quantidade));
    setResult(calculation);
    setShowResult(true);
  };

  const handleWhatsApp = () => {
    if (!result || !result.isValid) return;

    const tamanhoLabel = tamanho === CUSTOM_SIZE_VALUE
      ? tamanhoPersonalizado || "Tamanho Personalizado"
      : AVAILABLE_SIZES.find(s => s.value === tamanho)?.label || tamanho || "Não informado";
    const messageText = `Olá! Gostaria de solicitar um orçamento:\n\n` +
      `Nome: ${nome || "Não informado"}\n` +
      `Estado: ${estado || "Não informado"}\n` +
      `CEP: ${cep || "Não informado"}\n` +
      `Tipo: ${tipo}\n` +
      `Tamanho: ${tamanho === CUSTOM_SIZE_VALUE ? "Personalizado - " : ""}${tamanhoLabel}\n` +
      (result.isCustomSize
        ? `Quantidade: ${quantidade || "A combinar"} unidades\n` +
        `Preço: A combinar`
        : `Quantidade: ${quantidade} unidades\n` +
        `Preço Unitário: ${formatCurrency(result.unitPrice)}\n` +
        `Valor Total: ${formatCurrency(result.totalPrice)}`
      );

    const encodedMessage = encodeURIComponent(messageText);

    let whatsappUrl: string;
    if (WA_NUMBER) {
      const phoneNumber = WA_NUMBER.replace(/\D/g, "");
      whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    } else if (WA_LINK) {
      const separator = WA_LINK.includes('?') ? '&' : '?';
      whatsappUrl = `${WA_LINK}${separator}text=${encodedMessage}`;
    } else {
      whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    }

    window.open(whatsappUrl, "_blank");
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };

  return (
    <SectionContainer id="calculadora">
      <InfoContainer>
        <TemplateText
          PreTitle="CALCULADORA"
          Title="Calcule o preço do seu adesivo personalizado de forma rápida e fácil!"
        />
      </InfoContainer>
      <Container>
        <CardsContainer>
          <Cards
            src="./images/holografico.png"
            alt="imagem de um adesivo holográfico"
            title="Vinil Holográfico"
            sub="Alta qualidade e brilho"
            value="Vinil Holográfico"
            selected={tipo === "Vinil Holográfico"}
            onSelect={setTipo}
          />
          <Cards
            src="./images/branco.png"
            alt="imagem de um adesivo branco"
            title="Vinil Branco"
            sub="Brilho ou Fosco"
            value="Vinil Branco"
            selected={tipo === "Vinil Branco"}
            onSelect={setTipo}
          />
          <Cards
            src="./images/transparent.png"
            alt="imagem de um adesivo transparente"
            title="Vinil Transparente"
            sub="Laminação Brilho"
            value="Vinil Transparente"
            selected={tipo === "Vinil Transparente"}
            onSelect={setTipo}
          />
        </CardsContainer>
        <CalculatorContainer>
          <CalculatorInfo>
            <CalculatorTitle data-aos="fade-left">
              Selecione as opções abaixo
            </CalculatorTitle>
            <CalculatorSubTitle data-aos="fade-up-left">
              Escolha o tipo de adesivo e informe a quantidade desejada.
              O cálculo será feito automaticamente!
            </CalculatorSubTitle>
          </CalculatorInfo>

          {/* --- DADOS PESSOAIS --- */}
          <FormSection data-aos="fade-up" data-aos-duration="600">
            <SectionLabel>Dados Pessoais</SectionLabel>

            <InputField
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
            />

            <SelectField
              value={estado}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setEstado(e.target.value)}
            >
              {BRAZILIAN_STATES.map((state) => (
                <Options
                  key={state.value}
                  value={state.value}
                  disabled={state.value === ""}
                >
                  {state.label}
                </Options>
              ))}
            </SelectField>

            {/* 🆕 Campo CEP */}
            <InputField
              type="text"
              placeholder="CEP (apenas Brasil - ex: 01000-000)"
              value={cep}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCep(formatCep(e.target.value))
              }
              maxLength={9}
              pattern="\d{5}-\d{3}"
            />
          </FormSection>

          {/* --- OPÇÕES DO PRODUTO --- */}
          <FormSection data-aos="fade-up" data-aos-duration="700">
            <SectionLabel>Opções do Produto</SectionLabel>

            <SelectField
              value={tipo}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setTipo(e.target.value);
                setTamanho("");
              }}
            >
              <Options value="Não Selecionado" disabled>
                Tipo do Adesivo
              </Options>
              <Options value="Vinil Holográfico">Vinil Holográfico</Options>
              <Options value="Vinil Branco">Vinil Branco</Options>
              <Options value="Vinil Transparente">Vinil Transparente</Options>
            </SelectField>

            <SelectField
              value={tamanho}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setTamanho(e.target.value);
                if (e.target.value !== CUSTOM_SIZE_VALUE) {
                  setTamanhoPersonalizado("");
                }
              }}
              disabled={tipo === "Não Selecionado"}
            >
              {AVAILABLE_SIZES.map((size) => (
                <Options
                  key={size.value}
                  value={size.value}
                  disabled={size.value === ""}
                >
                  {size.label}
                </Options>
              ))}
            </SelectField>
            {tamanho === CUSTOM_SIZE_VALUE && (
              <InputField
                type="text"
                placeholder="Digite o tamanho (ex: 15x20 cm)"
                value={tamanhoPersonalizado}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTamanhoPersonalizado(e.target.value)}
                data-aos="fade-up"
                data-aos-duration="700"
              />
            )}
            <InputField
              type="number"
              placeholder={tamanho === CUSTOM_SIZE_VALUE ? "Quantidade (opcional)" : "Quantidade (mínimo 50 unidades)"}
              value={quantidade}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                if (tamanho !== CUSTOM_SIZE_VALUE && value !== "") {
                  const numValue = parseInt(value);
                  if (!isNaN(numValue)) {
                    if (value.length >= 2 && numValue < 50) {
                      return;
                    }
                    if (value.length === 1 && numValue < 5) {
                      return;
                    }
                  }
                }
                setQuantidade(value);
              }}
              min={tamanho === CUSTOM_SIZE_VALUE ? undefined : 50}
            />
          </FormSection>

          <CalculateButton
            type="button"
            onClick={handleCalculate}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Calcular Preço
          </CalculateButton>

          {showResult && result && (
            <ResultContainer data-aos="fade-up" data-aos-duration="700">
              {result.isValid ? (
                <>
                  <ResultTitle>Resultado do Cálculo</ResultTitle>
                  {result.isCustomSize ? (
                    <ResultValue style={{ fontSize: "2rem" }}>
                      Preço a combinar
                    </ResultValue>
                  ) : (
                    <ResultValue>{formatCurrency(result.totalPrice)}</ResultValue>
                  )}
                  <ResultDetails>
                    {!result.isCustomSize && (
                      <ResultDetailItem>
                        <strong>Preço Unitário:</strong>{" "}
                        {formatCurrency(result.unitPrice)}
                      </ResultDetailItem>
                    )}
                    {quantidade && (
                      <ResultDetailItem>
                        <strong>Quantidade:</strong> {quantidade} unidades
                      </ResultDetailItem>
                    )}
                    <ResultDetailItem>
                      <strong>Tipo:</strong> {tipo}
                    </ResultDetailItem>
                    {tamanho && (
                      <ResultDetailItem>
                        <strong>Tamanho:</strong> {tamanho === CUSTOM_SIZE_VALUE
                          ? tamanhoPersonalizado || "Tamanho Personalizado"
                          : AVAILABLE_SIZES.find(s => s.value === tamanho)?.label || tamanho}
                      </ResultDetailItem>
                    )}
                    {nome && (
                      <ResultDetailItem>
                        <strong>Nome:</strong> {nome}
                      </ResultDetailItem>
                    )}
                    {estado && (
                      <ResultDetailItem>
                        <strong>Estado:</strong>{" "}
                        {BRAZILIAN_STATES.find(s => s.value === estado)?.label || estado}
                      </ResultDetailItem>
                    )}
                    {cep && (
                      <ResultDetailItem>
                        <strong>CEP:</strong> {cep}
                      </ResultDetailItem>
                    )}
                  </ResultDetails>
                  <WAButton onClick={handleWhatsApp}>
                    <span>Solicitar Orçamento via WhatsApp</span>
                    <BtnImgWrapper>
                      <BtnImg src="icons/wp.svg" alt="WhatsApp Icon" className="default" />
                      <BtnImg src="icons/wpY.svg" alt="WhatsApp Icon Hover" className="hover" />
                    </BtnImgWrapper>
                  </WAButton>
                </>
              ) : (
                <ErrorMessage>{result.error}</ErrorMessage>
              )}
            </ResultContainer>
          )}

          <CalculatorSubTitle
            style={{ marginTop: "2rem", fontSize: "1.3rem", textAlign: "center" }}
            data-aos="fade-up"
          >
            💡 <strong>Nota:</strong> As cartelas têm preço fixo de R$ 14,90 e R$ 19,90.
            Elas não estão incluídas nesta calculadora.
          </CalculatorSubTitle>
        </CalculatorContainer>
      </Container>
    </SectionContainer>
  );
};
