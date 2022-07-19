import "./Processing.css";
import Modal from "./Modal";
import Subheader from "./Subheader";

export default function Processing(props) {
  return (
    <Modal title="processing js artwork" onClose={props.onClose}>
      <div>
        Javascript is certainly a forgotten medium for artwork. However,
        interactivity in digital artwork can amplify its impact on the user.
        With Processing, I created several small pieces of interactive artwork
        during my pandemic down-time. My goal in these projects was to explore
        the ways that nature can be imitated using relatively simple mathematics
        and computer graphics. I sought to make a relaxing experience for the
        user through natural imagery.Javascript is certainly a forgotten medium
        for artwork. However, interactivity in digital artwork can amplify its
        impact on the user. With Processing, I created several small pieces of
        interactive artwork during my pandemic down-time. My goal in these
        projects was to explore the ways that nature can be imitated using
        relatively simple mathematics and computer graphics. I sought to make a
        relaxing experience for the user through natural imagery.
      </div>
      <div className="subContainer">
        <Subheader title="🌱 Draw Plants" />
        <a href="https://owen-will-m.github.io/plants/" target="_blank">

        <div className="clickableLink">Click here to view</div>
        </a>
        <div>
          Inspired by Hayao Miyazaki’s Princess Mononoke, I created randomized
          programmatic plants that sprout from the ground and subsequently wilt
          and perish. These plants represent the cycle of life and death. Since
          the plants are programmatically generated, no two set of plants will
          ever be alike, just like in the natural world.
        </div>
      </div>
      <div className="subContainer">
        <Subheader title="🍁 Falling Leaves" />
        <a href="https://owen-will-m.github.io/fall/" target="_blank">
          <div className="clickableLink">Click here to view</div>
        </a>
        <div>
          Looking back, I fondly remember the autumn foliage accumulating in my
          back yard when I was a kid. This is why I sought to create a relaxing
          and immersive experience with autumn leaves to help distract the user
          from the hustle and bustle of postmodern-capitalist America and recall
          the primordial cycle that grounds us on this planet: the seasons.
        </div>
      </div>

      <div className="subContainer">
        <Subheader title="🌲 Draw Trees" />
        <a href="https://owen-will-m.github.io/trees/" target="_blank">

        <div className="clickableLink">Click here to view</div>
        </a>
        <div>
          Imitating nature in technology is very challenging. Order and chaos
          must be displayed in a perfect balance. In nature, we observe
          repeating patterns, but there’s always a level of variation. In this
          piece, I attempted to create the shape of trees with that balance in
          mind.
        </div>
      </div>

      <div className="subContainer">
        <Subheader title="🗿 Skip a Stone" />
        <a href="https://owen-will-m.github.io/stones/" target="_blank">

        <div className="clickableLink">Click here to view</div>
        </a>
        <div>
          Taking inspiration from Monet and the impressionists, I wanted to see
          how random particles en masse could create a seemingly larger texture.
          Another fun component of this project was applying a sinusoidal
          function to create the surface of the water - another instance of the
          intersection of mathematics and nature.
        </div>
      </div>
    </Modal>
  );
}
