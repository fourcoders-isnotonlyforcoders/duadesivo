import { useState } from "react";
import {
  ProcessContainer,
  TitleContainer,
  PhotosContainer,
  Photos,
  Button,CardsContainer, Separator,
  PhotoImage
} from "./styles";
import { Process } from "../../constants/process";
import { TemplateText } from "../TemplateText";
import { CardTemplate } from "./card";
import { WA_LINK } from "../../constants/social";
export const ProcessSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ProcessContainer id="processo">
      <TitleContainer>
        <TemplateText
          PreTitle="NOSSO PROCESSO"
          Title="Do design à impressão, cuidamos de tudo para você ter adesivos exclusivos e duráveis."
        />
      </TitleContainer>
      <PhotosContainer>
        {Process.map(({ src, hoverSrc, alt }, index) => {

          return (
            <Photos
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="zoom-in" 
            >
              <PhotoImage src={hoveredIndex === index ? hoverSrc : src} alt={alt} />
            </Photos>
          );
        })}
      </PhotosContainer>
      <CardsContainer>
        <CardTemplate src="./icons/security.avif" alt="test"
        title="Compra 100% segura." sub="Compre parcelado, em até 4x, no cartão de crédito ou à vista com desconto de 5%, no Pix."/>
        <Separator data-aos="zoom-in" ></Separator>
        <CardTemplate src="./icons/quality.png" alt="test"
        title="Qualidade garantida." sub="Alta qualidade e durabilidade. Os adesivos não desbotam e são à prova de riscos."/>
        <Separator data-aos="zoom-in" data-aos-duration="600"></Separator>
        <CardTemplate src="./icons/truck.avif" alt="test"
        title="Frete Grátis." sub="Para pedidos acima de R$ 400, oferecemos condições especiais de pagamento."/>
      </CardsContainer>
      <Button onClick={() => window.open(WA_LINK)} data-aos="zoom-in" data-aos-duration="1000">Fale Conosco</Button>
    </ProcessContainer>
  );
};
