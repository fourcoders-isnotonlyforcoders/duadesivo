import React, { useState, useEffect } from "react";
import { TemplateText } from "../TemplateText";
import {
  SectionContainer,
  InfoContainer,
  CardsContainer,
  Form,
  FormContainer,
  FormInfo,
  FormInputs,
  FormSubTitle,
  FormTitle,
  InputField,
  Inputs,
  Container,
  SelectField,
  Options,
  Submit,
  PriceResult,
  PriceValue,
  PriceDetails,
  PriceDetailItem
} from "./styles";
import { Cards } from "./Cards";
import { useFormContext } from "../../contexts/FormContext";
import { calculatePrice, CalculationResult } from "../../utils/calculatePrice";
import { mapFormTypeToPriceType } from "../../utils/formPriceHelper";
import { AVAILABLE_SIZES, CUSTOM_SIZE_VALUE } from "../../constants/calculator";
import { formatPhone } from "../../utils/phoneMask";
import { WA_LINK, WA_NUMBER } from "../../constants/social";

// 👉 Nova função utilitária local (máscara de CEP)
const formatCEP = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d{1,3})/, "$1-$2")
    .slice(0, 9);
};

export const FormSection: React.FC = () => {
  const { tipo, setTipo } = useFormContext();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [tamanho, setTamanho] = useState<string>("");
  const [tamanhoPersonalizado, setTamanhoPersonalizado] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [priceResult, setPriceResult] = useState<CalculationResult | null>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };

  const handleWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação do modelo
    if (!modelo || modelo === "") {
      alert("Por favor, selecione o modelo desejado (corte do adesivo)");
      return;
    }

    const tamanhoLabel = tamanho === CUSTOM_SIZE_VALUE
      ? tamanhoPersonalizado || "Tamanho Personalizado"
      : AVAILABLE_SIZES.find(s => s.value === tamanho)?.label || tamanho || "Não informado";
    const messageText = `Olá! Gostaria de solicitar um orçamento:\n\n` +
      `Nome: ${nome || "Não informado"}\n` +
      `E-mail: ${email || "Não informado"}\n` +
      `Telefone: ${telefone || "Não informado"}\n` +
      `CEP: ${cep || "Não informado"}\n` +
      `Tipo: ${tipo || "Não informado"}\n` +
      `Tamanho: ${tamanho === CUSTOM_SIZE_VALUE ? "Personalizado - " : ""}${tamanhoLabel}\n` +
      `Modelo: ${modelo}\n` +
      `Quantidade: ${quantidade || "A combinar"} unidades` +
      (priceResult && priceResult.isValid
        ? priceResult.isCustomSize
          ? `\nPreço: A combinar`
          : `\nPreço Unitário: ${formatCurrency(priceResult.unitPrice)}\nValor Total: ${formatCurrency(priceResult.totalPrice)}`
        : '');

    const encodedMessage = encodeURIComponent(messageText);

    let whatsappUrl: string;
    if (WA_NUMBER) {
      const phoneNumber = WA_NUMBER.replace(/\D/g, "");
      whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    } else if (WA_LINK) {
      const separator = WA_LINK.includes("?") ? "&" : "?";
      whatsappUrl = `${WA_LINK}${separator}text=${encodedMessage}`;
    } else {
      whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    }

    window.open(whatsappUrl, "_blank");

    // Limpa tudo
    setNome("");
    setEmail("");
    setTelefone("");
    setCep("");
    setQuantidade("");
    setTamanho("");
    setTamanhoPersonalizado("");
    setModelo("");
    setPriceResult(null);
    event.currentTarget.reset();
  };

  useEffect(() => {
    if (
      tipo &&
      tipo !== "Não Selecionado" &&
      tamanho
    ) {
      try {
        const priceType = mapFormTypeToPriceType(tipo);
        if (!priceType) {
          setPriceResult({
            unitPrice: 0,
            totalPrice: 0,
            isValid: false,
            error: "Tipo de adesivo não encontrado"
          });
          return;
        }

        // Se for tamanho personalizado, não precisa de quantidade
        if (tamanho === CUSTOM_SIZE_VALUE) {
          const result = calculatePrice(priceType, tamanho, 0);
          setPriceResult(result);
          return;
        }

        // Para tamanhos normais, precisa de quantidade válida
        if (quantidade && parseInt(quantidade) >= 50) {
          const result = calculatePrice(priceType, tamanho, parseInt(quantidade));
          setPriceResult(result);
        } else {
          setPriceResult(null);
        }
      } catch (error) {
        setPriceResult({
          unitPrice: 0,
          totalPrice: 0,
          isValid: false,
          error: "Erro ao calcular preço"
        });
      }
    } else {
      setPriceResult(null);
    }
  }, [tipo, quantidade, tamanho]);

  return (
    <SectionContainer id="criar">
      <InfoContainer>
        <TemplateText
          PreTitle="CONTATO"
          Title="Tem dúvidas ou quer criar seu adesivo personalizado? Fale com a gente!"
        />
      </InfoContainer>
      <Container>
        <CardsContainer>
          <Cards src="./images/holografico.png" alt="imagem holográfica" title="Holográfico" sub="Laminação Brilho" value="Holográfico (Brilho)" />
          <Cards src="./images/branco.png" alt="imagem vinil branco" title="Vinil Branco" sub="Laminação Brilho" value="Vinil Branco (Brilho)" />
          <Cards src="./images/branco.png" alt="imagem vinil branco fosco" title="Vinil Branco" sub="Laminação Fosca" value="Vinil Branco (Fosco)" />
          <Cards src="./images/transparent.png" alt="imagem transparente" title="Transparente" sub="Laminação Brilho" value="Transparente (Brilho)" />
        </CardsContainer>

        <FormContainer>
          <FormInfo>
            <FormTitle data-aos="fade-left">Preencha o formulário abaixo</FormTitle>
            <FormSubTitle data-aos="fade-up-left">
              Os cards ao lado ajudarão na sua escolha do adesivo.
            </FormSubTitle>
          </FormInfo>

          <Form onSubmit={handleWhatsApp}>
            <FormInputs>
              <InputField
                type="text"
                placeholder="Nome"
                data-aos="fade-left"
                data-aos-duration="700"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <Inputs>
                <InputField
                  type="email"
                  placeholder="E-mail"
                  data-aos="fade-right"
                  data-aos-duration="700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <InputField
                  type="tel"
                  placeholder="Telefone (ex: (11) 99999-9999)"
                  data-aos="fade-left"
                  data-aos-duration="700"
                  value={telefone}
                  onChange={(e) => setTelefone(formatPhone(e.target.value))}
                  maxLength={15}
                  required
                />
              </Inputs>
              {/* ✅ Novo campo de CEP */}
              <InputField
                type="text"
                placeholder="CEP (ex: 01001-000)"
                data-aos="fade-up"
                data-aos-duration="700"
                value={cep}
                onChange={(e) => setCep(formatCEP(e.target.value))}
                maxLength={9}
                required
              />
            </FormInputs>

            <SelectField
              data-aos="fade-left"
              data-aos-duration="700"
              required
              value={tipo}
              onChange={(e) => {
                setTipo(e.target.value);
                setTamanho("");
              }}>
              <Options value="Não Selecionado" disabled>Tipo do Adesivo</Options>
              <Options value="Holográfico (Brilho / Fosco)">Holográfico (Brilho)</Options>
              <Options value="Vinil Branco (Brilho)">Vinil Branco (Brilho)</Options>
              <Options value="Vinil Branco (Fosco)">Vinil Branco (Fosco)</Options>
              <Options value="Transparente (Brilho)">Transparente (Brilho)</Options>
            </SelectField>

            <SelectField
              data-aos="fade-left"
              data-aos-duration="700"
              value={tamanho}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setTamanho(e.target.value);
                if (e.target.value !== CUSTOM_SIZE_VALUE) {
                  setTamanhoPersonalizado("");
                }
              }}
              disabled={tipo === "Não Selecionado"}
              required
            >
              {AVAILABLE_SIZES.map((size) => (
                <Options key={size.value} value={size.value} disabled={size.value === ""}>
                  {size.label}
                </Options>
              ))}
            </SelectField>
            {tamanho === CUSTOM_SIZE_VALUE && (
              <InputField
                type="text"
                placeholder="Digite o tamanho (ex: 15x20 cm)"
                data-aos="fade-left"
                data-aos-duration="700"
                value={tamanhoPersonalizado}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTamanhoPersonalizado(e.target.value)}
                required
              />
            )}
            <SelectField
              data-aos="fade-right"
              data-aos-duration="700"
              required
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            >
              <Options value="" disabled>Modelo Desejado (corte do adesivo)</Options>
              <Options value="redondo">redondo</Options>
              <Options value="quadrado">quadrado</Options>
              <Options value="personalizado">personalizado</Options>
            </SelectField>

            <InputField
              type="number"
              placeholder={tamanho === CUSTOM_SIZE_VALUE ? "Quantidade (opcional)" : "Quantidade (mínimo 50 unidades)"}
              data-aos="fade-left"
              data-aos-duration="700"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              min={tamanho === CUSTOM_SIZE_VALUE ? undefined : "50"}
              required={tamanho !== CUSTOM_SIZE_VALUE}
            />

            {priceResult && priceResult.isValid && (
              <PriceResult data-aos="fade-up" data-aos-duration="600">
                {priceResult.isCustomSize ? (
                  <PriceValue style={{ fontSize: "2rem", color: "#4a90e2" }}>
                    Preço a combinar
                  </PriceValue>
                ) : (
                  <PriceValue>{formatCurrency(priceResult.totalPrice)}</PriceValue>
                )}
                <PriceDetails>
                  {nome && (
                    <PriceDetailItem><strong>Nome:</strong> {nome}</PriceDetailItem>
                  )}
                  {!priceResult.isCustomSize && (
                    <>
                      <PriceDetailItem>
                        <strong>Preço Unitário:</strong> {formatCurrency(priceResult.unitPrice)}
                      </PriceDetailItem>
                      <PriceDetailItem>
                        <strong>Quantidade:</strong> {quantidade} unidades
                      </PriceDetailItem>
                    </>
                  )}
                  <PriceDetailItem>
                    <strong>Tamanho:</strong> {tamanho === CUSTOM_SIZE_VALUE
                      ? tamanhoPersonalizado || "Tamanho Personalizado"
                      : AVAILABLE_SIZES.find(s => s.value === tamanho)?.label || tamanho}
                  </PriceDetailItem>
                  <PriceDetailItem>
                    <strong>Tipo:</strong> {tipo}
                  </PriceDetailItem>
                  {modelo && (
                    <PriceDetailItem>
                      <strong>Modelo:</strong> {modelo}
                    </PriceDetailItem>
                  )}
                  {cep && (
                    <PriceDetailItem>
                      <strong>CEP:</strong> {cep}
                    </PriceDetailItem>
                  )}
                </PriceDetails>
              </PriceResult>
            )}

            {priceResult && !priceResult.isValid && priceResult.error && (
              <PriceResult style={{ borderColor: "#e93700", background: "rgba(233,55,0,0.1)" }}>
                <PriceValue style={{ color: "#e93700", fontSize: "1.6rem" }}>
                  {priceResult.error}
                </PriceValue>
              </PriceResult>
            )}

            <Submit
              type="submit"
              data-aos="fade-up"
              data-aos-duration="500"
              value="Enviar por WhatsApp"
            />
          </Form>
        </FormContainer>
      </Container>
    </SectionContainer>
  );
};
