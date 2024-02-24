import React from 'react';
import { GithubButton, MobileMenu, MobileMenuLink } from './NavbarStyles';

export const NavMobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <MobileMenu open={isOpen}>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#inicio">
            Inicio
          </MobileMenuLink>
          <MobileMenuLink
            onClick={() => setIsOpen(!isOpen)}
            href="#habilidades"
          >
            Habilidades
          </MobileMenuLink>
          <MobileMenuLink
            onClick={() => setIsOpen(!isOpen)}
            href="#experiencia"
          >
            Experiencia
          </MobileMenuLink>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#proyectos">
            Proyectos
          </MobileMenuLink>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#educación">
            Educación
          </MobileMenuLink>
          <GithubButton
            style={{ width: "max-content" }}
            href="/"
            target="_Blank"
          >
            Github Profile
          </GithubButton>
        </MobileMenu>
      )}
    </>
  );
}
