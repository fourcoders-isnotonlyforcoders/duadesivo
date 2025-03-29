import styled from "styled-components";

export const TermosContainer = styled.div`
  padding: 0 8rem 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.1rem;
`;

export const TermosTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  padding: 4rem 0 3rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const TermosubTitle = styled.h3`
  font-size: 2rem;
  padding: 2rem 0 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const TermosText = styled.p`
font-size: 1.7rem;
`;

export const TermosStrong = styled.strong`
  color: ${({ theme }) => theme.colors.white};
`;

export const TermosReturnButton = styled.div`
`;

export const TermosSessionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const TermosList = styled.ul`
  margin-left: 3rem;
  list-style-image: url(./icons/logo.svg);
`;

export const TermosListItem = styled.li`
font-size: 1.4rem;
`;
