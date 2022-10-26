import React from "react";

import '../../styles/components/layout/Banner.css';

const Banner = ({ image }) => {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__img" />
      <div className="banner__background"></div>
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;