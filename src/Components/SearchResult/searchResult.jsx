import React from 'react';
import './searchResult.scss';

const SearchResult = ({
  dataResult,
  repoSelected,
  setRepoSelected,
  setShowInfo,
  filters,
  setFilters,
}) => {
  return (
    <div className="search-result">
      <div className="search-result__filterbar">
        <select
          className="search-result__filterbar__item search-result__filterbar__item--stretched"
          value={filters.usage}
          onChange={(e) => {
            setFilters({ usage: e.target.value });
          }}
        >
          <option value="0">Derechos de uso</option>
          <option value="1">Uso comercial permitido</option>
          <option value="2">Uso comercial no permitido</option>
        </select>
        <select
          className="search-result__filterbar__item"
          value={filters.access}
          onChange={(e) => {
            setFilters({ access: e.target.value });
          }}
        >
          <option value="0">Tipo de acceso</option>
          <option value="1">Gratuito</option>
          <option value="2">Restringido</option>
        </select>
        <select
          className="search-result__filterbar__item search-result__filterbar__item--last"
          value={filters.update}
          onChange={(e) => {
            setFilters({ update: e.target.value });
          }}
        >
          <option value="0">Fecha de actualización</option>
          <option value="1">Últimos 3 meses</option>
          <option value="2">Últimos 6 meses </option>
          <option value="3">Últimos 12 meses</option>
        </select>
      </div>
      {repoSelected &&
        dataResult.result.map((repo, index) => (
          <article
            key={index}
            className={`search-result__item ${
              repo.id === repoSelected.id ? 'search-result__item--selected' : ''
            }`}
            onClick={() => {
              setRepoSelected(repo);
              setShowInfo(true);
            }}
          >
            <div className="search-result__item__content">
              <h3>{repo.titulo_corto}</h3>
              <p>{`Última actualización: ${repo.ult_actualizacion}`}</p>
            </div>
          </article>
        ))}
      {dataResult.result && (dataResult.result.length === 0 || !repoSelected) && (
        <div className="search-result__empty">
          <p>La búsqueda no arrojó resultados</p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
