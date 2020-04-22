import React from 'react';
import './searchResult.scss';

const SearchResult = ({ data, repoSelected, setRepoSelected }) => {
  return (
    <div className="search-result">
      {data &&
        data.map((repo, index) => (
          <article
            key={index}
            className={`search-result__item ${
              repo === repoSelected ? 'search-result__item--selected' : ''
            }`}
            onClick={() => {
              setRepoSelected(repo);
            }}
          >
            <div className="search-result__item__content">
              <h3>{repo.titulo}</h3>
              <p>{`Última actualización: ${repo.ult_actualizacion}`}</p>
            </div>
          </article>
        ))}
    </div>
  );
};

export default SearchResult;
