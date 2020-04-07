import React, { useState } from 'react';
import RepoDescription from '../../Components/RepoDescription/repoDescription';
import RepoData from '../../Components/RepoData/repoData';
import RepoDictionary from '../../Components/RepoDictionary/repoDictionary';
import RepoAssociated from '../../Components/RepoAssociated/repoAssociated';
import './repository.scss';

const Repository = () => {
  const [content, setContent] = useState('description');

  return (
    <div className="repository">
      <h2 className="repository__title">Titulo del repositorio</h2>
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
        {content === 'description' && <RepoDescription />}
        {content === 'data' && <RepoData />}
        {content === 'dictionary' && <RepoDictionary />}
        {content === 'associated' && <RepoAssociated />}
      </div>
    </div>
  );
};

export default Repository;
