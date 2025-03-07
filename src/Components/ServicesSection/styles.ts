import styled from "styled-components";

export const ServicesContainer = styled.section`
  height: auto;
  padding: 4rem 0;
  position: relative;
  z-index: 10;
`;

export const PrincipalBannerContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrincipalBanner = styled.img`
  border: 2px solid;
  border-radius: 8px;
  width: 100%;
  object-fit: cover;
  background-size: cover;
`;
export const BgImage = styled.img`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  left: -22px;
  animation: light 7s ease infinite;

  @keyframes light {
  0%{
    opacity: .4;
  }50%{
    filter: brightness(1.2);
    opacity: 1;
  }100%{
    opacity: .4;
  }
}
`;
export const BgImage2 = styled.img`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  bottom: 0;
  animation: light 6s ease infinite;

`;
export const BgImage3 = styled.img`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  bottom: -33px;
  right: 2px;
  animation: light 5s ease infinite;
`;