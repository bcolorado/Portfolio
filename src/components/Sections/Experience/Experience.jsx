import React from "react";
import styled from "styled-components";
import { experiences } from "../../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../../Cards/ExperienceCard";
import { darkTheme } from "../../../utils/Themes";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../data/translations";

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
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
  max-width: 1100px;
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

const Desc = styled.div`
  font-size: 24px;
  text-align: center;
  color: ${darkTheme.text_secondary};
  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

export const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getTranslatedExperience = (experience) => {
    const translationKey = {
      "Science for Life (S4L)": "s4l",
      "LAB101 UNAL": "lab101",
      Sitlen: "sitlen",
      "Universidad Nacional de Colombia":
        experience.role.includes("Arquitecto") ||
        experience.role.includes("Architect")
          ? "unal_architect"
          : "unal_degree",
    }[experience.company];

    if (!translationKey) return experience;

    const translatedExp = t.sections.experience.items[translationKey];
    return {
      ...experience,
      role: translatedExp.role,
      desc: translatedExp.desc,
      date: translatedExp.date,
      company: translatedExp.company,
    };
  };

  return (
    <Container id="Experience">
      <Wrapper>
        <Title>{t.sections.experience.title}</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          {t.sections.experience.description}
        </Desc>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={getTranslatedExperience(experience)}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};
