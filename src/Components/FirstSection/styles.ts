import styled from "styled-components";
export const FirstContainer = styled.section`
  height: auto;
  min-height: 70vh;
  padding: 10rem 0 1rem 0;
`;

export const InfosContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  letter-spacing: -1px;
`;

export const PrincipalText = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.yellow};
  margin: 0;
  line-height: 1.1;
  padding: 1rem 7rem 1rem 0;
  text-shadow: 0px 5px 4px #000;
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
`;

export const SubStrong = styled.strong`
  
`;