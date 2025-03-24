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
            Title="Inspire-se com os adesivos personalizados dos nossos clientes!"
            PreTitle="DEPOIMENTOS"
          />
        </TitleContainer>
        <ZipContainer>
          <Zip
            src="./images/zip.svg"
            data-aos="fade-right"
            data-aos-duration="600"
          />
          <Zip
            src="./images/zip6.svg"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <Zip
            src="./images/zip7.svg"
            data-aos="fade-down"
            data-aos-duration="600"
          />
          <Zip
            src="./images/zip8.svg"
            data-aos="fade-left"
            data-aos-duration="600"
          />
          <Selo src="images/selo.svg" className="selo"/>
        </ZipContainer>
        <ZipContainer>
          <Zip
            src="./images/zip2.svg"
            data-aos="fade-right"
            data-aos-duration="600"
          />
          <Zip
            src="./images/zip3.svg"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <Zip
            src="./images/zip4.svg"
            data-aos="fade-down"
            data-aos-duration="600"
          />
          <Zip
            src="./images/zip5.svg"
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
