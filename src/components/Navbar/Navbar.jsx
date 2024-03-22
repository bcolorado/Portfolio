import React, { useState } from "react";
import { Nav, NavContainer, NavLogo, MobileIcon, NavItems, NavLink, ButtonContainer, GithubButton, Span } from "./NavbarStyles" 
import { useTheme } from "styled-components";
import { FaLessThan, FaGreaterThan, FaBars, FaGithub, FaLinkedin   } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { NavMobileMenu } from "./NavMobileMenu";
import { Bio } from "../../data/constants";

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
          <NavLink href="#about">Inicio</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#Experience">Experiencia</NavLink>
          <NavLink href="#Projects">Proyectos</NavLink>
          <NavLink href="#Education">Educación</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton
            href={Bio.github}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FaGithub size="1.5rem" />
          </GithubButton>
          <GithubButton
            href={Bio.linkedin}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FaLinkedin size="1.5rem" />
          </GithubButton>
        </ButtonContainer>
      </NavContainer>
      <NavMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </Nav>
  );
};
