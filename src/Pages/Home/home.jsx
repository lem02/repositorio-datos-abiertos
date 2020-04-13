import React, { useState, useEffect } from 'react';
import SearchResult from '../../Components/SearchResult/searchResult';
import Repository from '../../Components/Repository/repository';
import Request from '../../Requests/apiRequests';
import './home.scss';

const Home = () => {
  const [data, setData] = useState();
  const [repoSelected, setRepoSelected] = useState();

  useEffect(() => {
    Request.get('/all', (res) => {
      setData(res);
      setRepoSelected(res[0]);
    });
  }, []);

  return (
    <section className="home">
      <section className="home__search-result">
        <SearchResult
          data={data}
          repoSelected={repoSelected}
          setRepoSelected={setRepoSelected}
        />
      </section>
      <section className="home__repository-selected">
        <Repository repoSelected={repoSelected} />
      </section>
    </section>
  );
};

export default Home;
