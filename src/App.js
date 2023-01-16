import "./App.css";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import { useState } from "react";
import RIDLT from "./RIDLT";
import LC from "./LC";
import Processing from "./Processing";
import HMP from "./HMP";
import { ReactComponent as Background } from "./bg.svg";
import profPic from "./prof-pic.png";

function App() {
  const [active, setActive] = useState("about");
  const [modal, setModal] = useState(null);
  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <h2>Will M. Owen</h2>
          <h4>
            UX Designer / Frontend Developer<br></br>
            San Francisco, California
          </h4>
        </div>
        <div className="header-right">
          <div className="navLink" onClick={() => setActive("about")}>
            <img className="move" src="shapes/shape1.svg" alt="shape1"></img>
            <h4
              style={
                active === "about" ? { textDecoration: "underline" } : null
              }
            >
              about
            </h4>
          </div>
          <div className="navLink" onClick={() => setActive("projects")}>
            <img  className="move" src="shapes/shape2.svg" alt="shape1"></img>
            <h4
              style={
                active === "projects" ? { textDecoration: "underline" } : null
              }
            >
              projects
            </h4>
          </div>
          <div className="navLink" onClick={() => setActive("resume")}>
            <img className="move" src="shapes/shape3.svg" alt="shape1"></img>
            <h4
              style={
                active === "resume" ? { textDecoration: "underline" } : null
              }
            >
              resume
            </h4>
          </div>
          <div className="navLink" onClick={() => setActive("contact")}>
            <img className="move" src="shapes/shape4.svg" alt="shape1"></img>
            <h4
              style={
                active === "contact" ? { textDecoration: "underline" } : null
              }
            >
              contact
            </h4>
          </div>
        </div>
      </div>
      <div className="pageContainer">

        {active === "about" ? <About key="1"/> : null}
        {active === "projects" ? <Projects setModal={setModal} /> : null}
        {active === "resume" ? <Resume /> : null}
        {active === "contact" ? <Contact /> : null}
        {modal === "ri" ? <RIDLT onClose={() => setModal(null)} /> : null}
        {modal === "lc" ? <LC onClose={() => setModal(null)} /> : null}
        {modal === "pjs" ? <Processing onClose={() => setModal(null)} /> : null}
        {modal === "hmp" ? <HMP onClose={() => setModal(null)} /> : null}
      </div>
      <div className="bg">
        <Background className="crystals"/>
        {active === "about" && <img src={profPic} alt="prof-pic" />}
      </div>
    </div>
  );
}

export default App;
