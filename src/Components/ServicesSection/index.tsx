import React from "react";
import { Carrousel } from "./carrousel";
import { Carrousel2 } from "./carrousel2";
import {
  ServicesContainer,
  PrincipalBanner,
  PrincipalBannerContainer,
  BgImage,
  BgImage2,
  BgImage3,
  Button,
  ButtonContainer,
  TitleContainer, BtnImg, BtnImgWrapper
} from "./styles";
import { TemplateText } from "../TemplateText";
import { WA_LINK } from "../../constants/social";
export const ServicesSection: React.FC = () => {
  return (
    <ServicesContainer id="servicos">
      <BgImage src="/images/bgEstrelado.avif" />
      <BgImage2 src="/images/bgEstrelado.avif" />
      <BgImage3 src="/images/bgEstrelado.avif" />
      <TitleContainer>
        <TemplateText
          PreTitle="NOSSOS SERVIÇOS"
          Title="Criamos adesivos personalizados do jeito que você quiser!"
        />
      </TitleContainer>

      <PrincipalBannerContainer data-aos="zoom-in-up" data-aos-duration="700">
        <PrincipalBanner src="/images/bannerHolografico.png" />
      </PrincipalBannerContainer>
      <Carrousel />
      <Carrousel2 />
      <ButtonContainer>
        <Button onClick={() => window.open(WA_LINK)}>
          Faça seu pedido agora{" "}
          <BtnImgWrapper>
            <BtnImg
              src="icons/wp.svg"
              alt="WhatsApp Icon"
              className="default"
            />
            <BtnImg
              src="icons/wpY.svg"
              alt="WhatsApp Icon Hover"
              className="hover"
            />
          </BtnImgWrapper>
        </Button>
      </ButtonContainer>
    </ServicesContainer>
  );
};
