import React, {useState} from "react";
import image from '../../assets/images/Vector-arrow.png';
import './Collapse.css';
// possible d'ajuster l'ouverture du collapse avec usestate

function Collapse ({title, content}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <button type="button" className="collapse__button" onClick={() => setOpen(!open)}>
        {title}
        <img src={image} alt='flèche blanche' className="collapse__arrow"/>
      </button>
      <div className="collapse__content">
        {open && <div className="collapse__information">{content}</div>}
      </div>
    </div>
  );
}

export default Collapse;