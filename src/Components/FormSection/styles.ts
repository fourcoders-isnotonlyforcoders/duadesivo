import styled from "styled-components";

export const SectionContainer = styled.section`
  margin: 0 auto;
  height: auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;
export const InfoContainer = styled.div`
  width: 60%;
`;

export const CardsContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40%;
  padding: 1rem;
`;

export const FormContainer = styled.div`
  width: 60%;
  padding: 1rem 0;
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  width: auto;
`;
export const FormTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0;
  color: ${(props) => props.theme.colors.yellow};
`;

export const FormSubTitle = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0;
  color: ${(props) => props.theme.colors.white2};
`;

export const Form = styled.form`
  padding: 2rem ;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem; 
  justify-content: center;
  padding: 1rem 0;
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
`;

export const Options = styled.option`
  background-color: black;
`;

export const Submit = styled.input`
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
  transition: all 0.3s ease;
  &:hover{
    transform: scale(1.02);
    box-shadow: 0 0 7px 2px rgba(254, 165, 0, 0.22);
    filter: brightness(1);
    background: url(/images/bgEstrelado.avif);
    border: 2px solid ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.yellow};
  }
  animation: pulse 4s infinite;

  @keyframes pulse{
    0%{
      transform: scale(1);
    }50%{
      transform: scale(1.04);
    }100%{
      transform: scale(1);
    }
  }
`;