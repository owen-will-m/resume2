import  './Subheader.scss';

export default function Subheader(props) {
  return (
      <div className="Subheader">
        <h3>{props.title}</h3>
        {/* <div className="zigzag"/> */}
      </div>
  );
}
