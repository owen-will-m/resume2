import  './Modal.css';

export default function Modal(props) {
  return (
      <div className="Modal">
        <div className="modalHeader">
            <div className="title">Project Highlight</div>
            <div className="close" onClick={props.onClose}>  <img src="close.svg" alt="shape1"/></div>
        </div>
        <div className="modalContainer">
            <h1>{props.title}</h1>
        {props.children}
        </div>
      </div>
  );
}
