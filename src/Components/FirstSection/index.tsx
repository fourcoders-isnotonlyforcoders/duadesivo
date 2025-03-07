import { FirstContainer, InfosContainer, PrincipalText, SubTitle, Button, SubStrong } from "./styles"
export const FirstSection: React.FC = () => {
  return (
    <FirstContainer>
      <InfosContainer>
        <PrincipalText>
        Transforme sua criatividade em adesivos únicos!
        </PrincipalText>
        <SubTitle>
        Cartelas e adesivos personalizados com entrega para todo o Brasil. <SubStrong>Em até 24h</SubStrong>
        </SubTitle>
        <Button>
        Criar Meu Adesivo Agora
        </Button>
      </InfosContainer>
    </FirstContainer>
  )
}
