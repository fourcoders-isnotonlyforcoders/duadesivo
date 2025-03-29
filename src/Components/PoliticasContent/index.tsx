import { EMAIL } from "../../constants/social";
import {
    PoliticasContainer,
    PoliticasList,
    PoliticasListItem,
    PoliticasSessionText,
    PoliticasStrong,
    PoliticasText,
    PoliticasTitle,
    PoliticaSubTitle
  } from "./styles"
  
  export const PoliticasContent: React.FC = () => {
    return (
      <PoliticasContainer>
        <PoliticasTitle>Política de Privacidade</PoliticasTitle>
        <PoliticasText>
          A <PoliticasStrong>Du`Adesivo</PoliticasStrong> valoriza a
          privacidade e a segurança das informações dos usuários. Esta Política de
          Privacidade descreve como coletamos, usamos, armazenamos e protegemos
          seus dados ao acessar nosso site e contratar nossos serviços. Ao
          utilizar o site da Vizion, você concorda com os termos desta Política.
        </PoliticasText>
        <PoliticaSubTitle>1. INFORMAÇÕES COLETADAS</PoliticaSubTitle>
        <PoliticasSessionText>
          <PoliticasText>1.1. Informações fornecidas pelo usuário</PoliticasText>
          <PoliticasText>
            Ao interagir com o site ou contratar nossos serviços, podemos
            solicitar:
          </PoliticasText>
          <PoliticasList>
            <PoliticasListItem>Nome completo</PoliticasListItem>
            <PoliticasListItem>E-mail corporativo</PoliticasListItem>
            <PoliticasListItem>Número de telefone</PoliticasListItem>
            <PoliticasListItem>
              Nome da empresa ou negócio (se aplicável)
            </PoliticasListItem>
            <PoliticasListItem>
              Informações adicionais fornecidas voluntariamente
            </PoliticasListItem>
          </PoliticasList>
          <PoliticasText>
            1.2. Informações coletadas automaticamente
          </PoliticasText>
          <PoliticasText>
            Ao navegar no site, podemos coletar automaticamente:
          </PoliticasText>
          <PoliticasList>
            <PoliticasListItem>Endereço IP</PoliticasListItem>
            <PoliticasListItem>Tipo de dispositivo e navegador</PoliticasListItem>
            <PoliticasListItem>
              Páginas acessadas e tempo de permanência
            </PoliticasListItem>
            <PoliticasListItem>
              Cookies e tecnologias similares (ver seção 4)
            </PoliticasListItem>
            <PoliticasListItem>
              Informações adicionais fornecidas voluntariamente
            </PoliticasListItem>
          </PoliticasList>
        </PoliticasSessionText>
        <PoliticaSubTitle>2. COMPARTILHAMENTO DE DADOS</PoliticaSubTitle>
        <PoliticasText>
          A <PoliticasStrong>Du`Adesivo</PoliticasStrong> não vende ou
          compartilha seus dados pessoais com terceiros, exceto nos seguintes
          casos: Prestadores de serviço: Podemos compartilhar informações com
          empresas parceiras para suporte técnico, hospedagem de site, e
          ferramentas de marketing, garantindo que cumpram os padrões de segurança
          e privacidade. Requisitos legais: Podemos divulgar dados quando exigido
          por lei ou autoridades competentes.
        </PoliticasText>
        <PoliticaSubTitle>
          3. ARMAZENAMENTO E SEGURANÇA DOS DADOS
        </PoliticaSubTitle>
        <PoliticasSessionText>
          <PoliticasText>
            3.1. Seus dados são armazenados em servidores seguros e protegidos
            contra acessos não autorizados, perda ou uso indevido.
          </PoliticasText>
          <PoliticasText>
            3.2. Implementamos medidas de segurança como criptografia, controle de
            acesso e monitoramento contínuo para proteger suas informações.
          </PoliticasText>
          <PoliticasText>
            3.3. Retemos os dados pelo tempo necessário para cumprir as
            finalidades descritas nesta Política ou conforme exigido por lei.
          </PoliticasText>
        </PoliticasSessionText>
        <PoliticaSubTitle>
          4. USO DE COOKIES E TECNOLOGIAS SEMELHANTES
        </PoliticaSubTitle>
        <PoliticasSessionText>
          <PoliticasText>
            4.1. Utilizamos cookies para melhorar sua experiência de navegação,
            analisar interações com o site e personalizar anúncios.
          </PoliticasText>
          <PoliticasText>
            4.2. Os tipos de cookies utilizados incluem:
          </PoliticasText>
          <PoliticasList>
            <PoliticasListItem>
              Essenciais: Garantem o funcionamento correto do site.
            </PoliticasListItem>
            <PoliticasListItem>
              Analíticos: Coletam dados sobre o uso do site para otimização.
            </PoliticasListItem>
            <PoliticasListItem>
              Marketing: Personalizam anúncios e campanhas.
            </PoliticasListItem>
            <PoliticasListItem>
              Você pode gerenciar suas preferências de cookies diretamente nas
              configurações do seu navegador.
            </PoliticasListItem>
          </PoliticasList>
        </PoliticasSessionText>
        <PoliticaSubTitle>5. DIREITOS DO USUÁRIO</PoliticaSubTitle>
        <PoliticasSessionText>
          <PoliticasText>
            <PoliticasStrong>
              Você tem os seguintes direitos em relação aos seus dados:
            </PoliticasStrong>
          </PoliticasText>
          <PoliticasText>
            Acesso: Solicitar quais informações coletamos e armazenamos sobre
            você.
          </PoliticasText>
          <PoliticasText>
            Correção: Atualizar ou corrigir dados incorretos.
          </PoliticasText>
          <PoliticasText>
            Exclusão: Solicitar a remoção de seus dados (salvo quando houver
            obrigação legal de retenção).
          </PoliticasText>
          <PoliticasText>
            Revogação de consentimento: Optar por não receber comunicações de
            marketing.
          </PoliticasText>
        </PoliticasSessionText>
        <PoliticaSubTitle>
          6. ALTERAÇÕES NA POLÍTICA DE PRIVACIDADE
        </PoliticaSubTitle>
        <PoliticasText>
          Podemos atualizar esta Política periodicamente. As alterações serão
          publicadas no site e entrarão em vigor imediatamente. Recomendamos a
          revisão regular desta página.
        </PoliticasText>
        <PoliticaSubTitle>7. CONTATO</PoliticaSubTitle>
        <PoliticasSessionText>
          <PoliticasText>
            Se tiver dúvidas sobre esta Política de Privacidade ou o uso de seus
            dados, entre em contato:
          </PoliticasText>
          <PoliticasText>
            📧 E-mail: {EMAIL}
          </PoliticasText>
          <PoliticasText>🌐 Site: www.duadesivo.com</PoliticasText>
        </PoliticasSessionText>
      </PoliticasContainer>
    );
  };
  