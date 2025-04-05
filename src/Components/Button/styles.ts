import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonReturnContainer = styled(Link)`
  border: 2px solid ${(props) => props.theme.colors.yellowOpacity55};
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  padding: 1rem;
  border-radius: 999999px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s, opacity 0.5s,
    transform 0.5s !important;
  background: radial-gradient(
    circle,
    RGBA(254, 165, 0, 0.22),
    RGBA(254, 165, 0, 0.50)
  );

  &:hover {
    transform: scale(1.04);
    opacity: 1;
    filter: brightness(1.1);
    box-shadow: 0 0 22px 2px RGBA(254, 165, 0, 0.50);
  }
`;

export const ButtonReturnIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  transform: rotateY(3.142rad);

`;
