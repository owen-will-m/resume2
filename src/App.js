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
import styled, { keyframes } from "styled-components";

function App() {
  const [modal, setModal] = useState(null);
  return (
    <MainContainer>
      <Header>
        <HeaderLeft>
          <h2>Will Owen</h2>
          <h4>
            Frontend Developer / UX Designer<br></br>
            San Francisco, California
          </h4>
        </HeaderLeft>
        <HeaderRight>
          <NavLink smooth to="/#about">
            <img className="move" src="shapes/shape1.svg" alt="shape1"></img>
            <h4>about</h4>
          </NavLink>

          <NavLink smooth to="/#projects">
            <img className="move" src="shapes/shape2.svg" alt="shape1"></img>
            <h4>projects</h4>
          </NavLink>
        </HeaderRight>
      </Header>
      <OuterPageContainer>
        <PageContainer>
          <About key="1" />
          <Projects setModal={setModal} />
          {modal === "ri" ? <RIDLT onClose={() => setModal(null)} /> : null}
          {modal === "lc" ? <LC onClose={() => setModal(null)} /> : null}
          {modal === "pjs" ? (
            <Processing onClose={() => setModal(null)} />
          ) : null}
          {modal === "hmp" ? <HMP onClose={() => setModal(null)} /> : null}
        </PageContainer>
      </OuterPageContainer>
      <BG>
        <Background className="crystals" />
        {/* {active === "about" && <img src={profPic} alt="prof-pic" />} */}
      </BG>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
`;

const Header = styled.div`
  background-color: #f5edee;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const HeaderLeft = styled.div`
  margin: 1rem;
  margin-left: 2rem;
  margin-top: 1rem;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4rem;
  margin: 1rem;
  margin-right: 2rem;
`;

const wiggleAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  16.5% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  83.5% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const NavLink = styled(HashLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 18pt;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    cursor: pointer;

    > .move {
      animation: ${wiggleAnimation} 0.3s infinite;
      position: relative;
      top: -10px;
    }
  }
`;

const PageContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  min-height: 0;
  overflow: auto;
  margin-left: 0rem;
`;

const OuterPageContainer = styled.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  width: 100%;
  /* align-items:center; */
  margin: auto;
  /* max-width:1000px; */
`;

const BG = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -10;
  background-color: #f0e8d1;
  overflow: hidden;
`;
