import React from "react";
import {
  DepoimentsContainer,
  TitleContainer,
  Zip,
  ZipContainer,
  PartnersContainer, ContainerPrincipal, PartnersTitle
} from "./styles";
import { TemplateText } from "../TemplateText";
import { Carroussel } from "./Carrousel";
export const DepoimentsSection: React.FC = () => {
  return (
    <ContainerPrincipal>
      <DepoimentsContainer>
        <TitleContainer>
          <TemplateText
            Title="Veja oque nossos clientes criaram"
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
            src="./images/zip.svg"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <Zip
            src="./images/zip.svg"
            data-aos="fade-down"
            data-aos-duration="600"
          />
          <Zip
            src="./images/zip.svg"
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
