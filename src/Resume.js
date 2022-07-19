import "./Resume.css";
import pdf from "./will-owen-resume.pdf";
export default function Resume() {
  return (
    <div className="Resume">
      <h1>resume</h1>
      <a href={pdf} download>
        <div className="clickableLink">Click here to download PDF</div>
      </a>
      <div className="imgContainer">
        <img src="resume.png" alt="shape1" />
      </div>
    </div>
  );
}
