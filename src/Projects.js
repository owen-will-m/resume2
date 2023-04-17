import "./Projects.css";
import Subheader from "./Subheader";

export default function Projects(props) {
  return (
    <div className="Projects" id="projects">
      <h1>projects</h1>
      <div className="wrappingColumnContainer">
        <div className="wrappingColumn">
          <Subheader title="Development" />
          <div className="clickableLink" onClick={() => props.setModal("pjs")}>
            Processing JS Artwork
          </div>
          <div className="clickableLink" onClick={() => props.setModal("lc")}>
            Lewis & Clark Expedition Maps
          </div>
        </div>
        <div className="wrappingColumn">
          <Subheader title="Design" />
          <div className="clickableLink" onClick={() => props.setModal("ri")}>
            Rhode Island Unemployment Redesign
          </div>
          <div className="clickableLink" onClick={() => props.setModal("hmp")}>
            Healthcare Management Portal
          </div>
        </div>
      </div>
    </div>
  );
}
