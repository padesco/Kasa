import React from "react";

import './Banner.css';

function Banner ({ image, texte }) {
  return (
    <div className="banner">
      <img src={image} alt="bannière" className="banner__img" />
      <div className="banner__background"></div>
      <span className="banner__text">{texte}</span>
    </div>
  );
};

export default Banner;