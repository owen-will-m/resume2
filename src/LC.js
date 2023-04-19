import "./RIDLT.css";
import Modal from "./Modal";

export default function LC(props) {
  return (
    <Modal title="lewis & clark expedition maps" onClose={props.onClose}>
      <a
        href="http://corps-discovery-online.s3-us-west-2.amazonaws.com/index.html"
        target="_blank"
        className="clickableLink"
        rel="noreferrer"
      >
        Click here to view
      </a>
      <div>
        When a college is named after two pertinent historical figures, it needs
        to have some way to take account of them! That’s why I collaborated with
        my college’s library, IT staff, and history students to make a webmap
        that documents the Lewis & Clark Expedition. Leveraging React and
        Leaflet, this Javascript application will teach you all about their
        expedition through step-by-step waypoints.
      </div>
      <img src="lcmaps.png" alt="LCMAP"></img>
    </Modal>
  );
}
