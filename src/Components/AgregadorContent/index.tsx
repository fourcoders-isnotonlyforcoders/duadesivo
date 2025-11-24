import React from "react";
import { WA_LINK } from "../../constants/social";
import {
  AgregadorContainer,
  AgregadorTitle,
  AgregadorSubtitle,
  LinksContainer,
  LinkButton,
} from "./styles";

// Links fixos para o agregador
const links = [
  { label: "Site", url: "http://duadesivo.com" },
  { label: "Shopee", url: "http://shopee.com.br/duadesivo" },
  { label: "WhatsApp", url: WA_LINK || "https://wa.me/" },
  {
    label: "Mercado Livre",
    url: "https://www.mercadolivre.com.br/loja/du-adesivo-oficial",
  },
  { label: "TikTok", url: "https://vt.tiktok.com/ZSym56TjL/?page=TikTokShop" },
];

export const AgregadorContent: React.FC = () => {
  const handleLinkClick = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <AgregadorContainer>
      <AgregadorTitle>Nossos Links</AgregadorTitle>
      <AgregadorSubtitle>
        Abaixo seguem os links para nossas plataformas e contatos:
      </AgregadorSubtitle>

      <LinksContainer>
        {links.map((link, index) => (
          <LinkButton
            key={index}
            onClick={() => handleLinkClick(link.url)}
          >
            {link.label}
          </LinkButton>
        ))}
      </LinksContainer>
    </AgregadorContainer>
  );
};
