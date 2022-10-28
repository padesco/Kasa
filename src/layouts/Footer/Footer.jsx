import React from "react";

//Style
import './Footer.css';
import logoFooter from '../../assets/images/LOGO-footer.svg';

function Footer() {
  const effectiveYear = new Date().getFullYear();

  return (
    <footer>
      <img src={logoFooter} alt="Logo Kasa noir" />
      <p>© {effectiveYear} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;