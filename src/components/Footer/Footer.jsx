import React from "react";
import styled from "styled-components";
import { Bio, quote } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { darkTheme } from "../../utils/Themes";
import { QuoteCard } from "../Cards/QuoteCard";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${darkTheme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${darkTheme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 960px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${darkTheme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${darkTheme.primary};
  }
  @media (max-width: 960px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${darkTheme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${darkTheme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <QuoteCard author={quote[0].author} quote={quote[0].quote} source={quote[0].source}/>
      <FooterWrapper>
        <Logo>Bryan Smith Colorado</Logo>
        <Nav>
          <NavLink href="#about">Inicio</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#Experience">Experiencia</NavLink>
          <NavLink href="#Projects">Proyectos</NavLink>
          <NavLink href="#Education">Educación</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Bryan Smith. Todos los derechos reservados.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};