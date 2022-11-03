import React, {useState} from "react";
import image from '../../assets/images/Vector-arrow.png';
import './Collapse.css';

function Collapse ({title, content}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <button type="button" className="collapse__button" onClick={() => setOpen(!open)}>
        {title}
        <img src={image} alt='flèche blanche' className={`collapse__arrow ${open}`}/>
      </button>
      <div className={`collapse__content ${open}`}>
        {Array.isArray(content) ? (
          <ul className="collapse__information">
            {content.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        ) : (
          <p className="collapse__information">{content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;