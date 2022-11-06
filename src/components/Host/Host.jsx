import React from "react";

import './Host.css';

function Host ({ host }) {
  // on sépare d'un espace le nom et le prénom de l'hôte
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