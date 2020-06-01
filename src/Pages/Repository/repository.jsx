import React, { useState, useEffect, useContext, useReducer } from 'react';
import SearchResult from '../../Components/SearchResult/searchResult';
import RepoDescription from '../../Components/RepoDescription/repoDescription';
import RepoData from '../../Components/RepoData/repoData';
import RepoDictionary from '../../Components/RepoDictionary/repoDictionary';
import { SiteContext } from '../../Context/siteContext';
import Request from '../../Requests/apiRequests';
import './repository.scss';

const Repository = ({
  match: {
    params: { type, value },
  },
}) => {
  const { order, addItem, breakpoint } = useContext(SiteContext);
  const [initial, setInitial] = useState(true);
  const [dataResult, setDataResult] = useState([]);
  const [repoSelected, setRepoSelected] = useState();
  const [content, setContent] = useState('description');
  const [message, setMessage] = useState();
  const [showInfo, setShowInfo] = useState();
  const reducer = (prev, newFilter) => ({ ...prev, ...newFilter });
  const initialState = { usage: 0, access: 0, update: 0, page: 1 };
  const [filters, setFilters] = useReducer(reducer, initialState);

  useEffect(() => {
    let req = '';
    if (type && value) {
      switch (type) {
        case 'busqueda':
          req = `${value}/${filters.usage}/${filters.access}/${filters.update}/0`;
          break;

        case 'categoria':
          req = `all/${filters.usage}/${filters.access}/${filters.update}/${value}`;
          break;

        case 'popular':
          req = `pop/${filters.usage}/${filters.access}/${filters.update}/0`;
          break;

        default:
          break;
      }
    }
    Request.get(`/reps/${req}/${filters.page}`, ({ data }) => {
      if (data) {
        setShowInfo(false);
        setDataResult(data);
        if (initial && data.result.length > 0 && type === 'popular') {
          setInitial(false);
          setRepoSelected(
            data.result.find((repo) => repo.id === parseInt(value))
          );
        } else if (data.result.length > 0) {
          setRepoSelected(data.result[0]);
        } else {
          setRepoSelected(null);
        }
      }
    });
    // eslint-disable-next-line
  }, [type, value, filters]);

  useEffect(() => {
    if (repoSelected && order.find((item) => item.id === repoSelected.id)) {
      setMessage('Ya está en el carrito');
    } else {
      setMessage('Agregar al carrito de datos');
    }
  }, [order, repoSelected]);

  return (
    <section className="repository max-page-width min-page-height">
      <section
        className={`repository__search-result ${
          !breakpoint.large && showInfo ? 'hide' : ''
        }`}
      >
        <h2 className="repository__search-result__title">
          Resultados de la búsqueda
        </h2>
        <SearchResult
          dataResult={dataResult}
          repoSelected={repoSelected}
          setRepoSelected={setRepoSelected}
          setShowInfo={setShowInfo}
          filters={filters}
          setFilters={setFilters}
        />
      </section>
      <section
        className={`repository__selected ${
          !breakpoint.large && !showInfo ? 'hide' : ''
        }`}
      >
        <div
          className="repository__selected__back-button"
          onClick={() => {
            setShowInfo(false);
          }}
        >
          <i className="fa fa-chevron-left" />
          <span>Volver a los resultados</span>
        </div>
        {repoSelected && (
          <header className="repository__selected__header">
            <h2 className="repository__selected__title">
              {repoSelected.titulo}
            </h2>
            <button onClick={() => addItem(repoSelected)}>
              {message}
              <i className="fa fa-shopping-cart" />
            </button>
          </header>
        )}
        <div className="repository__selected__content-selector">
          <button
            onClick={() => {
              setContent('description');
            }}
          >
            Descripción
          </button>
          <button
            onClick={() => {
              setContent('data');
            }}
          >
            Previsualizar
          </button>
          <button
            onClick={() => {
              setContent('dictionary');
            }}
          >
            Diccionario
          </button>
        </div>
        {repoSelected && (
          <div className="repository__selected__content">
            {content === 'description' && (
              <RepoDescription repoSelected={repoSelected} />
            )}
            {content === 'data' && <RepoData repoSelected={repoSelected} />}
            {content === 'dictionary' && (
              <RepoDictionary repoSelected={repoSelected} />
            )}
          </div>
        )}
      </section>
    </section>
  );
};

export default Repository;
