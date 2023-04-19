import styled from "styled-components";
import "./About.css";
import Subheader from "./Subheader";
import profpic from "./prof-pic.png";
export default function About() {
  return (
    <OuterContainer id="about">
      <AboutContainer>
        <H1>about</H1>
        <SectionContainer>
          <Subheader title="Bio" />I am a Front-End Developer and UX Designer
          whose experience spans various disciplines and domains. Most recently,
          I was the lead UX designer at Avise, where I managed their design
          system, conducted user interviews, implemented accessibility
          improvements, and developed the frontend in React/Typescript.
        </SectionContainer>
        <SectionContainer>
          <Subheader title="Contact" />
          <p>owen.will.m@gmail.com</p>
          <a
            href="https://www.linkedin.com/in/will-owen-241961139/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="clickableLink">LinkedIn</div>
          </a>
        </SectionContainer>
      </AboutContainer>
      <ImageContainer>
        <Image src={profpic} />
      </ImageContainer>
    </OuterContainer>
  );
}

const H1 = styled.h1`
margin:0;
`;

const Image = styled.img`
  width: 350px;
`;

const OuterContainer = styled.div`
  display: flex;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 100px;
  align-items: center;
  flex: 1;
  margin: 2rem;
`;

const SectionContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AboutContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  min-height: 0;
  /* width:40vw; */
  margin: 2rem;
  font-size: 18pt;
  min-height: calc(100vh - 8rem);
  padding-top: 2rem;
`;
