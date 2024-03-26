import React from 'react';
import { GithubButton, MobileMenu, MobileMenuLink } from './NavbarStyles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const NavMobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <MobileMenu open={isOpen}>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#about">
            Inicio
          </MobileMenuLink>
          <MobileMenuLink
            onClick={() => setIsOpen(!isOpen)}
            href="#skills"
          >
            Habilidades
          </MobileMenuLink>
          <MobileMenuLink
            onClick={() => setIsOpen(!isOpen)}
            href="#Experience"
          >
            Experiencia
          </MobileMenuLink>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
            Proyectos
          </MobileMenuLink>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#Education">
            Educación
          </MobileMenuLink>
          <GithubButton
            style={{ width: "max-content" }}
            href="/"
            target="_Blank"
          >
            <FaGithub size="1.5rem"/>
            Github
          </GithubButton>

          <GithubButton
            style={{ width: "max-content" }}
            href="/"
            target="_Blank"
          >
            <FaLinkedin size="1.5rem"/>
            Linkedin
          </GithubButton>
        </MobileMenu>
      )}
    </>
  );
}
