import React, { useEffect } from 'react';
import './searchResult.scss';

const SearchResult = ({ data, repoSelected, setRepoSelected }) => {
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <section className="search-result">
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
            <img src="" alt="" />
            <div className="search-result__item__content">
              <h3>{repo.titulo}</h3>
              <p>{`Última actualización: ${repo.ult_actualizacion}`}</p>
            </div>
          </article>
        ))}
    </section>
  );
};

export default SearchResult;
