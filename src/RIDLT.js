import "./RIDLT.css";
import Modal from "./Modal";
import one from "./DLT/1.png";
import two from "./DLT/2.png";
import alt from "./alt.tiff";
import { LazyLoadImage } from 'react-lazy-load-image-component';



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
      <LazyLoadImage
      src={one}
      alt={alt}
      />
      <LazyLoadImage
      src={two}
      alt={alt}

      />

    </Modal>
  );
}
