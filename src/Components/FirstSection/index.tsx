import { FirstContainer, InfosContainer, PrincipalText, SubTitle, Button, SubStrong, BgPascoa } from "./styles"
export const FirstSection: React.FC = () => {
  return (
    <FirstContainer>
      <BgPascoa src="/images/pascoa.svg"/>
      <InfosContainer>
        <PrincipalText data-aos="fade-right" data-aos-duration="600">
        Transforme sua criatividade em adesivos únicos e de alta qualidade!
        </PrincipalText>
        <SubTitle data-aos="fade-up-right" data-aos-duration="700">
        Cartelas e adesivos personalizados com entrega para todo o Brasil. <SubStrong>Em até 24h</SubStrong>
        </SubTitle>
        <Button >
        Criar Meu Adesivo Agora
        </Button>
      </InfosContainer>
    </FirstContainer>
  )
}
