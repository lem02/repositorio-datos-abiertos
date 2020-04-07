import React from 'react';
import './repoDescription.scss';

const RepoDescription = () => {
  return (
    <div className="repo-description">
      <div className="repo-description__section">
        <h3>Descripción</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          incidunt perspiciatis beatae sit nostrum assumenda rem, ipsa quaerat
          aliquam animi recusandae distinctio fugiat facere adipisci accusamus!
          Asperiores placeat quia illum! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Error, distinctio. Eaque, voluptate ullam in
          suscipit beatae ipsum eveniet dolore temporibus, ducimus deleniti
          possimus asperiores exercitationem dolores, labore aut saepe facilis?
        </p>
      </div>
      <div className="repo-description__section">
        <h3>Última actialización</h3>
        <p>06 de abril de 2020</p>
      </div>
      <div className="repo-description__section">
        <h3>Versión actual</h3>
        <p>Versión 1</p>
      </div>
      <div className="repo-description__section">
        <h3>Frecuencia esperada de actualización</h3>
        <p>Anual</p>
      </div>
      <div className="repo-description__section">
        <h3>Conjunto de datos generado por</h3>
        <p>Equipo de Data UdeA</p>
      </div>
      <div className="repo-description__section">
        <h3>Organización</h3>
        <p>Universidad de Antioquia</p>
      </div>
      <div className="repo-description__section">
        <h3>Fuentes de información del conjunto de datos</h3>
        <p>Base de datos universitaria MOISES</p>
      </div>
      <div className="repo-description__section">
        <h3>Formatos disponibles para la descarga</h3>
        <p>CSV y JSON</p>
      </div>
    </div>
  );
};

export default RepoDescription;
