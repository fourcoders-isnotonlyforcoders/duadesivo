import { NavbarContainer } from "./styles";
import { NavbarProps } from "./types";

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <NavbarContainer data-aos="fade-up" data-aos-duration="500">
      {title}
    </NavbarContainer>
  );
};
