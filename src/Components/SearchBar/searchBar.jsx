import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './searchBar.scss';

const SearchBar = ({ history }) => {
  const [search, setSearch] = useState();
  const [showBar, setShowBar] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search && search !== '') {
      setShowBar(false);
      history.push(`/repository/${search}`);
    }
  };

  return (
    <div className="search-bar">
      <button
        type="submit"
        className="search-bar__icon"
        onClick={() => {
          setShowBar(!showBar);
        }}
      >
        <i className={showBar ? 'fa fa-times' : 'fa fa-search'} />
      </button>

      <form
        className={`search-bar__form ${
          showBar ? 'search-bar__form--show' : ''
        }`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit" className="search-bar__form__button">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
};

export default withRouter(SearchBar);
