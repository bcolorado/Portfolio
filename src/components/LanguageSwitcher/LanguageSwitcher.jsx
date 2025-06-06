import React from "react";
import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";
import { darkTheme } from "../../utils/Themes";
import { FaFlag, FaFlagUsa } from "react-icons/fa";

const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 0px;
`;

const RadioGroup = styled.div`
  display: flex;
  background: ${darkTheme.card};
  padding: 4px;
  border-radius: 30px;
  border: 1px solid ${darkTheme.primary};
`;

const RadioOption = styled.label`
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 20px;
  color: ${(props) =>
    props.checked ? darkTheme.text_primary : darkTheme.text_secondary};
  background: ${(props) => (props.checked ? darkTheme.primary : "transparent")};
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    color: ${darkTheme.text_primary};
  }

  svg {
    font-size: 16px;
  }
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <SwitcherContainer>
      <RadioGroup>
        <RadioOption checked={language === "es"}>
          <HiddenRadio
            name="language"
            value="es"
            checked={language === "es"}
            onChange={toggleLanguage}
          />
          <FaFlag />
          ES
        </RadioOption>
        <RadioOption checked={language === "en"}>
          <HiddenRadio
            name="language"
            value="en"
            checked={language === "en"}
            onChange={toggleLanguage}
          />
          <FaFlagUsa />
          EN
        </RadioOption>
      </RadioGroup>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
