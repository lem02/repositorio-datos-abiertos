import React, { useState, useEffect } from 'react';
import Request from '../../Requests/apiRequests';
import './repoData.scss';

const RepoData = ({ repoSelected }) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(null);
    Request.get(`/prev/${repoSelected.id}`, (res) => {
      if (res) {
        setData(res);
      } else {
      }
    });
  }, [repoSelected]);

  return data ? (
    <div
      className="repo-data scroll-styles"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  ) : (
    <div>
      <p>Previsualización no disponible</p>
    </div>
  );
};

export default RepoData;
