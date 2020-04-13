import React, { useEffect } from 'react';
import './repoDescription.scss';

const RepoDescription = ({ repoSelected }) => {
  useEffect(() => {
    if (repoSelected) {
      console.log(repoSelected);
    }
  }, [repoSelected]);

  return (
    <div className="repo-description">
      {repoSelected && (
        <>
          <div className="repo-description__section">
            <h3>Descripción</h3>
            <p>{repoSelected.descripcion}</p>
          </div>
          <div className="repo-description__section">
            <h3>Última actialización</h3>
            <p>{repoSelected.ult_actualizacion}</p>
          </div>
          <div className="repo-description__section">
            <h3>Versión actual</h3>
            <p>{repoSelected.version_act}</p>
          </div>
          <div className="repo-description__section">
            <h3>Frecuencia esperada de actualización</h3>
            <p>{repoSelected.frec_esp_act}</p>
          </div>
          <div className="repo-description__section">
            <h3>Conjunto de datos generado por</h3>
            <p>{repoSelected.generado_por}</p>
          </div>
          <div className="repo-description__section">
            <h3>Organización</h3>
            <p>{repoSelected.org}</p>
          </div>
          <div className="repo-description__section">
            <h3>Fuentes de información del conjunto de datos</h3>
            <p>{repoSelected.fuente}</p>
          </div>
          <div className="repo-description__section">
            <h3>Formatos disponibles para la descarga</h3>
            <p>{repoSelected.formatos_disp}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default RepoDescription;
