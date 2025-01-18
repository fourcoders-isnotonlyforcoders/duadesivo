import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.offBlack};
  color: ${(props) => props.theme.colors.purple500};
`;
