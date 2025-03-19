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
  height: auto;
  width: 100%;
  min-height: 90vh;
  padding: 4rem 0;
  flex-wrap: wrap;
  display: flex;
  gap: 2.2rem;
  justify-content: center;
  @media screen and (max-width: 908px) {
    min-height: 100vh;
  }
`;

export const Photos = styled.div`
  border: 2px solid;
  border-radius: 8px;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    border: 2px solid ${(props) => props.theme.colors.yellow};
  }

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    background-size: cover;
    transition: opacity 0.3s ease;
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
  padding: 1.6rem 2rem;
  text-align: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.yellow};
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 7px 2px rgba(254, 165, 0, 0.22);
    filter: brightness(1);
    background: url(/images/bgEstrelado.avif);
    border: 2px solid ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.yellow};
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
@media screen and (max-width: 908px) {
    width: 100%;
    border: 1px solid;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
    flex-direction: column;
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
  @media screen and (max-width: 908px) {
    height: 300px;
    width: 100%;
    width: auto;
    padding: 1rem;
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
`;
export const Separator = styled.div`
  height: 150px;
  background-color: ${(props) => props.theme.colors.white2};
  width: 1px;
  @media screen and (max-width: 908px) {
    width: 70%;
    height: 1px;
  }
`;