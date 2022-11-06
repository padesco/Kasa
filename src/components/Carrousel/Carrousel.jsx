import React from "react";
import { useState } from "react";

//Style
import arrowBack from '../../assets/images/arrow-back.svg';
import arrowForward from '../../assets/images/arrow-forward.svg';
import './Carrousel.css';

function Carrousel ({ slides }) {
  // on crée un state "current" et une fonction "setCurrent"pour mettre à jour ce state
  // on attribue une valeur initiale avec "useState"
  const [current, setCurrent] = useState(0);
  // on détermine le nombre d'image pour afficher les flèches de défilement ou non
  const length = slides.length;
  // utilisation de ternaires pour aller à l'image suivante ou précèdente
  const nextSlide = () => {
    // si l'index image est strictement égale à la dernière image alors on retourne à l'image index 0 (première image)
    // sinon on passe à l'image index suivante
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    // si l'index image est strictement égale à l'index 0 alors on retourne à l'image index length -1 (dernière image)
    // sinon on passe à l'image index précèdente
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carrousel">
      {/* Loop to display pictures */}
      {slides.map((picture, index) => {
        return (
          // utilisation d'un ternaire pour que le className s'applique sur l'image actuelle affiché
          <div key={index} className={index === current ? 
          "carrousel__active" : null }>
            {index === current && (
              <img src={picture} alt="" className="carrousel__picture" />
            )}
          </div>
        );
      })}
      {/** si le nombre d'image est strictement supérieur à 1 alors on affiche les flèches du carrousel */}
      {length > 1 &&
        <div className="carrousel__arrow">
          <div className="carrousel__previous" onClick={prevSlide}>
            <img src={arrowBack} alt="fleche blanche vers la gauche" className="carrousel__previous-icon" />
          </div>
          <div className="carrousel__next" onClick={nextSlide}>
            <img src={arrowForward} alt="fleche blanche vers la droite" className="carrousel__next-icon" />
          </div>
        </div>
      }
    </div>
  );
};

export default Carrousel;