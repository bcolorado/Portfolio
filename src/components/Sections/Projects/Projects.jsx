import React, { useState } from "react";
import styled from "styled-components";
import { darkTheme } from "../../../utils/Themes";
import { projects } from "../../../data/constants";
import { ProjectCard } from "../../Cards/ProjectCard";
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
  color: ${(prop) => prop.color || darkTheme.text_primary};
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

const ToggleGroup = styled.div`
display: flex;
border: 1.5px solid ${darkTheme.primary};
color: ${darkTheme.primary};
font-size: 16px;
border-radius: 12px;
font-weight 500;
margin: 42px 0;
@media (max-width: 960px){
    font-size: 12px;
}
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${darkTheme.primary + 20};
  }
  @media (max-width: 960px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active }) =>
    active &&
    `
  background:  ${darkTheme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${darkTheme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

export const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const { language } = useLanguage();
  const t = translations[language];

  const getTranslatedProject = (project) => {
    const translationKey = {
      NoteCrafter: "notecrafter",
      "Microservicio Chats": "chat_ms",
      "Componente lógico Api Gateway": "api_gateway",
      "Sistema basado en microservicios": "tuto_academy",
      "Curso AWS Academy Cloud Architecting": "aws_course",
      "Curso Cisco Cybersecurity Essentials": "cisco_course",
    }[project.title];

    if (!translationKey) return project;

    const translatedProj = t.sections.projects.items[translationKey];
    return {
      ...project,
      title: translatedProj.title,
      date: translatedProj.date,
      description: translatedProj.description,
    };
  };

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>{t.sections.projects.title}</Title>
        <Desc>{t.sections.projects.description}</Desc>
        <ToggleGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            {t.sections.projects.filters.all}
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "front"}
            onClick={() => setToggle("front")}
          >
            {t.sections.projects.filters.frontend}
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "back"}
            onClick={() => setToggle("back")}
          >
            {t.sections.projects.filters.backend}
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "arch"}
            onClick={() => setToggle("arch")}
          >
            {t.sections.projects.filters.architecture}
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "cert"}
            onClick={() => setToggle("cert")}
          >
            {t.sections.projects.filters.certificates}
          </ToggleButton>
        </ToggleGroup>
        <CardContainer>
          {projects
            .filter((item) => {
              if (toggle === "all") return true;
              return item.category === toggle;
            })
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={getTranslatedProject(project)}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};
