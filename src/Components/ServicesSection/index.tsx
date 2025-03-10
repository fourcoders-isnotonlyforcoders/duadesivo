import React from "react";
import { Carrousel } from "./carrousel";
import { Carrousel2 } from "./carrousel2";
import {
  ServicesContainer,
  PrincipalBanner,
  PrincipalBannerContainer,
  BgImage,
  BgImage2,
  BgImage3, Button, ButtonContainer, TitleContainer
} from "./styles";
import { TemplateText } from "../TemplateText";
export const ServicesSection: React.FC = () => {
  return (
    <ServicesContainer>
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
        <PrincipalBanner src="/images/bannerHolografico.avif" />
      </PrincipalBannerContainer>
      <Carrousel />
      <Carrousel2 />
      <ButtonContainer>
      <Button>Faça seu pedido agora</Button>
      </ButtonContainer>

    </ServicesContainer>
  );
};
