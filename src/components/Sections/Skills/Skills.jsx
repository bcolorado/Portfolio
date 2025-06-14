import React from "react";
import { skills } from "../../../data/constants";
import styled from "styled-components";
import { darkTheme } from "../../../utils/Themes";
import { Icon } from "./Icon";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../data/translations";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${darkTheme.text_primary};
  @media (max-width: 960px) {
    margin-top: 12px;
    font-size: 44px;
  }
`;

const Description = styled.div`
  font-size: 24px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  color: ${darkTheme.text_primary + 95};
  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);

  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 960px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 640px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${darkTheme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${darkTheme.text_primary + 80};
  border: 1px solid ${darkTheme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 960px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 640px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Container id="skills">
      <Wrapper>
        <Title>{t.sections.skills.title}</Title>

        <Description>{t.sections.skills.description}</Description>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={`skill-${index}`}>
              <SkillTitle>
                {skill.title === "Frontend" && t.sections.skills.frontend}
                {skill.title === "Backend" && t.sections.skills.backend}
                {skill.title === "Otros" && t.sections.skills.others}
              </SkillTitle>
              <SkillList>
                {skill.skills.map((skillItem) => (
                  <SkillItem key={skillItem.id}>
                    <Icon iconName={skillItem.id} />
                    {skillItem.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};
