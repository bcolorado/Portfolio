import React, { useState } from "react";
import styled from "styled-components";
import { darkTheme } from "../../utils/Themes";
import { projects } from "../../data/constants";
import { ProjectCard } from "../Cards/ProjectCard";

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

const ToggleGroup = styled.div`
display: flex;
border: 1.5px solid ${darkTheme.primary};
color: ${darkTheme.primary};
font-size: 16px;
border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media (max-width: 960px){
    font-size: 12px;
}
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
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

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Proyectos, insignias y certificados</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          He trabajado en varios proyectos. Desde el desarrollo de aplicaciones
          web (Front/Back) hasta el diseño de bases de datos y arquitecturas de
          software.
        </Desc>
        <ToggleGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            Todos
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "front"}
            onClick={() => setToggle("front")}
          >
            FrontEnd
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "back"}
            onClick={() => setToggle("back")}
          >
            Backend
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "arch"}
            onClick={() => setToggle("arch")}
          >
            Arquitectura
          </ToggleButton>
        </ToggleGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};
