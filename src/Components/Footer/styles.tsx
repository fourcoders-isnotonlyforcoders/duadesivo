import styled from "styled-components";
export const FooterContainer = styled.div`
  padding:  4rem 7rem 2rem 7rem;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  box-sizing: border-box;
  flex-grow: 1;
  position: relative;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(212, 212, 212, 0.44) 50%,
      transparent 100%
    );
  }
  @media screen and (max-width: 906px) {
    padding: 2rem ;
    margin: 0 auto;
    width: 100%;
  }
`;


export const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 7rem;
  padding: 2rem 1rem;
  @media screen and (max-width: 906px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  @media screen and (max-width: 906px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 906px) {
    justify-content: center;
    gap: 1rem;
  }
`;
export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Contact = styled.p`
  font-size: 1.4rem;
  margin: 0;
  color: ${(props) => props.theme.colors.white2};
  font-weight: 400;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.theme.colors.white};
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 906px) {
    justify-content: center;
    gap: 1rem;
  }
`;

export const LinksContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const Link = styled.a`
  color: ${(props) => props.theme.colors.white2};
  filter: brightness(1);
  transition: 0.3s ease;
  &:hover {
    opacity: 0.7;
    filter: brightness(0.7);
  }
`;
export const Logo = styled.img`
  width: 2.5rem;
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;
export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  @media screen and (max-width: 906px) {
    justify-content: center;
    gap: 1rem;
  }
`;
export const HoursInfo = styled.p`
  font-size: 1.4rem;
  padding: 1rem;
  margin: 0;
  color: ${(props) => props.theme.colors.white2};
  font-weight: 400;
`;
export const Map = styled.div`
  width: 40%;
  border-radius: 8px;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
  }
  @media screen and (max-width: 906px) {
    width: 100%;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  @media screen and (max-width: 906px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 60%;
  gap: 1rem;
  @media screen and (max-width: 906px) {
    width: 100%;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;
export const LogoDu = styled.img`
  width: 8rem;
  height: auto;
  object-fit: cover;
  @media screen and (max-width: 906px) {
    width: 30;
    object-fit: cover;
    height: 30%;
    gap: 1rem;
  }
`;

export const DadosContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  @media screen and (max-width: 906px) {
    padding: 2rem 0;
    width: 100%;
  }
`;
export const Dado = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white2};
  margin: 0;
  @media screen and (max-width: 906px) {
    font-size: 1.2rem;
  }
`;
export const Copy = styled.a`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.white2};
  transform: translate(0);
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;
export const SecurityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 40%;
`;

export const Security = styled.img`
  width: 12rem;
  height: auto;
  object-fit: cover;
`;
export const Strong = styled.strong`
  color: #ed145b;
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-5px) !important;
  }
`;

export const ThirdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;
  width: 100%;
  padding: 1rem;
  @media screen and (max-width: 906px) {
    padding: 1rem;
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Privacity = styled.a`
  margin: 0;
  color: ${(props) => props.theme.colors.white2} !important;
  font-weight: 200;
  font-size: 0.9rem;
  transition: 0.3s ease;
  padding: 2rem 0;
  transform: translate(0);
  &:hover {
    opacity: 0.7;
    filter: brightness(0.7);
    transform: translateX(-5px);
  }
  @media screen and (max-width: 708px) {
    font-size: .8rem;
  }
`;
export const Term = styled.a`
  margin: 0;
  color: ${(props) => props.theme.colors.white2};
  font-weight: 200;
  font-size: 0.9rem;
  transition: 0.3s ease;
  transform: translate(0);
  &:hover {
    opacity: 0.7;
    filter: brightness(0.7);
    transform: translateX(5px);
  }
  @media screen and (max-width: 708px) {
    font-size: .8rem;
  }
`;

export const BgImage = styled.img`
  /* position: absolute;
  left: -111px;
  opacity: 0.7;
  z-index: -1;
  pointer-events: none; */
`;
