import { useNavigate } from "react-router-dom";
import {
  FirstContainer,
  InfosContainer,
  PrincipalText,
  SubTitle,
  Button,
  SubStrong,
  BgPascoa,
} from "./styles";
export const FirstSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <FirstContainer>
      <BgPascoa src="/images/logodu.png" />
      <InfosContainer>
        <PrincipalText data-aos="fade-right" data-aos-duration="600">
          Muito mais que adesivos, somos uma equipe.
        </PrincipalText>
        <SubTitle data-aos="fade-up-right" data-aos-duration="700">
          Cartelas e adesivos personalizados com envio para todo o Brasil.{" "}
          <SubStrong>Em até 24h</SubStrong>
        </SubTitle>
        <Button onClick={() => navigate("/calculadora")}>
          Criar Meu Adesivo Agora
        </Button>
      </InfosContainer>
    </FirstContainer>
  );
};
