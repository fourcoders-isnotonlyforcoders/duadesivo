import React from "react";
import styled from "styled-components";
import { TemplateProps } from "./template";
const TemplateContainer = styled.div``;
const TemplatePreTitle = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  margin: 0;
  z-index: 10;
  color: ${(props) => props.theme.colors.white};
`;
const TemplateTitle = styled.h2`
  font-size: 3rem;
  padding: .5rem 11rem 1rem 0;
  width: 100%;
  line-height: 1;
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.theme.colors.yellow};
  text-shadow: 0 0 4px #000;
  ;
  @media screen and (max-width: 908px) {
    font-size: 2.4rem;
    padding: 0.5rem 1rem 1rem 0;
    text-align: left;
  }
`;
export const TemplateText: React.FC<TemplateProps> = ({Title, PreTitle}) => {
  return (
    <TemplateContainer>
      <TemplatePreTitle data-aos="fade-right" data-aos-duration="700">{PreTitle}</TemplatePreTitle>
      <TemplateTitle data-aos="fade-up-right" data-aos-duration="800">{Title}</TemplateTitle>
    </TemplateContainer>
  );
};
