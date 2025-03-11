import styled from "styled-components";

export const ContainerPrincipal = styled.section`
overflow: hidden;
  padding: 4rem 0.5rem;
`;
export const DepoimentsContainer = styled.div`
  height: auto;
`;
export const TitleContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const ZipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0;

  &:has(img:hover) img:not(:hover) {
    filter: blur(5px);
    opacity: 0.4;
  }
`;

export const Zip = styled.img`
  height: auto;
  object-fit: cover;
  width: 20%;
  margin: 0;
  opacity: 0.8;
  transition: 0.3s ease;
  border-radius: 4px;

  &:hover {
    transform: scale(1.1) !important;
    opacity: 1;
    filter: brightness(1.1);
    box-shadow: 0 0 44px 4px rgba(254, 165, 0, 0.77);
  }
`;
export const PartnersContainer = styled.div`
  display: flex;
  height: auto;
  padding: 7rem 0;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
export const PartnersTitle = styled.div`
  margin: 0;
  width: 80%;
`;
