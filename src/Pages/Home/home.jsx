import React, { useContext } from 'react';
import SearchResult from '../../Components/SearchResult/searchResult';
import Repository from '../../Components/Repository/repository';
import { SiteContext } from '../../Context/siteContext';
import './home.scss';

const Home = () => {
  const { dataResult, repoSelected, setRepoSelected } = useContext(SiteContext);

  return (
    <section className="home">
      <section className="home__search-result">
        <SearchResult
          data={dataResult}
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
