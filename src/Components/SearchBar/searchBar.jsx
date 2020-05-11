import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './searchBar.scss';

const SearchBar = ({ history }) => {
  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && search !== '') {
      history.push(`/repository/${search}`);
    }
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
export default withRouter(SearchBar);
