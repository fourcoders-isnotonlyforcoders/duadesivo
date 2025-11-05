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
  Options, Submit,
  PriceResult,
  PriceValue,
  PriceDetails,
  PriceDetailItem
} from "./styles";
import { Cards } from "./Cards";
import { useEnviarForm } from "../../hooks/useEnviarForm";
import { useFormContext } from "../../contexts/FormContext";
import { calculatePrice, CalculationResult } from "../../utils/calculatePrice";
import { mapFormTypeToPriceType } from "../../utils/formPriceHelper";
import { AVAILABLE_SIZES } from "../../constants/calculator";
import { formatPhone, removePhoneMask } from "../../utils/phoneMask";

export const FormSection: React.FC = () => {
  const { save: originalSave } = useEnviarForm();
  const { tipo, setTipo } = useFormContext();
  const [quantidade, setQuantidade] = useState<string>("");
  const [tamanho, setTamanho] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [priceResult, setPriceResult] = useState<CalculationResult | null>(null);

  // Função para formatar moeda
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };

  // Wrapper para limpar os estados após envio
  const save = (event: React.FormEvent<HTMLFormElement>) => {
    originalSave(event);
    // Limpa os estados após o envio
    setQuantidade("");
    setTamanho("");
    setTelefone("");
    setPriceResult(null);
  };

  // Calcula o preço automaticamente quando os campos mudam
  useEffect(() => {
    if (
      tipo &&
      tipo !== "Não Selecionado" &&
      tamanho &&
      quantidade &&
      parseInt(quantidade) >= 50
    ) {
      try {
        // Mapeia o tipo do formulário para o tipo da tabela
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

        const result = calculatePrice(priceType, tamanho, parseInt(quantidade));
        setPriceResult(result);
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
        <CardsContainer >
          <Cards
            src="./images/holografico.png"
            alt="imagem de uma cor holográfica"
            title="Holográfico"
            sub="Laminação Brilho"
            value="Holográfico (Brilho)"
          />
          <Cards
            src="./images/branco.png"
            alt="imagem de uma cor holográfica"
            title="Vinil Branco "
            sub="Laminação Brilho"
            value="Vinil Branco (Brilho)"
          />
          <Cards
            src="./images/branco.png"
            alt="imagem de uma cor holográfica"
            title="Vinil Branco "
            sub="Laminação Fosca "
            value="Vinil Branco (Fosco)"
          />
          <Cards
            src="./images/transparent.png"
            alt="imagem de uma cor holográfica"
            title="Transparente"
            sub=" Laminação Brilho"
            value="Transparente (Brilho)"
          />
        </CardsContainer>
        <FormContainer>
          <FormInfo>
            <FormTitle data-aos="fade-left" >Preencha o formulário abaixo</FormTitle>
            <FormSubTitle data-aos="fade-up-left">
              Os cards ao lado ajudarão na sua escolha do adesivo.
            </FormSubTitle>
          </FormInfo>

          <Form onSubmit={save}>
            <FormInputs>
              <InputField type="text" placeholder="Nome" data-aos="fade-left"
                data-aos-duration="700" name="nome" required />
              <Inputs>
                <InputField type="email" placeholder="E-mail" data-aos="fade-right"
                  data-aos-duration="700" name="email" required />
                <InputField
                  type="tel"
                  placeholder="Telefone (ex: (11) 99999-9999)"
                  data-aos="fade-left"
                  data-aos-duration="700"
                  value={telefone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const formatted = formatPhone(e.target.value);
                    setTelefone(formatted);
                  }}
                  maxLength={15}
                  required
                />
                {/* Campo hidden para enviar apenas números */}
                <input
                  type="hidden"
                  name="telefone"
                  value={removePhoneMask(telefone)}
                />
              </Inputs>
            </FormInputs>
            <SelectField data-aos="fade-left" data-aos-duration="700" name="tipo" required
              defaultValue="Não Selecionado" value={tipo} onChange={(e) => {
                setTipo(e.target.value);
                setTamanho(""); // Reset tamanho quando muda o tipo
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
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTamanho(e.target.value)}
              disabled={tipo === "Não Selecionado"}
              name="tamanho"
              required
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
            <SelectField data-aos="fade-right"
              data-aos-duration="700" name="modelo" required defaultValue="Não Selecionado">
              <Options value="Não Selecionado" disabled>Modelo Desejado (corte do adesivo)</Options>
              <Options value="redondo">redondo</Options>
              <Options value="quadrado">quadrado</Options>
              <Options value="personalizado">personalizado</Options>
            </SelectField>
            <InputField
              type="number"
              placeholder="Quantidade (mínimo 50 unidades)"
              data-aos="fade-left"
              data-aos-duration="700"
              name="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              min="50"
              required
            />

            {priceResult && priceResult.isValid && (
              <PriceResult data-aos="fade-up" data-aos-duration="600">
                <PriceValue>{formatCurrency(priceResult.totalPrice)}</PriceValue>
                <PriceDetails>
                  <PriceDetailItem>
                    <strong>Preço Unitário:</strong> {formatCurrency(priceResult.unitPrice)}
                  </PriceDetailItem>
                  <PriceDetailItem>
                    <strong>Quantidade:</strong> {quantidade} unidades
                  </PriceDetailItem>
                  <PriceDetailItem>
                    <strong>Tamanho:</strong> {AVAILABLE_SIZES.find(s => s.value === tamanho)?.label || tamanho}
                  </PriceDetailItem>
                  <PriceDetailItem>
                    <strong>Tipo:</strong> {tipo}
                  </PriceDetailItem>
                </PriceDetails>
              </PriceResult>
            )}

            {priceResult && !priceResult.isValid && priceResult.error && (
              <PriceResult style={{ borderColor: '#e93700', background: 'rgba(233, 55, 0, 0.1)' }}>
                <PriceValue style={{ color: '#e93700', fontSize: '1.6rem' }}>
                  {priceResult.error}
                </PriceValue>
              </PriceResult>
            )}

            {/* Campos hidden para enviar valores calculados no email */}
            {priceResult && priceResult.isValid && (
              <>
                <input type="hidden" name="preco_unitario" value={formatCurrency(priceResult.unitPrice)} />
                <input type="hidden" name="preco_total" value={formatCurrency(priceResult.totalPrice)} />
                <input type="hidden" name="tamanho_selecionado" value={AVAILABLE_SIZES.find(s => s.value === tamanho)?.label || tamanho} />
                <input type="hidden" name="quantidade_unidades" value={quantidade} />
              </>
            )}

            <Submit type="submit" data-aos="fade-up"
              data-aos-duration="500" value="Enviar" />
          </Form>
        </FormContainer>
      </Container>
    </SectionContainer>
  );
};
