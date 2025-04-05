import React from "react";
import {
  DepoimentsContainer,
  TitleContainer,
  Zip,
  ZipContainer,
  PartnersContainer, ContainerPrincipal, PartnersTitle, Selo
} from "./styles";
import { TemplateText } from "../TemplateText";
import { Carroussel } from "./Carrousel";
export const DepoimentsSection: React.FC = () => {
  return (
    <ContainerPrincipal id="cases">
      <DepoimentsContainer>
        <TitleContainer>
          <TemplateText
            Title="Inspire-se com as Mega Cartelas que criamos para você!"
            PreTitle="CARTELAS TEMÁTICAS"
          />
        </TitleContainer>
        <ZipContainer>
          <Zip
            src="./images/14.png"
            data-aos="fade-right"
            data-aos-duration="600"
          />
          <Zip
            src="./images/8.png"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <Zip
            src="./images/9.png"
            data-aos="fade-down"
            data-aos-duration="600"
          />
          <Zip
            src="./images/10.png"
            data-aos="fade-left"
            data-aos-duration="600"
          />
          <Selo src="images/selo.svg" className="selo"/>
        </ZipContainer>
        <ZipContainer>
          <Zip
            src="./images/11.png"
            data-aos="fade-right"
            data-aos-duration="600"
          />
          <Zip
            src="./images/12.png"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <Zip
            src="./images/13.png"
            data-aos="fade-down"
            data-aos-duration="600"
          />
          <Zip
            src="./images/7.png"
            data-aos="fade-left"
            data-aos-duration="600"
          />
        </ZipContainer>
      </DepoimentsContainer>
      <PartnersContainer>
        <PartnersTitle>
        <TemplateText
          PreTitle="PARCEIROS"
          Title="Mais do que um adesivo, uma forma de se expressar..."
        />
        </PartnersTitle>

        <Carroussel/>
      </PartnersContainer>
    </ContainerPrincipal>
  );
};
