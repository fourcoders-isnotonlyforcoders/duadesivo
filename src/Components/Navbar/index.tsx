import {
  NavbarContainer,
  NavLogo,
  NavLinks,
  NavUl,
  NavLi,
  NavBtn, NavBlur, NavStars, NavStars2
} from "./styles";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer data-aos="fade-up" data-aos-duration="500">
      <NavStars src="/images/bgEstrelado.avif"/>
      <NavStars2 src="/images/bgEstrelado.avif"/>
      <NavBlur></NavBlur>
      <NavLogo src="/images/DuLogo.svg" alt="Logo Du Adesivo" />
      <NavLinks>
        <NavUl>
          <NavLi>
            <a href="/">Serviços</a>
          </NavLi>
          <NavLi>
            <a href="/">Processo</a>
          </NavLi>
          <NavLi>
            <a href="/">Cases</a>
          </NavLi>
          <NavLi>
            <a href="/">Criar</a>
          </NavLi>
        </NavUl>
      </NavLinks>
      <NavBtn>Garanta o Seu</NavBtn>
    </NavbarContainer>
  );
};
