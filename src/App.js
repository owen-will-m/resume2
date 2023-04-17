import "./App.css";
import About from "./About";
import Projects from "./Projects";
import { useState } from "react";
import RIDLT from "./RIDLT";
import LC from "./LC";
import Processing from "./Processing";
import HMP from "./HMP";
import { ReactComponent as Background } from "./bg.svg";
import { HashLink } from "react-router-hash-link";

function App() {
  const [modal, setModal] = useState(null);
  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <h2>Will Owen</h2>
          <h4>
            UX Designer / Frontend Developer<br></br>
            San Francisco, California
          </h4>
        </div>
        <div className="header-right">
          <HashLink smooth to="/#about">
            <div className="navLink">
              <img className="move" src="shapes/shape1.svg" alt="shape1"></img>
              <h4>about</h4>
            </div>
          </HashLink>

          <div className="navLink">
            <HashLink smooth to="/#projects">
              <img className="move" src="shapes/shape2.svg" alt="shape1"></img>
              <h4>projects</h4>
            </HashLink>
          </div>
        </div>
      </div>
      <div className="outerPageContainer">
        <div className="pageContainer">
          <About key="1" />
          <Projects setModal={setModal} />
          {modal === "ri" ? <RIDLT onClose={() => setModal(null)} /> : null}
          {modal === "lc" ? <LC onClose={() => setModal(null)} /> : null}
          {modal === "pjs" ? (
            <Processing onClose={() => setModal(null)} />
          ) : null}
          {modal === "hmp" ? <HMP onClose={() => setModal(null)} /> : null}
        </div>
      </div>
      <div className="bg">
        <Background className="crystals" />
        {/* {active === "about" && <img src={profPic} alt="prof-pic" />} */}
      </div>
    </div>
  );
}

export default App;
