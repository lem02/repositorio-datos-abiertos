import React, { useState, useContext } from 'react';
import { SiteContext } from '../../Context/siteContext';
import Request from '../../Requests/apiRequests';
import './searchBar.scss';

const SearchBar = () => {
  const { setDataResult } = useContext(SiteContext);
  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    Request.get(`/findbykey/${search}`, (res) => {
      if (res.length < 1) {
        window.alert(`No se encontraron resultados para: ${search}`);
      } else {
        setDataResult(res);
      }
    });
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button type="submit" className="search-bar__button">
        <i className="fa fa-search" />
      </button>
    </form>
  );
};
export default SearchBar;
