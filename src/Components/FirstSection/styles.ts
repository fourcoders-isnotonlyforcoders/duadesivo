import styled from "styled-components";
export const FirstContainer = styled.section`
  height: 80vh;
  border: 1px solid;
`;

export const InfosContainer = styled.div`
  border: 1px solid green;
  width: 77%;
  height: 100%;
  display: flex;
  flex-direction: column;

`;

export const PrincipalText = styled.h1`
  font-size: 5rem;
  color: ${(props) => props.theme.colors.yellow};
`;

export const SubTitle = styled.p`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.white2};
`;

export const Button = styled.button`
  all: unset;
`;

export const SubStrong = styled.strong`
  
`;