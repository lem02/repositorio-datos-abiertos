import React, { useState, useEffect } from 'react';
import './searchResult.scss';

const SearchResult = ({ data, repoSelected, setRepoSelected, setShowInfo }) => {
  const [resultData, setResultData] = useState(data);
  const [usosFilter, setUsosFilter] = useState('Todos');
  const [accessFilter, setAccessFilter] = useState('Todos');
  const [updateFilter, setUpdateFilter] = useState('Todos');

  useEffect(() => {
    setResultData(() =>
      data.filter(
        (repo) =>
          (usosFilter === 'Todos' || repo.derechos_uso === usosFilter) &&
          (accessFilter === 'Todos' || repo.tipo_acc === accessFilter) &&
          (updateFilter === 'Todos' || repo.fecha_act_cat === updateFilter)
      )
    );
  }, [data, usosFilter, accessFilter, updateFilter]);

  return (
    <div className="search-result">
      <div className="search-result__filterbar">
        <select
          className="search-result__filterbar__item search-result__filterbar__item--stretched"
          value={usosFilter}
          onChange={(e) => setUsosFilter(e.target.value)}
        >
          <option value="Todos">Derechos de uso</option>
          <option value="Uso comercial permitido">
            Uso comercial permitido
          </option>
          <option value="Uso comercial no permitido">
            Uso comercial no permitido
          </option>
        </select>
        <select
          className="search-result__filterbar__item"
          value={accessFilter}
          onChange={(e) => setAccessFilter(e.target.value)}
        >
          <option value="Todos">Tipo de acceso</option>
          <option value="Gratuito">Gratuito</option>
          <option value="Restringido">Restringido</option>
        </select>
        <select
          className="search-result__filterbar__item search-result__filterbar__item--last"
          value={updateFilter}
          onChange={(e) => setUpdateFilter(e.target.value)}
        >
          <option value="Todos">Fecha de actualización</option>
          <option value="Últimos 3 meses">Últimos 3 meses</option>
          <option value="Último semestre">Últimos 6 meses </option>
          <option value="Último año">Últimos 12 meses</option>
        </select>
      </div>
      {resultData &&
        resultData.map((repo, index) => (
          <article
            key={index}
            className={`search-result__item ${
              repo === repoSelected ? 'search-result__item--selected' : ''
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
    </div>
  );
};

export default SearchResult;
