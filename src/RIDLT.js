import "./RIDLT.css";
import Modal from "./Modal";
import styled from "styled-components";

export default function RIDLT(props) {
  return (
    <Modal title="rhode island unemployment redesign" onClose={props.onClose}>
      <div>
        In the wake of the COVID-19 pandemic and ensuing economic crisis, state
        unemployment websites across the country were being inundated with
        thousands of additional unemployment claims. The Rhode Island Department
        of Labor and Training’s (RIDLT) website was no exception. In partnership
        with Amazon Web Services (AWS), we reimagined their 20-year-old
        unemployment system, saving it from failure. We worked to lower call
        center volume, increase the speed of benefits delivery, and increase
        overall customer satisfaction. RIDLT was ecstatic with our timely and
        high-quality designs.
      </div>
      <ImageWrapper>
        <Image src={"DLT/1.png"} />
        <Image src={"DLT/2.png"} />
      </ImageWrapper>
    </Modal>
  );
}
export const ImageWrapper = styled.div`
  display: flex;
  gap:40px;
`;

export const Image = styled.img`
flex:1;
min-width:10px;

`;
