import React, { useState, useContext } from 'react';
import RepoDescription from '../RepoDescription/repoDescription';
import RepoData from '../RepoData/repoData';
import RepoDictionary from '../RepoDictionary/repoDictionary';
import RepoAssociated from '../RepoAssociated/repoAssociated';
import { SiteContext } from '../../Context/siteContext';
import './repository.scss';

const Repository = ({ repoSelected }) => {
  const [content, setContent] = useState('description');
  const { addItem } = useContext(SiteContext);

  return (
    <div className="repository">
      {repoSelected && (
        <header className="repository__header">
          <h2 className="repository__title">{repoSelected.titulo}</h2>
          <button onClick={() => addItem(repoSelected)}>
            Agregar a la solicitud
            <i className="fa fa-shopping-cart" />
          </button>
        </header>
      )}
      <div className="repository__content-selector">
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
          Repositorios relacionados
        </button>
      </div>
      <div className="repository__content">
        {content === 'description' && (
          <RepoDescription repoSelected={repoSelected} />
        )}
        {content === 'data' && <RepoData />}
        {content === 'dictionary' && <RepoDictionary />}
        {content === 'associated' && <RepoAssociated />}
      </div>
    </div>
  );
};

export default Repository;
