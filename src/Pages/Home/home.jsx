import React from 'react';
import Repository from '../Repository/repository';
import './home.scss';

const Home = () => {
  return (
    <section className="home">
      <section className="home__search-result"></section>
      <section className="home__repository-selected">
        <Repository />
      </section>
    </section>
  );
};

export default Home;
