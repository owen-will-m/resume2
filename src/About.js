import  './About.css';
import Subheader from './Subheader';

export default function About() {
  return (
      <div className="About">
<h1>about</h1>
<div className="bioHead">
<Subheader title="📓 Bio" />
I am a passionate and curious UX Designer and Front-End Developer whose experience spans various disciplines and domains. Most recently, I was the lead UX designer at Avise, where I managed their design system, conducted user interviews, implemented accessibility improvements, and developed the frontend in React/Typescript. 
</div>
<Subheader title="📧 Email" />
      owen.will.m@gmail.com
      <Subheader title="👔 LinkedIn" />
      <a href="https://www.linkedin.com/in/william-owen-241961139/" target="_blank">
        <div className="clickableLink">Click here to view</div>
      </a>
      </div>
  );
}

