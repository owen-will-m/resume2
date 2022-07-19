import "./RIDLT.css";
import Modal from "./Modal";

export default function HMP(props) {
  return (
    <Modal title="healthcare management portal" onClose={props.onClose}>
      <div>
      It’s no secret: the American health insurance system is a train wreck. We
      designed an experience that revamps the entire system. This software
      allows businesses to take healthcare into their own hands with their
      employees, rather than relying on expensive and inefficient insurance
      companies that leave their employees dissatisfied and underserved. With
      our health portal, businesses can manage their employees’ healthcare
      directly, making sure they’re delivered adequate care.
      </div>
      <img src="HEALTH/1.png" alt="img 1"></img>
      <img src="HEALTH/2.png" alt="img 1"></img>
    </Modal>
  );
}
