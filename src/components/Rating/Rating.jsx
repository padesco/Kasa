import React from "react";

// style
import redstar from "../../assets/images/Vector-redstar.svg";
import greystar from "../../assets/images/Vector-greystar.svg";
import './Rating.css';

function Rating ({ rating }) {
  // on définie que la notation de l'hôte est sur 5 étoiles
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rating;