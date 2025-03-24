import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.background};
  width: 100%; 
  margin: 0 auto;
  height: 100%;
`;
