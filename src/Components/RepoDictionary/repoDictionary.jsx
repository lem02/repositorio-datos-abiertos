import React from 'react';
import './repoDictionary.scss';

const RepoDictionary = ({ repoSelected }) => {
  return (
    <div className="repo-dictionary">
      <iframe
        src={`${process.env.REACT_APP_API_URL}/dict/${repoSelected.id}`}
        title="dictionaryContainer"
      ></iframe>
    </div>
  );
};

export default RepoDictionary;
