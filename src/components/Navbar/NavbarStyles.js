import { darkTheme } from "../../utils/Themes";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${darkTheme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: all 0.3s ease-in-out;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  heigth: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`;

export const NavLogo = styled(LinkR)`
  color: ${darkTheme.primary};
  width: 80%;
  display: flex;
  padding: 0 6px;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;

  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${darkTheme.text_primary};
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 32px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${darkTheme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${darkTheme.primary};
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GithubButton = styled.a`
  border: 1px solid ${darkTheme.primary};
  color: ${darkTheme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${darkTheme.primary};
    color: ${darkTheme.text_primary};
  }
`;

export const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  align-self: center;
  color: ${darkTheme.text_primary};
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:16px;
  position: absolute;
  top:80px;
  right:0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background; ${darkTheme.card_light};
  transition: all 0.3s ease-in-out;
  transform : ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba( 0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
  `;

  export const MobileMenuLink = styled.a`
  color: ${darkTheme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${darkTheme.primary};
  }
`;

