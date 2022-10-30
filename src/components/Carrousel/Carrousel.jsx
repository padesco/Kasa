import React from "react";
import { useState } from "react";

//Style
import arrowBack from '../../assets/images/arrow-back.svg';
import arrowForward from '../../assets/images/arrow-forward.svg';
import './Carrousel.css';

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carrousel">
      {slides.map((picture, index) => {
        return (
          <div key={index} className={index === current ? 
          "carrousel__active" : null }>
            {index === current && (
              <img src={picture} alt="" className="carrousel__picture" />
            )}
          </div>
        );
      })}
      {length > 1 ? (
        <div className="carrousel__arrow">
          <div className="carrousel__previous" onClick={prevSlide}>
            <img src={arrowBack} alt="fleche blanche vers la gauche" className="carrousel__previous-icon" />
          </div>
          <div className="carrousel__next" onClick={nextSlide}>
            <img src={arrowForward} alt="fleche blanche vers la droite" className="carrousel__next-icon" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Carrousel;