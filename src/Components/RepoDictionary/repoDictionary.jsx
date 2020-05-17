import React, { useEffect } from 'react';
import { Document } from 'react-pdf/dist/entry.webpack';
import './repoDictionary.scss';

const RepoDictionary = ({ repoSelected }) => {
  const onDocumentLoadSuccess = (e) => {
    console.log(e);
  };

  useEffect(() => {
    console.log(repoSelected.path_diccionario);
  }, [repoSelected]);

  return (
    <div>
      <Document
        file={repoSelected.path_diccionario}
        onLoadSuccess={onDocumentLoadSuccess}
      />
    </div>
  );
};

export default RepoDictionary;
