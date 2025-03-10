import { useState } from "react";
import {
  ProcessContainer,
  TitleContainer,
  PhotosContainer,
  Photos,
  Button,CardsContainer, Separator
} from "./styles";
import { Process } from "../../constants/process";
import { TemplateText } from "../TemplateText";
import { CardTemplate } from "./card";
export const ProcessSection = () => {
  return (
    <ProcessContainer>
      <TitleContainer>
        <TemplateText
          PreTitle="NOSSO PROCESSO"
          Title="Do design à impressão, cuidamos de tudo para você ter adesivos exclusivos e duráveis."
        />
      </TitleContainer>
      <PhotosContainer>
        {Process.map(({ src, hoverSrc, alt }, index) => {
          const [currentSrc, setCurrentSrc] = useState(src);

          return (
            <Photos
              key={index}
              onMouseEnter={() => setCurrentSrc(hoverSrc)}
              onMouseLeave={() => setCurrentSrc(src)}
            >
              <img src={currentSrc} alt={alt} />
            </Photos>
          );
        })}
      </PhotosContainer>
      <CardsContainer>
        <CardTemplate src="./icons/security.avif" alt="test"
        title="Compra 100% segura." sub="Compre parcelado, em até 4x, no cartão de crédito ou à vista com desconto de 5%, no Pix."/>
        <Separator></Separator>
        <CardTemplate src="./icons/quality.png" alt="test"
        title="Qualidade garantida." sub="Alta qualidade e durabilidade. Os adesivos não desbotam e são à prova de riscos."/>
        <Separator></Separator>
        <CardTemplate src="./icons/truck.avif" alt="test"
        title="Frete Grátis." sub="Para pedidos acima de R$ 400, oferecemos condições especiais de pagamento."/>
      </CardsContainer>
      <Button>Fale Conosco</Button>
    </ProcessContainer>
  );
};
