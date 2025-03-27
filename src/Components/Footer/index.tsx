import { EMAIL, WA_LINK, WA_NUMBER } from "../../constants/social";
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
  Link,
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
  BgImage,
} from "./styles";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FirstContainer>
        <Infos>
          <Contacts>
            <Title>Contato</Title>
            <Container>
              <Contact>{EMAIL}</Contact>
              <Contact>{WA_NUMBER}</Contact>
            </Container>
          </Contacts>

          <Socials>
            <Title>Redes Sociais</Title>
            <LinksContainer>
              <Link href="#">
                <Logo src="/icons/instagram.svg" alt="icone do instagram" />
              </Link>
              <Link onClick={() => window.open(WA_LINK)}>
                <Logo src="/icons/whatsapp.svg" alt="icone do whatsapp" />
              </Link>
              <Link href="#">
                <Logo src="/icons/tiktok.svg" alt="icone do tiktok" />
              </Link>
              <Link href="#">
                <Logo src="/icons/facebook.svg" alt="icone do facebook" />
              </Link>
            </LinksContainer>
          </Socials>
          <Hours>
            <Title>Atendimento</Title>
            <HoursInfo>de Seg a Sex, das 9h às 16h</HoursInfo>
          </Hours>
        </Infos>
        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468141.85064551677!2d-46.516192431969515!3d-23.555575042241333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd81269172647%3A0xb3859ba7fe8bbb07!2sMogi%20das%20Cruzes%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1741977536777!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Map>
      </FirstContainer>
      <SecondContainer>
        <BgImage src="images/bgEstrelado.avif" />
        <LogoContainer>
          <LogoDu src="/images/DuLogo.svg" />
          <DadosContainer>
            <Dado>
              DuÁdesivo- Produção de Adesivos Especiais do Brasil EIRELI - ME.
              22.502.695/0001-42. Av. Juca Pato, 637 Produzido com em
              Uberaba/MG. © Du`Adesivo 2025. Todos os direitos reservados
            </Dado>
          </DadosContainer>
        </LogoContainer>
        <SecurityContainer>
          <Security src="/images/google-reviews.avif" />
          <Security src="/images/google-safe.avif" />
          <Security src="/images/secure.avif" />
        </SecurityContainer>
      </SecondContainer>
      <ThirdContainer>
        <Privacity href="/">Política de Privacidade</Privacity>
        <Copy href="https://fourcoders.com/" target="_blank">
          Desenvolvido por <Strong>FourCoders</Strong>
        </Copy>
        <Term href="/">Termos e Condições</Term>
      </ThirdContainer>
    </FooterContainer>
  );
};
