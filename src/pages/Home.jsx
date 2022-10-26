import React from "react";
import { Link } from "react-router-dom";

import image from '../assets/banner-home.png';
import lodgings from '../datas/lodgingList.json';
import Banner from '../components/layout/Banner';
import Thumb from '../components/Thumb';
import '../styles/pages/Home.css';


const Lodgings = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <Banner image={image} alt="bord de mer avec côte rocheuse et sapin" />
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