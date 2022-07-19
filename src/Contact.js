import "./Contact.css";
import Subheader from "./Subheader";

export default function Contact() {
  return (
    <div className="Contact">
      <h1>contact</h1>
      <Subheader title="📧 Email" />
      owen.will.m@gmail.com
      <Subheader title="👔 LinkedIn" />
      <a href="https://www.linkedin.com/in/william-owen-241961139/" target="_blank">
        <div className="clickableLink">Click here to view</div>
      </a>
    </div>
  );
}
