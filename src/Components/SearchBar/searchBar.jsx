import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './searchBar.scss';

const SearchBar = ({ history }) => {
  const [search, setSearch] = useState();
  const [showForm, setShowForm] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search && search !== '') {
      setShowForm(!showForm);
      history.push(`/repository/${search}`);
    }
  };

  return (
    <div className="search-bar">
      <button
        type="submit"
        className="search-bar__icon"
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        <i className={showForm ? 'fa fa-times' : 'fa fa-search'} />
      </button>

      <form
        className={`search-bar__form ${
          showForm ? 'search-bar__form--show' : ''
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
