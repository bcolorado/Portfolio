import React, { useState } from "react";
import { Nav, NavContainer, NavLogo, MobileIcon, NavItems, NavLink, ButtonContainer, GithubButton, Span } from "./NavbarStyles" 
import { useTheme } from "styled-components";
import { FaLessThan, FaGreaterThan, FaBars } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { NavMobileMenu } from "./NavMobileMenu";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <FaLessThan size="1rem" />
          <Span>Bryan</Span>
          <Span>Smith</Span>
          <RxSlash size="1.5rem" />
          <FaGreaterThan size="1rem" />
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

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
      <NavMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </Nav>
  );
};
