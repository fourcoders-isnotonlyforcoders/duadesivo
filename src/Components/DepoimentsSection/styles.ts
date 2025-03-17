import styled from "styled-components";

export const ContainerPrincipal = styled.section`
overflow: hidden;
  padding: 4rem 0.5rem;
`;
export const DepoimentsContainer = styled.div`
  height: auto;
`;
export const TitleContainer = styled.div`
  width: 60%;
`;
export const ZipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0;
position: relative;
  &:has(img:hover) img:not(:hover,.selo) {
    filter: blur(5px);
    opacity: 0.4;
  }
`;

export const Selo = styled.img`
  position: absolute;
  left: 4px;
  top: -10px;
  width: 14rem;
  object-fit: cover;
  pointer-events: none; 
`;
export const Zip = styled.img`
  height: auto;
  object-fit: cover;
  width: 20%;
  margin: 0;
  opacity: 0.8;
  transition: 0.3s ease;
  border-radius: 4px;
  box-shadow: 0 0 22px 2px rgba(254, 165, 0, 0.11);

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
  padding: 7rem 0 7rem 2rem;
  align-items: center;
  justify-content:center;
  gap: 1rem;
`;
export const PartnersTitle = styled.div`
  width: 100%;
`;
