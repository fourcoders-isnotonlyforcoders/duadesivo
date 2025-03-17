import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Space Grotesk", sans-serif;
  align-items: center;
  height: 100px;
  padding: 0 7rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 44rem;
    width: auto;
  }
`;

export const NavLogo = styled.img`
  height: 90%;
  width: auto;
  object-fit: cover;
`;
export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;
export const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2.2rem;
  padding: 1rem 0.5rem;
`;
export const NavLi = styled.li`
  list-style: none;
  font-size: 1.8rem;
  font-weight: 500;
  transition: transform 0.2s ease-in-out, text-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;

  a {
    text-shadow: 0 0 0 black;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
  &:first-child a {
    color: ${(props) => props.theme.colors.yellow};
  }
  &:hover a {
    text-shadow: 0 0 5px ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.yellow};
  }
`;

export const NavBtn = styled.button`
  all: unset;
  border: 2px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 0.8rem;
  padding: 1rem 4rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  box-shadow: 0 0 4px 1px #111;
  transition: 0.4s ease;
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.yellow};
    background-color: rgba(17, 17, 17, 0.15);
    cursor: pointer;
    box-shadow: 0 0 22px 2px rgba(254, 165, 0, 0.22);
  }
  @media (max-width: 780px) {
    display: none;
  }
`;

export const NavBlur = styled.div`
  position: absolute;
  height: 150px;
  width: 333px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.yellow};
  filter: blur(55px);
  opacity: .1;
  z-index: -1;
  top: -88px;
  left: 33%;
`;
export const NavStars = styled.img`
  position: absolute;
  left: -100px;
  top: 0;
  z-index: -1;
  opacity: .4;
  object-fit: cover;
  pointer-events: none;
  animation: light 5s ease infinite;

@keyframes light {
  0%{
    opacity: .4;
  }50%{
    filter: brightness(1.2);
    opacity: 1;
  }100%{
    opacity: .4;
  }
}
`;
export const NavStars2 = styled.img`
  position: absolute;
  right: -100px;
  z-index: -1;
  opacity: .5;
  object-fit: cover;
  pointer-events: none;
  animation: light 7s ease infinite;

  @keyframes light {
  0%{
    opacity: .4;
  }50%{
    filter: brightness(1.2);
    opacity: 1;
  }100%{
    opacity: .4;
  }
}
`;
