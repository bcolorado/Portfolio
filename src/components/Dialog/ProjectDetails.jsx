import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../utils/Themes';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${darkTheme.card};
  color: ${darkTheme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${darkTheme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${darkTheme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${darkTheme.text_secondary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

const Image = styled.img`
  width: ${(props) => (props?.type === 'cert' ? '340px' : '100%')};
  align-self: center;
  border-radius: 12px;
  margin-top: 30px;
  object-fit: contain;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${darkTheme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.color || darkTheme.primary};
  background-color: ${(props) => props.color + 15 || darkTheme.primary + 15};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${darkTheme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${darkTheme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${darkTheme.primary};
  ${({ dull }) =>
    dull &&
    `
        background-color: ${darkTheme.bgLight};
        color: ${darkTheme.text_secondary};
        &:hover {
            background-color: ${darkTheme.bg + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${darkTheme.primary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
  target: _blank;
  &:hover {
    color: ${darkTheme.primary};
  }
`;

const StyledCloseBtn = styled.div`
  transition: color 0.3s ease;
  &:hover {
    color: ${darkTheme.primary};
  }
`;

export const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  const handleClose = () => {
    setOpenModal({ state: false, project: null });
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container onClick={handleClose}>
        <Wrapper onClick={stopPropagation}>
          <StyledCloseBtn>
            <CloseRounded
              style={{
                position: 'absolute',
                top: '10px',
                right: '20px',
                cursor: 'pointer',
              }}
              onClick={() => setOpenModal({ state: false, project: null })}
            />
          </StyledCloseBtn>
          <Image type={project.category} src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={`${tag.name}-${index}`} color={tag.color}>
                {tag.name}
              </Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project.member && (
            <>
              <Label>Miembros</Label>
              <Members>
                {project?.member.map((member, index) => (
                  <Member key={`${member.name}-${index}`}>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>

                    <StyledLink
                      target='_blank'
                      rel='noopener noreferrer'
                      href={member.github}
                    >
                      <GitHub />
                    </StyledLink>

                    <StyledLink
                      target='_blank'
                      rel='noopener noreferrer'
                      href={member.linkedin}
                    >
                      <LinkedIn />
                    </StyledLink>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            {project?.category !== 'arch' && project?.category !== 'cert' && (
              <Button dull href={project?.github} target='new'>
                Ver código
              </Button>
            )}

            {project?.category !== 'back' && project?.category !== 'cert' && (
              <Button href={project?.webapp} target='new'>
                Ver proyecto
              </Button>
            )}

            {project?.category === 'cert' && (
              <Button href={project?.webapp} target='new'>
                Ver Certificado
              </Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};
