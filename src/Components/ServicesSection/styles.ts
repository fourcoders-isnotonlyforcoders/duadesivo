import styled from "styled-components";

export const ServicesContainer = styled.section`
  height: auto;
  padding: 4rem 0;
  position: relative;
  z-index: 10;
`;

export const PrincipalBannerContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrincipalBanner = styled.img`
  border: 2px solid;
  border-radius: 8px;
  width: 100%;
  object-fit: cover;
  background-size: cover;
`;
export const BgImage = styled.img`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  left: -22px;
  animation: light 7s ease infinite;

  @keyframes light {
  0%{
    opacity: .4;
  }50%{
    filter: brightness(1.2);
    opacity: 1;
  }100%{
    opacity: .4;
  }
}
`;
export const BgImage2 = styled.img`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  top: 444px;
  animation: light 6s ease infinite;

`;
export const BgImage3 = styled.img`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  top: 444px;
  right: 11px;
  animation: light 5s ease infinite;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;
export const Button = styled.button`
  all: unset;
  border: 2px solid #000;
  color: #000;
  font-weight: bolder;
  box-shadow: 0 0 4px 2px #000;
  width: 40%;
  font-size: 2.4rem;
  padding: 1.6rem 4rem;
  text-align: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.yellow};
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover{
    transform: scale(1.02);
    box-shadow: 0 0 7px 2px rgba(254, 165, 0, 0.22);
    filter: brightness(1);
    background: url(/images/bgEstrelado.avif);
    border: 2px solid ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.yellow};
  }
`;
