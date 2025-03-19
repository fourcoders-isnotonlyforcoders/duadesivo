import styled from "styled-components";
export const FirstContainer = styled.section`
  height: auto;
  min-height: 70vh;
  padding: 10rem 0 1rem 0;
  position: relative;
  @media screen and (max-width: 906px) {
  min-height: 30vh;
}
`;

export const InfosContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;

  margin: 0;
  letter-spacing: -1px;
  @media screen and (max-width: 600px) {
  width: 100%;
  gap: 1rem;
}
  @media screen and (min-width: 601px) and (max-width: 1024px){
  width: 70%;
  gap: 1rem;
}
`;

export const PrincipalText = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.yellow};
  margin: 0;
  line-height: 1.1;
  padding: 1rem 8rem 1rem 0;
  text-shadow: 0px 5px 4px #000;
  @media screen and (max-width: 906px) {
  font-size: 3.3rem;
  padding: 0;
}
  @media screen and (max-width: 480px) {
  font-size: 3rem;
  padding: 0;
}
`;

export const SubTitle = styled.p`
  font-size: 2.2rem;
  width: 50%;
  font-weight: 400;
  line-height: 1.1;
  padding: 0 2rem 2rem 0;
  color: ${(props) => props.theme.colors.white2};
  margin: 0;
  text-shadow: 0px 5px 4px #000;
  @media screen and (max-width: 906px) {
  width: 100%;
  font-size: 2rem;
}
@media screen and (max-width: 480px) {
  font-size: 2rem;
  padding: 1rem 0;
  margin-bottom: 2rem;
}
`;

export const Button = styled.button`
  all: unset;
  border: 2px solid #000;
  color: #000;
  font-weight: bolder;
  box-shadow: 0 0 4px 2px #000;
  width: 40%;
  font-size: 2.2rem;
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
  @media screen and (max-width: 906px) {
  padding: 1.6rem 1rem;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}
`;

export const SubStrong = styled.strong`
  
`;

export const BgPascoa = styled.img`
  position: absolute;
  right: -70px;
  top: -50px;
  width: auto;
  height: 540px;
  pointer-events: none;
  animation: pulseImage 11s infinite;

  @keyframes pulseImage {
    0%{
      opacity: .7;
    }25%{
      transform: translateY(-22px);
      filter: brightness(1.2);
      opacity: 1;
    }
    50%{
      filter: brightness(1.2);
      opacity: 1;
      transform: translateX(-22px);
    }
    100%{
      opacity: .7;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 1024px) {
  height: 300px;
  top: 2px;
  right: -44px;
}
  @media screen and (max-width: 600px) {
  height: 300px;
  top: 2px;
  right: -44px;
  opacity: .3;
}
`;