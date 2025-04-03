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
import { useEnviarForm } from "../../hooks/useEnviarForm";
import { useFormContext } from "../../contexts/FormContext";

export const FormSection: React.FC = () => {
  const { save } = useEnviarForm();
  const { tipo, setTipo } = useFormContext();

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
            sub="Laminação Brilho/ Fosca"
            value="Holográfico (Brilho / Fosco)"
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
              data-aos-duration="700" name="nome" required/>
              <Inputs>
                <InputField type="email" placeholder="E-mail" data-aos="fade-right"
              data-aos-duration="700" name="email" required/>
                <InputField type="tel" placeholder="Telefone" data-aos="fade-left"
              data-aos-duration="700" name="telefone" required/>
              </Inputs>
            </FormInputs>
            <SelectField data-aos="fade-left" data-aos-duration="700" name="tipo" required 
              defaultValue="Não Selecionado" value={tipo} onChange={(e) => setTipo(e.target.value)}> 
              <Options value="Não Selecionado" disabled>Tipo do Adesivo</Options>
              <Options value="Holográfico (Brilho / Fosco)">Holográfico (Brilho)</Options>
              <Options value="Vinil Branco (Brilho)">Vinil Branco (Brilho)</Options>
              <Options value="Vinil Branco (Fosco)">Vinil Branco (Fosco)</Options>
              <Options value="Transparente (Brilho)">Transparente (Brilho)</Options>
            </SelectField>
            <SelectField data-aos="fade-right"
              data-aos-duration="700" name="modelo" required defaultValue="Não Selecionado">
              <Options value="Não Selecionado" disabled>Modelo Desejado (corte do adesivo)</Options>
              <Options value="redondo">redondo</Options>
              <Options value="quadrado">quadrado</Options>
              <Options value="personalizado">personalizado</Options>
            </SelectField>
            <InputField type="number" placeholder="Quantidade" data-aos="fade-left"
              data-aos-duration="700" name="quantidade" required/>
            <Inputs>
              <InputField type="number" placeholder="Altura (cm)" data-aos="fade-right"
              data-aos-duration="700" name="altura" required/>
              <InputField type="number" placeholder="Largura (cm)" data-aos="fade-left"
              data-aos-duration="700" name="largura" required/>
            </Inputs>
            <Submit type="submit" data-aos="fade-up"
              data-aos-duration="500" value="Enviar"/>
          </Form>
        </FormContainer>
      </Container>
    </SectionContainer>
  );
};
