import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Powered by Data UdeA</p>
      <p>
        <a href="mailto:data@udea.edu.co">data@udea.edu.co</a>
      </p>
      <p>
        <span>Consulta nuestra </span>
        <a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/politica-tratamiento-datos-personales">
          política de tratamiento de datos personales
        </a>
      </p>
    </footer>
  );
};

export default Footer;
