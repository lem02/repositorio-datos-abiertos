import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/cart';
import SearchBar from '../SearchBar/searchBar';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content max-page-width">
        <Link to="/" className="header__content__logo">
          <img
            src="http://udea.edu.co/wps/wcm/connect/udea/3ef4bbd1-4ae7-4c87-b843-685c6f017501/logo-udea.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_L8L8H8C0LODDC0A6SSS2AD2GO4-3ef4bbd1-4ae7-4c87-b843-685c6f017501-lr.XbEn"
            alt="Logo Universidad de Antioquia"
          />
        </Link>
        <div className="header__content__options">
          <SearchBar />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
