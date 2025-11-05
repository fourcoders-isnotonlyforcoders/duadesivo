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
import { BRAZILIAN_STATES, AVAILABLE_SIZES } from "../../constants/calculator";

export const CalculatorSection: React.FC = () => {
  const [tipo, setTipo] = useState("Não Selecionado");
  const [tamanho, setTamanho] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Calcula automaticamente quando tipo, tamanho ou quantidade mudam
  useEffect(() => {
    if (tipo !== "Não Selecionado" && tamanho && quantidade && parseInt(quantidade) >= 50) {
      const calculation = calculatePrice(tipo, tamanho, parseInt(quantidade));
      setResult(calculation);
      setShowResult(calculation.isValid);
    } else {
      setShowResult(false);
      setResult(null);
    }
  }, [tipo, tamanho, quantidade]);

  const handleCalculate = () => {
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

    const calculation = calculatePrice(tipo, tamanho, parseInt(quantidade));
    setResult(calculation);
    setShowResult(true);
  };

  const handleWhatsApp = () => {
    if (!result || !result.isValid) return;

    const messageText = `Olá! Gostaria de solicitar um orçamento:\n\n` +
      `Nome: ${nome || "Não informado"}\n` +
      `Estado: ${estado || "Não informado"}\n` +
      `Tipo: ${tipo}\n` +
      `Tamanho: ${tamanho || "Não informado"}\n` +
      `Quantidade: ${quantidade} unidades\n` +
      `Preço Unitário: ${formatCurrency(result.unitPrice)}\n` +
      `Valor Total: ${formatCurrency(result.totalPrice)}`;

    const encodedMessage = encodeURIComponent(messageText);

    // Constrói a URL do WhatsApp corretamente
    let whatsappUrl: string;
    if (WA_NUMBER) {
      // Se tiver número, constrói do zero
      const phoneNumber = WA_NUMBER.replace(/\D/g, ''); // Remove caracteres não numéricos
      whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    } else if (WA_LINK) {
      // Se já tiver link, adiciona o text
      const separator = WA_LINK.includes('?') ? '&' : '?';
      whatsappUrl = `${WA_LINK}${separator}text=${encodedMessage}`;
    } else {
      // Fallback
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
          </FormSection>

          <FormSection data-aos="fade-up" data-aos-duration="700">
            <SectionLabel>Opções do Produto</SectionLabel>
            <SelectField
              value={tipo}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setTipo(e.target.value);
                setTamanho(""); // Reset tamanho quando muda o tipo
              }}
            >
              <Options value="Não Selecionado" disabled>
                Tipo do Adesivo
              </Options>
              <Options value="Vinil Holográfico">Vinil Holográfico</Options>
              <Options value="Vinil Branco">Vinil Branco</Options>
            </SelectField>
            <SelectField
              value={tamanho}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTamanho(e.target.value)}
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
            <InputField
              type="number"
              placeholder="Quantidade (mínimo 50 unidades)"
              value={quantidade}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantidade(e.target.value)}
              min="50"
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
                  <ResultValue>{formatCurrency(result.totalPrice)}</ResultValue>
                  <ResultDetails>
                    <ResultDetailItem>
                      <strong>Preço Unitário:</strong>{" "}
                      {formatCurrency(result.unitPrice)}
                    </ResultDetailItem>
                    <ResultDetailItem>
                      <strong>Quantidade:</strong> {quantidade} unidades
                    </ResultDetailItem>
                    <ResultDetailItem>
                      <strong>Tipo:</strong> {tipo}
                    </ResultDetailItem>
                    {tamanho && (
                      <ResultDetailItem>
                        <strong>Tamanho:</strong> {AVAILABLE_SIZES.find(s => s.value === tamanho)?.label || tamanho}
                      </ResultDetailItem>
                    )}
                    {nome && (
                      <ResultDetailItem>
                        <strong>Nome:</strong> {nome}
                      </ResultDetailItem>
                    )}
                    {estado && (
                      <ResultDetailItem>
                        <strong>Estado:</strong> {BRAZILIAN_STATES.find(s => s.value === estado)?.label || estado}
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

