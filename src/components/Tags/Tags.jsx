import React from "react";

import './Tags.css';

function Tags ({ getTag }) {
  return (
    <div className="tag">
      <p className="tag__text">{getTag}</p>
    </div>
  );
};

export default Tags;