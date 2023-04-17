import "./About.css";
import Subheader from "./Subheader";

export default function About() {
  return (
    <div className="About" id="about">
      <h1>about</h1>
      <div className="bioHead">
        <Subheader title="Bio" />I am a Front-End Developer and UX Designer
        whose experience spans various disciplines and domains. Most recently, I
        was the lead UX designer at Avise, where I managed their design system,
        conducted user interviews, implemented accessibility improvements, and
        developed the frontend in React/Typescript.
      </div>
      <Subheader title="Contact" />
      <p>owen.will.m@gmail.com</p>
      <a
        href="https://www.linkedin.com/in/will-owen-241961139/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="clickableLink">LinkedIn</div>
      </a>
    </div>
  );
}
