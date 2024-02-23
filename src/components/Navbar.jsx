import React from "react";
import { darkTheme } from "../utils/Themes";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { FaLessThan, FaGreaterThan  } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";


const Nav = styled.nav`
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

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  heigth: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`;

const NavLogo = styled(LinkR)`
  color: ${darkTheme.primary};
  width:80%;
  display:flex;
  padding:0 6px;
  justify-self: flex-start;
  cursor:pointer;
  text-decoration:none;
  
  align-items: center;
  @media screen and (max-width: 640px){
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
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

const NavItems = styled.ul`
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

const NavLink = styled.a`
  color: ${darkTheme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${darkTheme.primary};
  }
`;

const ButtonContainer = styled.div`
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

const GithubButton = styled.a`
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

const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  align-self: center;
  color: ${darkTheme.text_primary};
`;

export const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <FaLessThan size="1rem"/>
          <Span>Bryan</Span>
          <Span>Smith</Span>
          <RxSlash size="1.5rem"/>
          <FaGreaterThan size="1rem"/>
        </NavLogo>
        <MobileIcon></MobileIcon>

        <NavItems>
          <NavLink href="#inicio">Inicio</NavLink>
          <NavLink href="#habilidades">Habilidades</NavLink>
          <NavLink href="#experiencia">Experiencia</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#educación">Educación</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};
