import "./RIDLT.css";
import Modal from "./Modal";
import { Image, ImageWrapper } from "./RIDLT";

export default function HMP(props) {
  return (
    <Modal title="healthcare management portal" onClose={props.onClose}>
      <div>
        As an imaginative exercise for a large healthcare client, we designed an
        experience that revamps their provider network system. This software would allow
        businesses to take healthcare into their own hands with their employees,
        rather than relying on expensive and inefficient insurance companies
        that leave their employees dissatisfied and underserved.
      </div>
      <ImageWrapper>
        <Image src="HEALTH/1.png" alt="img 1" />
        <Image src="HEALTH/2.png" alt="img 1" />
      </ImageWrapper>
    </Modal>
  );
}
