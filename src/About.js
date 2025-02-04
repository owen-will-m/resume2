import styled from "styled-components";
import "./About.css";
import Subheader from "./Subheader";
export default function About() {
  return (
    <OuterContainer id="about">
      <AboutContainer>
        <H1>about</H1>
        <SectionContainer>
          <Subheader title="Bio" />
          Welcome to my website! I am an experienced and empathic software
          engineer with a background in UX design. Skilled in developing
          high-performance web applications using Vue, React, and TypeScript,
          with a strong emphasis on high quality and user-centric design.
          Currently, I'm a senior engineer on the design system team at Cisco
          Thousandeyes.
        </SectionContainer>
        <SectionContainer>
          <Subheader title="Contact" />

          <LinksContainer>
            <p>owen.will.m@gmail.com</p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="https://www.linkedin.com/in/will-owen-241961139/"
                target="_blank"
                rel="noreferrer"
                className="clickableLink"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/owen-will-m"
                target="_blank"
                rel="noreferrer"
                className="clickableLink"
              >
                Github
              </a>
            </div>
          </LinksContainer>
        </SectionContainer>
      </AboutContainer>
    </OuterContainer>
  );
}

const LinksContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  flex-wrap: wrap;
`;

const H1 = styled.h1`
  margin: 0;
`;

const OuterContainer = styled.div`
  display: flex;
`;

const SectionContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 900px;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  font-size: 18pt;
  padding-top: 2rem;
`;
