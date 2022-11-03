import React from "react";
import { useState } from "react";

//Style
import arrowBack from '../../assets/images/arrow-back.svg';
import arrowForward from '../../assets/images/arrow-forward.svg';
import './Carrousel.css';

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  // utilisation de ternaires pour aller à l'image suivante ou précèdente
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
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
        <div className="carrousel__arrow">
          <div className="carrousel__previous" onClick={prevSlide}>
            <img src={arrowBack} alt="fleche blanche vers la gauche" className="carrousel__previous-icon" />
          </div>
          <div className="carrousel__next" onClick={nextSlide}>
            <img src={arrowForward} alt="fleche blanche vers la droite" className="carrousel__next-icon" />
          </div>
        </div>
    </div>
  );
};

export default Carrousel;