import React from "react";

import '../styles/components/Thumb.css';

const Thumb = ({ image, title }) => {
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb__img" />
      <div className="thumb__background"></div>
      <h2 className="thumb__title">{title}</h2>
    </div>
  );
};

export default Thumb;