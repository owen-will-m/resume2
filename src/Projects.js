import styled from "styled-components";
import "./Projects.css";
import Section from "./Section";

export default function Projects(props) {
  return (
    <div className="Projects">
      <div style={{ marginBottom: "40px" }} id="projects"></div>
      <h1>projects</h1>
      <div className="wrappingColumnContainer">
        <SectionsWrapper>
          <Section
            title={"Ojichan: Japanese Quiz App"}
            image={"./ojichan-screenshot.png"}
            callback={() => {
              window.open("https://ojichan.org", "_blank");
            }}
            description={
              "Independently designed & developed React app to accelerate Japanese reading skills for language learners"
            }
          />
          <Section
            title={"Avise"}
            image={"./avise-screenshot.png"}
            callback={() => {
              window.open("https://avise.com", "_blank");
            }}
            description={"Accounting software for the 21st century. There, I managed the design system and developed the frontend"}
          />
        </SectionsWrapper>
        <SectionsWrapper>
          <Section
            title="Processing JS Artwork"
            callback={() => props.setModal("pjs")}
            image={"./processing-thumbnail.png"}
            description={
              "Interactive artwork made in Processing.js for RISD classwork."
            }
          />
          <Section
            title="Lewis & Clark Web Map"
            callback={() => props.setModal("lc")}
            image={"lcmaps.png"}
            description={
              "Historical Archive of the Lewis & Clark expedition built with React-Leaflet"
            }
          />
        </SectionsWrapper>
        <SectionsWrapper>
          <Section
            title="R.I. Department of Labor Redesign"
            callback={() => props.setModal("ri")}
            image={"DLT/1.png"}
            description={
              "Redesign of the deprecated Rhode Island Unemployment Claim System"
            }
          />
          <Section
            title="Healthcare Portal Design"
            callback={() => props.setModal("hmp")}
            image={"HEALTH/1.png"}
            description={"Reimagined healthcare client management system"}
          />
        </SectionsWrapper>
      </div>
    </div>
  );
}
const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
`;
