import styled from "styled-components";

export const ContainerPrincipal = styled.section`
  overflow: hidden;
  padding: 4rem 0.5rem;
  @media screen and (max-width: 906px) {
}
`;
export const DepoimentsContainer = styled.div`
  height: auto;
  @media screen and (max-width: 906px) {
}
`;
export const TitleContainer = styled.div`
  width:50%;
  @media screen and (max-width: 906px) {
  width: 100%;
}
`;
export const ZipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  position: relative;
  &:has(img:hover) img:not(:hover, .selo) {
    filter: blur(5px);
    opacity: 0.4;
  }
  @media screen and (max-width: 906px) {
    flex-wrap: wrap;
}
`;

export const Selo = styled.img`
  position: absolute;
  left: 4px;
  top: -10px;
  width: 14rem;
  object-fit: cover;
  pointer-events: none;
  @media screen and (max-width: 480px) {
  width: 9.5rem;
  left: -15px;
  pointer-events: none;
}
@media screen and (min-width: 481px) and (max-width: 600px) {
    width: 12rem;
    left: -22px;
    
}
@media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 13rem;
    left: -11px;
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
  box-shadow: 0 0 22px 2px rgba(254, 165, 0, 0.11);

  &:hover {
    transform: scale(1.1) !important;
    opacity: 1;
    filter: brightness(1.1);
    box-shadow: 0 0 44px 4px rgba(254, 165, 0, 0.77);
  }
  @media screen and (max-width: 906px) {
  width: 40%;
}
`;
export const PartnersContainer = styled.div`
  display: flex;
  height: auto;
  padding: 11rem 0 11rem 2rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media screen and (max-width: 708px){
    padding: 5rem 0;
    flex-direction: column;
  }
`;
export const PartnersTitle = styled.div`
  width: 100%;
`;
