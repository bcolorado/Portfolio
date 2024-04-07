import React from "react";
import styled, { keyframes } from "styled-components";
import { darkTheme } from "../../../utils/Themes";
import { Bio } from "../../../data/constants";
import Typewriter from "typewriter-effect";
import picture from "../../../assets/portfolioPic.webp";
import "./btnStyles.css";

const HeroContainer = styled.div`
  display: flex;
  background-color: ${darkTheme.card_light};
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  `;

const HeroBg = styled.div`
  opacity: 0.5;
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90%;
  max-width: 1250px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-39%) translateY(-50%);

  @media (max-width: 960px) {
    display: none;
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
    font-size: 26px;
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

const morph = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
  object-fit: cover;
  object-position: center;
  animation: ${morph} 8s ease-in-out infinite;
  transition: all 1s ease-in-out;

  @media (max-width: 960px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Mi nombre es
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
            <a
              className="btn"
              href={Bio.resume}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Ver CV
            </a>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={picture} alt="Picture" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};
