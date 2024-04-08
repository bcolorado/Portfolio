import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../utils/Themes";

const Card = styled.div`
  width: 330px;
  height: 520px;
  background-color: ${darkTheme.card};
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 10px 4px rgba(230, 76, 76, 0.3);
    border: 2px solid rgba(230, 76, 76, 0.3);
    filter: brightness(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${darkTheme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: ${props => (props.type === "cert" ? "scale-down" : "cover")};
  loading: lazy;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Tag = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.color || darkTheme.primary};
  background-color: ${props => (props.color + 15) || (darkTheme.primary + 15)};
  padding: 2px 8px;
  border-radius: 10px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${darkTheme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${darkTheme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${darkTheme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${darkTheme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${darkTheme.card};
`;
const Button = styled.a`
  color: ${darkTheme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;

export const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image type={project.category} src={project.image} alt="project pic" loading="lazy" />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={`projectCardTag-${index}`} color={tag.color}>{tag.name}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={`projectCardMember-${index}`} src={member.img} alt={`projectCardMember-${index}`} loading="lazy" />
        ))}
      </Members>
    </Card>
  );
};
