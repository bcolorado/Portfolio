import React from "react";
import styled from "styled-components";
import { education } from "../../../data/constants";
import EducationCard from "../../Cards/EducationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { darkTheme } from "../../../utils/Themes";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../data/translations";

const Container = styled.div`
margin-top: 100px;
margin-bottom: 8rem;
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
  font-weight: 600;
  color: ${darkTheme.text_secondary};
  @media (max-width: 960px) {
    font-size: 22px;
  }
`;

export const Education = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const getTranslatedEducation = (education) => {
    const translationKey = {
      "Universidad Nacional de Colombia, Bogotá": "unal",
      "Servicio Nacional de Aprendizaje SENA, Soacha": "sena",
      "Gimnasio Moderno Robinson Crusoe, Soacha": "school",
    }[education.school];

    if (!translationKey) return education;

    const translatedEdu = t.sections.education.items[translationKey];
    return {
      ...education,
      school: translatedEdu.school,
      date: translatedEdu.date,
      grade: translatedEdu.grade,
      desc: translatedEdu.desc,
      degree: translatedEdu.degree,
    };
  };

  return (
    <Container id="Education">
      <Wrapper>
        <Title>{t.sections.education.title}</Title>
        <Desc style={{ marginBottom: "40px" }}>
          {t.sections.education.description}
        </Desc>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={getTranslatedEducation(education)}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};
