import { WA_LINK } from "../../constants/social"
import { FirstContainer, InfosContainer, PrincipalText, SubTitle, Button, SubStrong, BgPascoa } from "./styles"
export const FirstSection: React.FC = () => {
  return (
    <FirstContainer>
      <BgPascoa src="/images/pascoa.svg"/>
      <InfosContainer>
        <PrincipalText data-aos="fade-right" data-aos-duration="600">
        Muito mais que adesivos, somos uma comunidade.

        </PrincipalText>
        <SubTitle data-aos="fade-up-right" data-aos-duration="700">
        Cartelas e adesivos personalizados com envio para todo o Brasil. <SubStrong>Em até 24h</SubStrong>
        </SubTitle>
        <Button onClick={() => window.open(WA_LINK)}>
        Criar Meu Adesivo Agora
        </Button>
      </InfosContainer>
    </FirstContainer>
  )
}
