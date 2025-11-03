import styled from "styled-components";

export const SectionContainer = styled.section`
  margin: 0 auto;
  height: auto;
  box-sizing: border-box;
  padding: 4rem 2rem;
  @media screen and (max-width: 906px) {
    padding: 2rem 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  @media screen and (max-width: 906px) {
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoContainer = styled.div`
  width: 60%;
  margin-bottom: 3rem;
  @media screen and (max-width: 906px) {
    width: 90%;
  }
`;

export const CardsContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40%;
  padding: 1rem;
  @media screen and (max-width: 906px) {
    width: 90%;
    box-sizing: border-box;
  }
`;

export const CalculatorContainer = styled.div`
  width: 60%;
  padding: 1rem 0;
  @media screen and (max-width: 906px) {
    width: 100%;
  }
`;

export const CalculatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  width: auto;
  margin-bottom: 2rem;
`;

export const CalculatorTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  color: ${(props) => props.theme.colors.yellow};
  @media screen and (max-width:400px){
    text-align: center;
    font-size: 2rem;
  }
`;

export const CalculatorSubTitle = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  color: ${(props) => props.theme.colors.white2};

  @media screen and (max-width:480px){
    padding: 0 2rem;
    font-size: 1.4rem;
  }
`;

export const InputField = styled.input`
  box-sizing: border-box;
  font-size: 1.7rem;
  padding: 1rem;
  width: 100%;
  background-color: transparent;
  border: none; 
  border-bottom: 1px solid #f2f2f2; 
  color: ${(props) => props.theme.colors.white2};
  outline: none; 
  
  &::placeholder{
    color: ${(props) => props.theme.colors.white2};
    opacity: 0.7;
  }
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const SelectField = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  border: 1px solid #f2f2f2;
  padding: 2rem 1.5rem;
  color: #f2f2f2;
  border-radius: 8px;
  font-size: 1.7rem;
  margin-bottom: 2rem;
`;

export const Options = styled.option`
  background-color: black;
  color: #fff;
`;

export const CalculateButton = styled.button`
  border: 2px solid #000;
  color: #000;
  font-weight: bolder;
  box-shadow: 0 0 4px 2px #000;
  width: 100%;
  font-size: 2.4rem;
  padding: 1.6rem 4rem;
  text-align: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.yellow};
  margin-top: 1rem;
  cursor: pointer;
  height: fit-content;
  transition: filter 0.4s, color 0.4s, border 0.4s, box-shadow 0.4s, background 0.4s, opacity 0.5s,
    transform 0.5s !important;
  &:hover{
    transform: scale(1.02);
    box-shadow: 0 0 7px 2px rgba(254, 165, 0, 0.22);
    filter: brightness(1);
    background: url(/images/bgEstrelado.avif);
    border: 2px solid ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.yellow};
  }
  animation: pulse4 4s infinite;

  @keyframes pulse4{
    0%{
      transform: scale(1);
    }50%{
      transform: scale(1.04);
      box-shadow: 0 0 11px 1px rgba(254, 165, 0, 0.22);
    }100%{
      transform: scale(1);
    }
  }
`;

export const ResultContainer = styled.div`
  margin-top: 3rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(254, 165, 0, 0.1) 0%, rgba(254, 165, 0, 0.05) 100%);
  border: 2px solid ${(props) => props.theme.colors.yellow};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export const ResultTitle = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.yellow};
  margin: 0;
  text-align: center;
`;

export const ResultValue = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.yellow};
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const ResultDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding-top: 1rem;
  border-top: 1px solid rgba(254, 165, 0, 0.3);
`;

export const ResultDetailItem = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white2};
  display: flex;
  justify-content: space-between;
  
  strong {
    color: ${(props) => props.theme.colors.white};
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ErrorMessage = styled.div`
  padding: 2rem;
  background-color: rgba(233, 55, 0, 0.1);
  border: 2px solid ${(props) => props.theme.colors.orange};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.orange};
  font-size: 1.6rem;
  text-align: center;
  font-weight: 500;
`;

export const WAButton = styled.button`
  margin-top: 1rem;
  padding: 1.5rem 2rem;
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: center;
  transition: all 0.3s ease;
  width: 100%;
  
  span {
    flex: 1;
    text-align: center;
  }
  
  &:hover {
    background-color: #128c7e;
    transform: scale(1.02);
  }
  
  @media screen and (max-width: 680px) {
    font-size: 1.4rem;
    padding: 1.2rem 1.5rem;
    gap: 0.6rem;
    
    span {
      font-size: 1.3rem;
    }
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    padding: 1rem 1.2rem;
    flex-wrap: wrap;
    
    span {
      width: 100%;
      font-size: 1.2rem;
      margin-bottom: 0.3rem;
    }
  }
`;

export const BtnImgWrapper = styled.div`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  
  .default {
    display: block;
  }
  
  .hover {
    display: none;
  }
  
  ${WAButton}:hover & {
    .default {
      display: none;
    }
    
    .hover {
      display: block;
    }
  }
  
  @media screen and (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const BtnImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

