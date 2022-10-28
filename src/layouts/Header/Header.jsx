import React from 'react';
import { NavLink } from 'react-router-dom';

//Style
import './Header.css';
import LogoHeader from '../../assets/images/LOGO-header.svg';

const Header = () => {
    return (
        <header>
          <img src={LogoHeader} alt="Logo Kasa rouge" />
          <nav className="navlink">
            <NavLink to="/home" className="link">Accueil</NavLink>
            <NavLink to="/about" className="link">A Propos</NavLink>
          </nav>
        </header>
      );
    }

export default Header;