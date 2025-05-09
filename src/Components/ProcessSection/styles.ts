import styled from "styled-components";

export const ProcessContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 70%;
  @media screen and (max-width: 908px) {
    width: 100%;
  }
`;

export const PhotosContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 4rem 0.4rem;
  flex-wrap: wrap;
  display: flex;
  gap: 2.4rem;
  justify-content: center;
  @media screen and (max-width: 908px) {
    min-height: 100vh;
  }
`;

export const Photos = styled.div`
  height: 300px;
  width: 300px;
  border: 2px solid #000;
  border-radius: 8px;

  transition: 0.3s ease !important;
  cursor: inherit;
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.yellow};
    box-shadow: 0 0 14px 2px #000;
  }
`;

export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-size: cover;
  transition: opacity 0.3s ease !important;
  border-radius: 8px;
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
export const Button = styled.button`
  all: unset;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .4rem;
  color: #000;
  font-weight: bolder;
  box-shadow: 0 0 4px 2px #000;
  width: 40%;
  font-size: 2.2rem;
  padding: 1.6rem 2rem;
  text-align: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.yellow};
  margin: 0 auto;
  cursor: pointer;
  transition: background 0.4s, color 0.4s, border 0.4s, box-shadow 0.4s,
    opacity 0.7s, transform 0.7s !important;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 7px 2px rgba(254, 165, 0, 0.22);
    filter: brightness(1);
    background: url(/images/bgEstrelado.avif);
    border: 2px solid ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.yellow};
    ${BtnImg}.default {
      opacity: 0;
    }
    ${BtnImg}.hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 908px) {
    box-sizing: border-box;
    width: 100%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  align-items: center;
  margin: 0 auto;
  gap: 2rem;
  margin-bottom: 4rem;
  @media screen and (max-width: 780px) {
    width: 100%;
    border: 1px solid;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
    flex-direction: column;
  }
  @media screen and (min-width: 790px) and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 8rem;
  }
`;
export const Cards = styled.div`
  padding: 2rem 1rem;
  height: 250px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 790px) {
    height: 300px;
    width: 100%;
    width: auto;
    padding: 1rem;
  }
  @media screen and (min-width: 800px) and (max-width: 1024px) {
    height: 300px;
    width: 33%;
    padding: 2rem 0;
  }
`;

export const CardIcon = styled.img`
  height: 33px;
  width: auto;
  object-fit: cover;
  @media screen and (max-width: 908px) {
    height: 44px;
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.8rem;
  margin: 0;
  padding: 2rem 0;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 908px) {
    font-size: 2rem;
  }
`;

export const CardSub = styled.p`
  font-size: 1.4rem;
  margin: 0;
  color: ${(props) => props.theme.colors.white2};
  font-weight: 300;
  @media screen and (min-width: 500px) and (max-width: 790px) {
    padding: 0 10rem;
  }
  @media screen and (min-width: 790px) and (max-width: 1024px) {
    padding: 0 4rem;
  }
`;
export const Separator = styled.div`
  height: 150px;
  background-color: ${(props) => props.theme.colors.white2};
  width: 1px;
  @media screen and (max-width: 908px) {
    width: 70%;
    height: 1px;
  }
  @media screen and (min-width: 790px) and (max-width: 1024px) {
    width: 1px;
    height: 222px;
  }
`;
