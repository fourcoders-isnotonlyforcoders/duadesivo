import React from "react";
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
  Options, Submit
} from "./styles";
import { Cards } from "./Cards";
export const FormSection: React.FC = () => {
  return (
    <SectionContainer>
      <InfoContainer>
        <TemplateText
          PreTitle="CONTATO"
          Title="Tem dúvidas ou quer criar seu adesivo personalizado? Fale com a gente!"
        />
      </InfoContainer>
      <Container>
        <CardsContainer>
          <Cards
            src="./images/holografico.png"
            alt="imagem de uma cor holográfica"
            title="Holográfico"
            sub="Laminação Brilho/ Fosca"
          />
          <Cards
            src="./images/branco.png"
            alt="imagem de uma cor holográfica"
            title="Vinil Branco "
            sub="Laminação Brilho"
          />
          <Cards
            src="./images/branco.png"
            alt="imagem de uma cor holográfica"
            title="Vinil Branco "
            sub="Vinil Branco "
          />
          <Cards
            src="./images/transparent.png"
            alt="imagem de uma cor holográfica"
            title="Transparente"
            sub=" Laminação Brilho"
          />
        </CardsContainer>
        <FormContainer>
          <FormInfo>
            <FormTitle>Preencha o formulário abaixo</FormTitle>
            <FormSubTitle>
              Os cards ao lado ajudarão na sua escolha do adesivo.
            </FormSubTitle>
          </FormInfo>

          <Form>
            <FormInputs>
              <InputField type="text" placeholder="Nome" />
              <Inputs>
                <InputField type="email" placeholder="E-mail" />
                <InputField type="tel" placeholder="Telefone" />
              </Inputs>
            </FormInputs>
            <SelectField>
              <Options selected>Tipo do Adesivo</Options>
              <Options>2</Options>
              <Options>3</Options>
              <Options>4</Options>
            </SelectField>
            <SelectField>
              <Options selected>Modelo Desejado</Options>
              <Options>2</Options>
              <Options>3</Options>
              <Options>4</Options>
            </SelectField>
            <InputField type="number" placeholder="Quantidade" />
            <Inputs>
              <InputField type="number" placeholder="Altura (cm)" />
              <InputField type="number" placeholder="Largura (cm)" />
            </Inputs>
            <Submit type="submit" />
          </Form>
        </FormContainer>
      </Container>
    </SectionContainer>
  );
};
