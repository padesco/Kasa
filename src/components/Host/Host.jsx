import React from "react";

import './Host.css';

function Host ({ host }) {
  // on défini la prénom et le nom séparé par un espace
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className="host">
      <div className="host__name">
        <p className="host__firstname">{name.trim()}</p>
        <p className="host__lastname">{lastname.trim()}</p>
      </div>
      <img src={host.picture} alt="" className="host__picture" />
    </div>
  );
};

export default Host;