import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Space Grotesk", sans-serif;
  align-items: center;
  height: 100px;
  padding: 0 7rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 9999;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 906px) {
    padding: 0 2rem;
    height: auto;
    min-height: 80px;
    overflow: hidden;
  }

  @media (max-width: 780px) {
    padding: 0 1.5rem;
    overflow: hidden;
  }
`;
export const NavLogo = styled.img`
  height: 90%;
  width: auto;
  object-fit: cover;

  @media (max-width: 906px) {
    height: 70px;
  }

  @media (max-width: 480px) {
    height: 60px;
  }
`;
export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 906px) {
    display: none;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2.2rem;
  padding: 1rem 0.5rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }
`;

export const NavLi = styled.li`
  list-style: none;
  font-size: 1.8rem;
  font-weight: 500;
  transition: transform 0.2s ease-in-out, text-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out, opacity 0.7s, transform 0.7s !important;

  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }

  a {
    text-shadow: 0 0 0 black;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
  &:hover a {
    text-shadow: 0 0 5px ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.yellow};
  }
`;

export const BtnImgWrapper = styled.div`
  position: relative;
  height: 2.2rem;
  width: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &.default {
    opacity: 1;
  }

  &.hover {
    opacity: 0;
  }
`;

export const NavBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: .4rem;
  border: 2px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 0.8rem;
  padding: 1rem 4rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  box-shadow: 0 0 4px 1px #111;
  transition: background-color 0.4s, color 0.4s, border 0.4s, box-shadow 0.4s,
    opacity 0.7s, transform 0.7s !important;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.yellow};
    background-color: rgba(17, 17, 17, 0.15);
    box-shadow: 0 0 22px 2px rgba(254, 165, 0, 0.22);

    ${BtnImg}.default {
      opacity: 0;
    }
    ${BtnImg}.hover {
      opacity: 1;
    }
  }

  @media (max-width: 906px) {
    display: none;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10001;

  @media (max-width: 906px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }
`;

export const HamburgerLine = styled.span<{ $isOpen: boolean }>`
  width: 2.5rem;
  height: 0.3rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  &:first-child {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(20px)' : 'translateX(0)'};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

export const MobileMenuOverlay = styled.div`
  display: none;

  @media (max-width: 906px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MobileMenu = styled.nav`
  display: none;

  @media (max-width: 906px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    background: linear-gradient(135deg, rgba(17, 17, 17, 0.98) 0%, rgba(0, 0, 0, 0.98) 100%);
    backdrop-filter: blur(10px);
    z-index: 10000;
    padding: 6rem 2rem 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
    animation: slideIn 0.3s ease;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    justify-content: space-between;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const MobileNavUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  justify-content: flex-start;
`;

export const MobileNavLi = styled.li`
  list-style: none;
  font-size: 1.8rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;

  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    display: block;
    padding: 0.5rem 0;

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
`;

export const MobileNavBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border: 2px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 0.8rem;
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  box-shadow: 0 0 4px 1px #111;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 2rem;
  width: 90%;
  align-self: center;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.yellow};
    background-color: rgba(17, 17, 17, 0.15);
    box-shadow: 0 0 22px 2px rgba(254, 165, 0, 0.22);
  }
`;


export const NavBlur = styled.div`
  position: absolute;
  height: 150px;
  width: 333px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.yellow};
  filter: blur(55px);
  opacity: 0.1;
  z-index: -1;
  top: -88px;
  left: 33%;
`;
export const NavStars = styled.img`
  position: absolute;
  left: -100px;
  top: 0;
  z-index: -1;
  opacity: 0.4;
  object-fit: cover;
  pointer-events: none;
  animation: light 5s ease infinite;

  @media (max-width: 906px) {
    display: none;
  }

  @keyframes light {
    0% {
      opacity: 0.4;
    }
    50% {
      filter: brightness(1.2);
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
`;
export const NavStars2 = styled.img`
  position: absolute;
  right: -100px;
  z-index: -1;
  opacity: 0.5;
  object-fit: cover;
  pointer-events: none;
  animation: light 7s ease infinite;

  @media (max-width: 906px) {
    display: none;
  }

  @keyframes light {
    0% {
      opacity: 0.4;
    }
    50% {
      filter: brightness(1.2);
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
`;
