import styled from "styled-components";

export const PoliticasContainer = styled.div`
  padding: 0 8rem 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.1rem;
`;

export const PoliticasTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  padding: 4rem 0 3rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const PoliticaSubTitle = styled.h3`
  font-size: 2rem;
  padding: 2rem 0 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const PoliticasText = styled.p`
    font-size: 1.7rem;
`;

export const PoliticasStrong = styled.strong`
  color: ${({ theme }) => theme.colors.white};
`;

export const PoliticasReturnButton = styled.div``;

export const PoliticasSessionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const PoliticasList = styled.ul`
  margin-left: 3rem;
  list-style-image: url(./icons/logo.svg);
`;

export const PoliticasListItem = styled.li`
    font-size: 1.4rem;
`;
