import React from "react";

//Style
import '../../styles/components/layout/Footer.css';
import logoFooter from '../../assets/LOGO-footer.svg';

function Footer() {
  const effectiveYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <img src={logoFooter} alt="Logo Kasa noir" className="footer__logo" />
      <p className="footer__text">
      © {effectiveYear} Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;