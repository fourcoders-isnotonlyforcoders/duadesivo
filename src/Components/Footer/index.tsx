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
              <Contact>duadesivooficial@gmail.com</Contact>
              <Contact>+55 15 99821-6723</Contact>
            </Container>
          </Contacts>

          <Socials>
            <Title>Redes Sociais</Title>
            <LinksContainer>
              <Link href="#">
                <Logo src="/icons/instagram.svg" alt="icone do instagram" />
              </Link>
              <Link href="#">
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
            <HoursInfo>de Seg a Sex, das 8:30h às 18h</HoursInfo>
          </Hours>
        </Infos>
        <Map>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234454.79125025836!2d-48.05561825576195!3d-23.339109491302665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5d85d684d6c69%3A0x9b69b0dd15b43d0a!2zVGF0dcOtLCBTdGF0ZSBvZiBTw6NvIFBhdWxv!5e0!3m2!1sen!2sbr!4v1743088482314!5m2!1sen!2sbr"></iframe>
        </Map>
      </FirstContainer>
      <SecondContainer>
        <BgImage src="images/bgEstrelado.avif" />
        <LogoContainer>
          <LogoDu src="/images/DuLogo.svg" />
          <DadosContainer>
            <Dado>
              © 2025 DuÁdesivo. Todos os direitos reservados. CNPJ:
              37.405.483/0001-14 | Especializados na produção de adesivos
              personalizados em Tatuí-SP. Qualidade, durabilidade e
              personalização para destacar sua marca!
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
