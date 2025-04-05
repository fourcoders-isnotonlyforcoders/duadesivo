import { WA_LINK } from "../../constants/social";
import {
  NavbarContainer,
  NavLogo,
  NavLinks,
  NavUl,
  NavLi,
  NavBtn, NavBlur, NavStars, NavStars2, BtnImg,BtnImgWrapper
} from "./styles";
import { Props } from "./types";

export const Navbar: React.FC<Props> = ({ readonly }) => {
  return (
    <NavbarContainer >
      <NavStars src="/images/bgEstrelado.avif"/>
      <NavStars2 src="/images/bgEstrelado.avif"/>
      <NavBlur></NavBlur>
      <NavLogo src="/images/DuLogo.svg" alt="Logo Du Adesivo" data-aos="fade-right" data-aos-duration="700"/>
      { !readonly && (
        <NavLinks>
          <NavUl>
            <NavLi data-aos="fade-down" data-aos-duration="600">
              <a href="#servicos">Serviços</a>
            </NavLi>
            <NavLi data-aos="fade-down" data-aos-duration="700">
              <a href="#processo">Processo</a>
            </NavLi>
            <NavLi data-aos="fade-down" data-aos-duration="800">
              <a href="#cases">Cartelas</a>
            </NavLi>
            <NavLi data-aos="fade-down" data-aos-duration="900">
              <a href="#criar">Criar</a>
            </NavLi>
          </NavUl>
        </NavLinks>
      )}
    <NavBtn onClick={() => window.open(WA_LINK)} data-aos="fade-left" data-aos-duration="700">
      Garanta o Seu
      <BtnImgWrapper>
        <BtnImg src="icons/wp.svg" alt="WhatsApp Icon" className="default" />
        <BtnImg src="icons/wpY.svg" alt="WhatsApp Icon Hover" className="hover" />
      </BtnImgWrapper>
    </NavBtn>
    </NavbarContainer>
  );
};
