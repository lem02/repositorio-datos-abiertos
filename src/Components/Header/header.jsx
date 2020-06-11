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
          <img src="/img/logo.png" alt="Logo Datos Abiertos UdeA" />
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
