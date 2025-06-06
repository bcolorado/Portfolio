import React, { useState } from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavLink,
  ButtonContainer,
  GithubButton,
  Span,
} from "./NavbarStyles";
import { useTheme } from "styled-components";
import {
  FaLessThan,
  FaGreaterThan,
  FaBars,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { NavMobileMenu } from "./NavMobileMenu";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

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
          <NavLink href="#about">{t.nav.home}</NavLink>
          <NavLink href="#skills">{t.nav.skills}</NavLink>
          <NavLink href="#Experience">{t.nav.experience}</NavLink>
          <NavLink href="#Projects">{t.nav.projects}</NavLink>
          <NavLink href="#Education">{t.nav.education}</NavLink>
        </NavItems>
        <ButtonContainer>
          <LanguageSwitcher />
          <GithubButton
            href={t.Bio.github}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FaGithub size="1.5rem" />
          </GithubButton>
          <GithubButton
            href={t.Bio.linkedin}
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
