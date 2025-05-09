import { EMAIL, FB_LINK, IG_LINK, WA_LINK, WA_NUMBER } from "../../constants/social";
import {
  FooterContainer,
  FirstContainer,
  Infos,
  Contacts,
  Hours,
  Map,
  Socials,
  Title,
  Contact,
  Container,
  Logo,
  LinksContainer,
  HoursInfo,
  SecondContainer,
  LogoContainer,
  LogoDu,
  Dado,
  DadosContainer,
  Copy,
  Security,
  SecurityContainer,
  Strong,
  ThirdContainer,
  Privacity,
  Term,
  LinkCustom,
} from "./styles";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FirstContainer>
        <Infos>
          <Contacts>
            <Title data-aos= "fade-down" data-aos-duration= "600">Contato</Title>
            <Container>
              <Contact data-aos= "fade-right" data-aos-duration= "600">{EMAIL}</Contact>
              <Contact data-aos= "fade-right" data-aos-duration= "700">{WA_NUMBER}</Contact>
            </Container>
          </Contacts>

          <Socials>
            <Title data-aos= "fade-down" data-aos-duration= "700">Redes Sociais</Title>
            <LinksContainer>
              <LinkCustom href={IG_LINK} target="_blank" data-aos= "fade-right" data-aos-duration= "700">
                <Logo src="/icons/instagram.svg" alt="icone do instagram" />
              </LinkCustom>
              <LinkCustom href={WA_LINK} target="_blank" data-aos= "fade-down" data-aos-duration= "700">
                <Logo src="/icons/whatsapp.svg" alt="icone do whatsapp" />
              </LinkCustom>
              <LinkCustom href="" data-aos= "fade-up" data-aos-duration= "700">
                <Logo src="/icons/tiktok.svg" alt="icone do tiktok" />
              </LinkCustom>
              <LinkCustom href={FB_LINK} target="_blank" data-aos= "fade-left" data-aos-duration= "700">
                <Logo src="/icons/facebook.svg" alt="icone do facebook" />
              </LinkCustom>
            </LinksContainer>
          </Socials>
          <Hours>
            <Title data-aos= "fade-down" data-aos-duration= "800">Atendimento</Title>
            <HoursInfo data-aos= "fade-left" data-aos-duration= "700">de Seg a Sex, das 8:30h às 18h</HoursInfo>
          </Hours>
        </Infos>
        <LinkCustom href="#" />
        <Map >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234454.79125025836!2d-48.05561825576195!3d-23.339109491302665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5d85d684d6c69%3A0x9b69b0dd15b43d0a!2zVGF0dcOtLCBTdGF0ZSBvZiBTw6NvIFBhdWxv!5e0!3m2!1sen!2sbr!4v1743088482314!5m2!1sen!2sbr" data-aos= "fade-left" data-aos-duration= "700"></iframe>
        </Map>
      </FirstContainer>
      <SecondContainer>

        <LogoContainer>
          <LogoDu src="/images/DuLogo.svg" data-aos= "fade-up-right" data-aos-duration= "700"/>
          <DadosContainer>
            <Dado data-aos= "fade-left" data-aos-duration= "700">
              © 2025 DuÁdesivo. Todos os direitos reservados. CNPJ:
              37.405.483/0001-14 | Especializados na produção de adesivos
              personalizados em Tatuí-SP. Qualidade, durabilidade e
              personalização para destacar sua marca!
            </Dado>
          </DadosContainer>
        </LogoContainer>
        <SecurityContainer data-aos="fade-left">
          <Security src="/images/google-reviews.avif" />
          <Security src="/images/google-safe.avif"  />
          <Security src="/images/secure.avif"/>
        </SecurityContainer>
      </SecondContainer>
      <ThirdContainer>
        <Privacity to="/politicas"  >Política de Privacidade</Privacity>
        <Copy href="https://fourcoders.com/" target="_blank" >
          Desenvolvido por <Strong>FourCoders</Strong>
        </Copy>
        <Term to="/termos"  >Termos e Condições</Term>
      </ThirdContainer>
    </FooterContainer>
  );
};
