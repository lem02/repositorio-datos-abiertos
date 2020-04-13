import React, { useState } from 'react';
import RepoDescription from '../RepoDescription/repoDescription';
import RepoData from '../RepoData/repoData';
import RepoDictionary from '../RepoDictionary/repoDictionary';
import RepoAssociated from '../RepoAssociated/repoAssociated';
import './repository.scss';

const Repository = ({ repoSelected }) => {
  const [content, setContent] = useState('description');

  return (
    <div className="repository">
      {repoSelected && (
        <h2 className="repository__title">{repoSelected.titulo}</h2>
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
