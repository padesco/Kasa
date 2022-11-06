import React, {useState} from "react";
import image from '../../assets/images/Vector-arrow.png';
import './Collapse.css';

function Collapse ({title, content}) {
  // on crée un state "open" et une fonction "setOpen"pour mettre à jour ce state
  // on attribue une valeur initiale avec "useState"
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <button type="button" className="collapse__button" onClick={() => setOpen(!open)}>
        {title}
        <img src={image} alt='flèche blanche' className={`collapse__arrow ${open}`}/>
      </button>
      <div className={`collapse__content ${open}`}>
        {/** utilisation de la méthode Array.isArray pour déterminer si l'objet passé en argument est un tableau
         * si c'et le cas on affiche le tableau en liste sinon on affiche juste le contenu dans un paragraphe */}
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