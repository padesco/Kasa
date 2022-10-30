import React from "react";
import { Link } from "react-router-dom";

import image from '../../assets/images/banner-home.png';
import lodgings from '../../assets/datas/lodgingList.json';
import Banner from '../../components/Banner/Banner';
import Thumb from '../../components/Thumb/Thumb';
import './Home.css';


const Lodgings = () => {
  return (
    <div className="home">
      <div className='home__banner'>
        <Banner image={image} texte="Chez vous, partout et ailleurs" alt="bord de mer avec côte rocheuse et sapin" />
      </div>
      <section className="home__lodgings">
        {lodgings.map((lodging) => {
          return (
            <article key={lodging.id}>
              <Link to={`/lodgings/${lodging.id}`}>
                <Thumb image={lodging.cover} title={lodging.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Lodgings;