import React from 'react';
import './repoData.scss';

const RepoData = ({ repoSelected }) => {
  return (
    repoSelected && (
      <div
        className="repo-data scroll-styles"
        dangerouslySetInnerHTML={{ __html: repoSelected.prev_data }}
      />
    )
  );
};

export default RepoData;
