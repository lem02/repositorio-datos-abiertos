import React, { useState, useEffect, useContext } from 'react';
import SearchResult from '../../Components/SearchResult/searchResult';
import RepoDescription from '../../Components/RepoDescription/repoDescription';
import RepoData from '../../Components/RepoData/repoData';
import RepoDictionary from '../../Components/RepoDictionary/repoDictionary';
import RepoAssociated from '../../Components/RepoAssociated/repoAssociated';
import { SiteContext } from '../../Context/siteContext';
import Request from '../../Requests/apiRequests';
import './repository.scss';

const Repository = ({
  match: {
    params: { search },
  },
}) => {
  const { order, addItem } = useContext(SiteContext);
  const [dataResult, setDataResult] = useState();
  const [repoSelected, setRepoSelected] = useState();
  const [content, setContent] = useState('description');
  const [message, setMessage] = useState();

  useEffect(() => {
    if (search && search !== '') {
      Request.get(`/findbykey/${search}`, (res) => {
        if (res.length > 0) {
          setDataResult(res);
          setRepoSelected(res[0]);
        }
      });
    }
  }, [search]);

  useEffect(() => {
    if (repoSelected && order.find((item) => item.id === repoSelected.id)) {
      setMessage('Ya está en el carrito');
    } else {
      setMessage('Agregar al carrito de datos');
    }
  }, [order, repoSelected]);

  return (
    <section className="repository">
      {dataResult ? (
        <>
          <section className="repository__search-result scroll-styles">
            <SearchResult
              data={dataResult}
              repoSelected={repoSelected}
              setRepoSelected={setRepoSelected}
            />
          </section>
          <section className="repository__selected scroll-styles">
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
              <button
                onClick={() => {
                  setContent('associated');
                }}
              >
                Tableros relacionados
              </button>
            </div>
            <div className="repository__selected__content">
              {content === 'description' && (
                <RepoDescription repoSelected={repoSelected} />
              )}
              {content === 'data' && <RepoData />}
              {content === 'dictionary' && <RepoDictionary />}
              {content === 'associated' && <RepoAssociated />}
            </div>
          </section>
        </>
      ) : (
        <section>La busqueda no arrojo resultado</section>
      )}
    </section>
  );
};

export default Repository;
