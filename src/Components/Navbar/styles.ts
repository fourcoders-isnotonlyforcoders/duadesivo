import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Space Grotesk", sans-serif;
  align-items: center;
  height: 100px;
  padding: 0 1rem;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
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
  transition: 0.2s ease;
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.yellow};
    background-color: rgba(17, 17, 17, 0.15);
    cursor: pointer;
    box-shadow: 0 0 11px 0 rgba(254, 165, 0, 0.22);
  }
  @media (max-width: 780px) {
    display: none;
  }
`;
