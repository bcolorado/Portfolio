import React from "react";
import styled from "styled-components";
import { darkTheme } from "../utils/Themes";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";

const HeroContainer = styled.div`
  display: flex;
  background-color: ${darkTheme.card_light}; 
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media screen and (max-width: 960px) {padding: 66px 16px;}
  @media screen and (max-width: 640px) {padding: 32px 16px;}
  z-index: 1;
  clip-path: clipPath: "polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)"
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1250px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 48px;
  color: ${darkTheme.text_primary};
  line-height: 68px;
  margin-bottom: 32px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 44px;
    line-height: 60px;
    margin-bottom: 28px;
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${darkTheme.text_primary};
  line-height: 62px;
  gap: 12px;
  display: flex;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${darkTheme.primary};
  cursor: pointer;
`;

const Subtitle = styled.div`
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 42px;
  color: ${darkTheme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 22px;
  }
`;
const ResumeButton = styled.div`
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${darkTheme.white};
  border-radius: 50px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(145deg, #e64c4c, #0046d1b3);
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  &:hover {
    font-size: 22px;
    width: 100%;
    max-width: 320px;
    padding: 18px 0;
  }
`;

export const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg></HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hola, mi nombre es
              <br />
              {Bio.name}
            </Title>
            <TextLoop>
              Soy
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <Subtitle>{Bio.description}</Subtitle>
            <ResumeButton href={Bio.resume} target="_blank">
              Ver CV
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer></HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};
