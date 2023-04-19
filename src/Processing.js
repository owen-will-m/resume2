import "./Processing.css";
import Modal from "./Modal";
import Subheader from "./Subheader";

export default function Processing(props) {
  return (
    <Modal title="processing js artwork" onClose={props.onClose}>
      <div>
        With Processing, I created several small pieces of interactive artwork
        during my pandemic down-time. My goal in these projects was to explore
        the ways that nature can be imitated using relatively simple mathematics
        and computer graphics. I sought to make a relaxing experience for the
        user through natural imagery.
      </div>
      <div className="subContainer">
        <Subheader title="🌱 Draw Plants" />
        <a
          className="clickableLink"
          href="https://owen-will-m.github.io/plants/"
          target="_blank"
          rel="noreferrer"
        >
          Click here to view
        </a>
        <div>
          Inspired by Hayao Miyazaki, I created randomized programmatic plants
          that sprout from the ground and subsequently wilt and perish. Since
          the plants are programmatically generated, no two set of plants will
          ever be alike, just like in the natural world.
        </div>
      </div>
      <div className="subContainer">
        <Subheader title="🗿 Skip a Stone" />
        <a
          className="clickableLink"
          href="https://owen-will-m.github.io/stones/"
          target="_blank"
          rel="noreferrer"
        >
          Click here to view
        </a>
        <div>
          Taking inspiration from Monet and the impressionists, I wanted to see
          how random particles en masse could create a seemingly larger texture.
          Another fun component of this project was applying a sinusoidal
          function to create the surface of the water - another instance of the
          intersection of mathematics and nature.
        </div>
      </div>
      <div className="subContainer">
        <Subheader title="🍁 Falling Leaves" />
        <a
          className="clickableLink"
          href="https://owen-will-m.github.io/fall/"
          target="_blank"
          rel="noreferrer"
        >
          Click here to view
        </a>
        <div>
          I sought to create a relaxing and immersive experience with autumn
          leaves to help distract the user from the hustle and bustle of
          postmodern-capitalist America.
        </div>
      </div>
    </Modal>
  );
}
