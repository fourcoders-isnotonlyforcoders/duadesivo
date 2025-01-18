import { NavbarContainer } from "./styles";
import { NavbarProps } from "./types";

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return <NavbarContainer>{title}</NavbarContainer>;
};
