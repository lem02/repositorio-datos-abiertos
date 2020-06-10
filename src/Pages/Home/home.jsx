import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SiteContext } from '../../Context/siteContext';
import Request from '../../Requests/apiRequests';
import banner from '../../Assets/banner.png';
import bannerMobile from '../../Assets/banner-mobile.png';
import './home.scss';

const Home = () => {
  const { breakpoint } = useContext(SiteContext);
  const [popular, setPopular] = useState();

  useEffect(() => {
    Request.get('/reps/pop/0/0/0/0/1', ({ data }) => {
      if (data) {
        setPopular(() =>
          data.result.length > 5 ? data.result.slice(0, 6) : data.result
        );
      }
    });
  }, []);

  return (
    <section className="home max-page-width min-page-height">
      <figure className="home__banner">
        <img
          src={breakpoint.small ? bannerMobile : banner}
          alt="Banner datos abiertos"
        />
      </figure>
      <section className="home__section">
        <h2 className="home__section__title">Principales Categorías</h2>
        <div className="home__section__container">
          <article className="home__section__item">
            <img
              src="/img/inscripciones"
              alt=""
              className="home__section__item__bg-img"
            />
            <Link to="/categoria/1">
              <h3>Inscripciones</h3>
            </Link>
          </article>
          <article className="home__section__item">
            <img
              src="/img/matriculados"
              alt=""
              className="home__section__item__bg-img"
            />
            <Link to="/categoria/2">
              <h3>Matriculados</h3>
            </Link>
          </article>
          <article className="home__section__item">
            <img
              src="/img/graduados"
              alt=""
              className="home__section__item__bg-img"
            />
            <Link to="/categoria/3">
              <h3>Graduados</h3>
            </Link>
          </article>
          <article className="home__section__item">
            <img
              src="/img/profesores"
              alt=""
              className="home__section__item__bg-img"
            />
            <Link to="/categoria/4">
              <h3>Profesores</h3>
            </Link>
          </article>
          <article className="home__section__item">
            <img
              src="/img/empleados"
              alt=""
              className="home__section__item__bg-img"
            />
            <Link to="/categoria/5">
              <h3>Empleados</h3>
            </Link>
          </article>
        </div>
      </section>
      <section className="home__section home__paragraph-section">
        <h2 className="home__section__title">Sobre esta iniciativa</h2>
        <p>
          En Data UdeA estamos comprometidos con la creación de comunidad
          alrededor de los datos. Esta iniciativa de datos abiertos busca
          disponer de forma abierta y gratuita datos del quehacer universitario
          que impulsen nuevas investigaciones, aplicaciones, visualizaciones e
          historias que ayuden a entender la UdeA, desde los datos.
        </p>
      </section>
      <section className="home__section">
        <h2 className="home__section__title">Los más descargados</h2>
        <div className="home__section__container">
          {popular &&
            popular.length > 0 &&
            popular.map((repo, index) => (
              <article key={index} className="home__section__item">
                <img
                  src={`/img/${repo.id}`}
                  alt=""
                  className="home__section__item__bg-img"
                />
                <Link to={`/popular/${repo.id}`}>
                  <h3>{repo.titulo_corto}</h3>
                  <p>{repo.ult_actualizacion}</p>
                </Link>
              </article>
            ))}
        </div>
      </section>
      <section className="home__section home__paragraph-section">
        <h2 className="home__section__title">Agradecimientos</h2>
        <p>
          Este conjunto de recursos es posible gracias a nuestra comunidad
          universitaria y al trabajo diario del personal de la División de
          Gestión Informática y de la División de Planes y Proyectos de la UdeA.
          Damos un especial agradecimiento al programa de Ingeniería de Sistemas
          y a los estudiantes Luis Ernesto Monsalve y Jose Fernando Gómez cuya
          dedicación hizo realidad este portal.
        </p>
      </section>
    </section>
  );
};

export default Home;
