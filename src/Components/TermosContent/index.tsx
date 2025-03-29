import { EMAIL } from "../../constants/social";
import {
  TermosContainer,
  TermosList,
  TermosListItem,
  TermosSessionText,
  TermosStrong,
  TermosText,
  TermosTitle,
  TermosubTitle
} from "./styles";

export const TermosContent: React.FC = () => {
  return (
    <TermosContainer>
      <TermosTitle>Termos de uso</TermosTitle>
      <TermosText>
        A <TermosStrong>Du`Adesivo</TermosStrong> valoriza a privacidade
        e a segurança das informações dos usuários. Esta Política de Privacidade
        descreve como coletamos, usamos, armazenamos e protegemos seus dados ao
        acessar nosso site e contratar nossos serviços. Ao utilizar o site da
        Vizion, você concorda com os termos desta Política.
      </TermosText>
      <TermosubTitle>1. INFORMAÇÕES COLETADAS</TermosubTitle>
      <TermosSessionText>
        <TermosText>1.1. Informações fornecidas pelo usuário</TermosText>
        <TermosText>
          Ao interagir com o site ou contratar nossos serviços, podemos
          solicitar:
        </TermosText>
        <TermosList>
          <TermosListItem>Nome completo</TermosListItem>
          <TermosListItem>E-mail corporativo</TermosListItem>
          <TermosListItem>Número de telefone</TermosListItem>
          <TermosListItem>
            Nome da empresa ou negócio (se aplicável)
          </TermosListItem>
          <TermosListItem>
            Informações adicionais fornecidas voluntariamente
          </TermosListItem>
        </TermosList>
        <TermosText>1.2. Informações coletadas automaticamente</TermosText>
        <TermosText>
          Ao navegar no site, podemos coletar automaticamente:
        </TermosText>
        <TermosList>
          <TermosListItem>Endereço IP</TermosListItem>
          <TermosListItem>Tipo de dispositivo e navegador</TermosListItem>
          <TermosListItem>
            Páginas acessadas e tempo de permanência
          </TermosListItem>
          <TermosListItem>
            Cookies e tecnologias similares (ver seção 4)
          </TermosListItem>
          <TermosListItem>
            Informações adicionais fornecidas voluntariamente
          </TermosListItem>
        </TermosList>
      </TermosSessionText>
      <TermosubTitle>2. COMPARTILHAMENTO DE DADOS</TermosubTitle>
      <TermosText>
        A <TermosStrong>Du`Adesivo</TermosStrong> não vende ou
        compartilha seus dados pessoais com terceiros, exceto nos seguintes
        casos: Prestadores de serviço: Podemos compartilhar informações com
        empresas parceiras para suporte técnico, hospedagem de site, e
        ferramentas de marketing, garantindo que cumpram os padrões de segurança
        e privacidade. Requisitos legais: Podemos divulgar dados quando exigido
        por lei ou autoridades competentes.
      </TermosText>
      <TermosubTitle>3. ARMAZENAMENTO E SEGURANÇA DOS DADOS</TermosubTitle>
      <TermosSessionText>
        <TermosText>
          3.1. Seus dados são armazenados em servidores seguros e protegidos
          contra acessos não autorizados, perda ou uso indevido.
        </TermosText>
        <TermosText>
          3.2. Implementamos medidas de segurança como criptografia, controle de
          acesso e monitoramento contínuo para proteger suas informações.
        </TermosText>
        <TermosText>
          3.3. Retemos os dados pelo tempo necessário para cumprir as
          finalidades descritas nesta Política ou conforme exigido por lei.
        </TermosText>
      </TermosSessionText>
      <TermosubTitle>4. USO DE COOKIES E TECNOLOGIAS SEMELHANTES</TermosubTitle>
      <TermosSessionText>
        <TermosText>
          4.1. Utilizamos cookies para melhorar sua experiência de navegação,
          analisar interações com o site e personalizar anúncios.
        </TermosText>
        <TermosText>4.2. Os tipos de cookies utilizados incluem:</TermosText>
        <TermosList>
          <TermosListItem>
            Essenciais: Garantem o funcionamento correto do site.
          </TermosListItem>
          <TermosListItem>
            Analíticos: Coletam dados sobre o uso do site para otimização.
          </TermosListItem>
          <TermosListItem>
            Marketing: Personalizam anúncios e campanhas.
          </TermosListItem>
          <TermosListItem>
            Você pode gerenciar suas preferências de cookies diretamente nas
            configurações do seu navegador.
          </TermosListItem>
        </TermosList>
      </TermosSessionText>
      <TermosubTitle>5. DIREITOS DO USUÁRIO</TermosubTitle>
      <TermosSessionText>
        <TermosText>
          <TermosStrong>
            Você tem os seguintes direitos em relação aos seus dados:
          </TermosStrong>
        </TermosText>
        <TermosText>
          Acesso: Solicitar quais informações coletamos e armazenamos sobre
          você.
        </TermosText>
        <TermosText>
          Correção: Atualizar ou corrigir dados incorretos.
        </TermosText>
        <TermosText>
          Exclusão: Solicitar a remoção de seus dados (salvo quando houver
          obrigação legal de retenção).
        </TermosText>
        <TermosText>
          Revogação de consentimento: Optar por não receber comunicações de
          marketing.
        </TermosText>
      </TermosSessionText>
      <TermosubTitle>6. ALTERAÇÕES NA POLÍTICA DE PRIVACIDADE</TermosubTitle>
      <TermosText>
        Podemos atualizar esta Política periodicamente. As alterações serão
        publicadas no site e entrarão em vigor imediatamente. Recomendamos a
        revisão regular desta página.
      </TermosText>
      <TermosubTitle>7. CONTATO</TermosubTitle>
      <TermosSessionText>
        <TermosText>
          Se tiver dúvidas sobre esta Política de Privacidade ou o uso de seus
          dados, entre em contato:
        </TermosText>
        <TermosText>📧 E-mail: {EMAIL}</TermosText>
        <TermosText>🌐 Site: www.duadesivo.com</TermosText>
      </TermosSessionText>
    </TermosContainer>
  );
};
