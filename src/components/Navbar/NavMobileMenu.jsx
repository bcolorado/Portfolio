import React from "react";
import { GithubButton, MobileMenu, MobileMenuLink } from "./NavbarStyles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export const NavMobileMenu = ({ isOpen, setIsOpen }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      {isOpen && (
        <MobileMenu open={isOpen}>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#about">
            {t.nav.home}
          </MobileMenuLink>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#skills">
            {t.nav.skills}
          </MobileMenuLink>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
            {t.nav.experience}
          </MobileMenuLink>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
            {t.nav.projects}
          </MobileMenuLink>
          <MobileMenuLink onClick={() => setIsOpen(!isOpen)} href="#Education">
            {t.nav.education}
          </MobileMenuLink>
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <LanguageSwitcher />
          </div>
          <GithubButton
            style={{ width: "max-content" }}
            href={t.Bio.github}
            target="_blank"
          >
            <FaGithub size="1.5rem" />
            Github
          </GithubButton>

          <GithubButton
            style={{ width: "max-content" }}
            href={t.Bio.linkedin}
            target="_blank"
          >
            <FaLinkedin size="1.5rem" />
            Linkedin
          </GithubButton>
        </MobileMenu>
      )}
    </>
  );
};
