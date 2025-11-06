import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { WA_LINK } from "../../constants/social";
import {
  NavbarContainer,
  NavLogo,
  NavLinks,
  NavUl,
  NavLi,
  NavBtn,
  NavBlur,
  NavStars,
  NavStars2,
  BtnImg,
  BtnImgWrapper,
  HamburgerButton,
  HamburgerLine,
  MobileMenu,
  MobileMenuOverlay,
  MobileNavUl,
  MobileNavLi,
  MobileNavBtn
} from "./styles";
import { Props } from "./types";

export const Navbar: React.FC<Props> = ({ readonly }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    closeMenu();

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 600);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      if (location.pathname === href) {
        return;
      }
      navigate(href);
    }
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <NavbarContainer>
      <NavStars src="/images/bgEstrelado.avif" />
      <NavStars2 src="/images/bgEstrelado.avif" />
      <NavBlur></NavBlur>
      <NavLogo
        src="/images/DuLogo.svg"
        alt="Logo Du Adesivo"
        data-aos="fade-right"
        data-aos-duration="700"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />

      {!readonly && (
        <>
          <NavLinks>
            <NavUl>
              <NavLi data-aos="fade-down" data-aos-duration="600">
                <a href="#servicos" onClick={(e) => handleNavClick("#servicos", e)}>Serviços</a>
              </NavLi>
              <NavLi data-aos="fade-down" data-aos-duration="700">
                <a href="#processo" onClick={(e) => handleNavClick("#processo", e)}>Processo</a>
              </NavLi>
              <NavLi data-aos="fade-down" data-aos-duration="800">
                <a href="#cases" onClick={(e) => handleNavClick("#cases", e)}>Cartelas</a>
              </NavLi>
              <NavLi data-aos="fade-down" data-aos-duration="900">
                <a href="#criar" onClick={(e) => handleNavClick("#criar", e)}>Criar</a>
              </NavLi>
              <NavLi data-aos="fade-down" data-aos-duration="1000">
                <a href="/calculadora" onClick={(e) => handleNavClick("/calculadora", e)}>Calculadora</a>
              </NavLi>
            </NavUl>
          </NavLinks>
        </>
      )}

      <HamburgerButton onClick={toggleMenu} aria-label="Menu">
        <HamburgerLine $isOpen={isMenuOpen} />
        <HamburgerLine $isOpen={isMenuOpen} />
        <HamburgerLine $isOpen={isMenuOpen} />
      </HamburgerButton>

      {isMenuOpen && (
        <>
          <MobileMenuOverlay onClick={closeMenu} />
          <MobileMenu>
            <MobileNavUl>
              <MobileNavLi>
                <a href="#servicos" onClick={(e) => handleNavClick("#servicos", e)}>Serviços</a>
              </MobileNavLi>
              <MobileNavLi>
                <a href="#processo" onClick={(e) => handleNavClick("#processo", e)}>Processo</a>
              </MobileNavLi>
              <MobileNavLi>
                <a href="#cases" onClick={(e) => handleNavClick("#cases", e)}>Cartelas</a>
              </MobileNavLi>
              <MobileNavLi>
                <a href="#criar" onClick={(e) => handleNavClick("#criar", e)}>Criar</a>
              </MobileNavLi>
              <MobileNavLi>
                <a href="/calculadora" onClick={(e) => handleNavClick("/calculadora", e)}>Calculadora</a>
              </MobileNavLi>
            </MobileNavUl>
            <MobileNavBtn onClick={() => {
              window.open(WA_LINK);
              closeMenu();
            }}>
              Garanta o Seu
              <BtnImgWrapper>
                <BtnImg src="icons/wp.svg" alt="WhatsApp Icon" className="default" />
                <BtnImg src="icons/wpY.svg" alt="WhatsApp Icon Hover" className="hover" />
              </BtnImgWrapper>
            </MobileNavBtn>
          </MobileMenu>
        </>
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
