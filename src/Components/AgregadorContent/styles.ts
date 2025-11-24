import styled from "styled-components";

export const AgregadorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: clamp(3.5rem, 8vh, 6rem) clamp(2rem, 6vw, 4rem);
  max-width: 640px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  flex: 1;
  min-height: calc(100vh - 100px);
  box-sizing: border-box;
  overflow: hidden; /* evita scroll lateral no mobile */
  margin-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(/images/bgEstrelado.avif);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
    z-index: 0;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 906px) {
    padding: clamp(3.5rem, 12vh, 5.5rem) clamp(1.6rem, 7vw, 3rem);
    min-height: calc(100vh - 80px);
  }

  @media (max-width: 480px) {
    padding: clamp(3rem, 18vh, 4.5rem) clamp(1.8rem, 8vw, 2.4rem);
    min-height: calc(100vh - 80px);
  }
`;

export const AgregadorTitle = styled.h1`
  font-size: 3.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.yellow};
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
  word-wrap: break-word;

  @media (max-width: 906px) {
    font-size: 3.2rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
`;

export const AgregadorSubtitle = styled.p`
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.white2};
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
  line-height: 1.5;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 906px) {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    padding: 0;
    line-height: 1.4;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 420px;

  @media (max-width: 906px) {
    max-width: 360px;
    gap: 1.5rem;
    padding: 0;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    width: 100%;
  }
`;

export const LinkButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border: 2px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 0.8rem;
  padding: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  box-shadow: 0 0 4px 2px #000;
  transition: all 0.4s ease;
  cursor: pointer;
  width: 100%;
  max-width: none;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 7px 2px rgba(254, 165, 0, 0.22);
    background: url(/images/bgEstrelado.avif);
    background-size: cover;
    background-position: center;
    border: 2px solid ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.yellow};
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 906px) {
    font-size: 1.6rem;
    padding: 1.4rem 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 1.3rem 1.3rem;
    width: 90%;
    border-radius: 0.6rem;
  }
`;
