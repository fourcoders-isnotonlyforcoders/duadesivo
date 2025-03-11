import React from "react";
import { TemplateText } from "../TemplateText";
import { SectionContainer, InfoContainer, SubTitle } from "./styles";
import { Cards } from "./Cards";
export const FormSection: React.FC = () => {
  return (
    <SectionContainer>
      <InfoContainer>
        <TemplateText
          PreTitle="CONTATO"
          Title="Tem dúvidas ou quer criar seu adesivo personalizado? Fale com a gente!"
        />
        <SubTitle>Preencha o formulário abaixo e entraremos em contato rapidinho</SubTitle>
      </InfoContainer>
      <Cards
      src="./images/holografico.png" 
      alt="imagem de uma cor holográfica"
      title="Holográfico"
      sub="Laminação Brilho/ Fosca"
      />
      <Cards
      src="./images/holografico.png" 
      alt="imagem de uma cor holográfica"
      title="Vinil Branco "
      sub="Laminação Brilho"
      />
      <Cards
      src="./images/holografico.png" 
      alt="imagem de uma cor holográfica"
      title="Transparente"
      sub=" Laminação Brilho"
      />
      <Cards
      src="./images/holografico.png" 
      alt="imagem de uma cor holográfica"
      title="Vinil Branco "
      sub="Vinil Branco "
      />
    </SectionContainer>
  );
};
