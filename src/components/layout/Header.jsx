import { NavLink } from 'react-router-dom';

//Style
import '../../styles/components/layout/Header.css';
import LogoHeader from "../../assets/LOGO-header.svg";

const Header = () => {
    return (
        <nav className="header">
          <NavLink to="/">
            <img src={LogoHeader} alt="Logo Kasa rouge" className="header__img" />
          </NavLink>
          <div className="header__navlink">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
            >
              A propos
            </NavLink>
          </div>
        </nav>
      );
    };

export default Header;