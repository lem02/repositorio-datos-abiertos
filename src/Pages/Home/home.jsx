import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Request from '../../Requests/apiRequests';
import './home.scss';

const Home = () => {
  const [popular, setPopular] = useState();

  useEffect(() => {
    Request.get('/reps/pop/0/0/0/0/1', (res) => {
      setPopular(() =>
        res.result.length > 5 ? res.result.slice(0, 6) : res.result
      );
    });
  }, []);

  return (
    <section className="home max-page-width min-page-height">
      <figure className="home__banner">
        <img
          src="https://thumbs.dreamstime.com/z/concepto-ligado-de-open-data-con-el-gr%C3%A1fico-del-conocimiento-en-fondo-los-datos-enlazados-son-un-acercamiento-publicar-y-142786291.jpg"
          alt="Banner datos abiertos"
        />
      </figure>
      <section className="home__section">
        <h2 className="home__section__title">Principales Categorías</h2>
        <div className="home__section__container">
          <article className="home__section__item">
            <Link to="/categoria/1">
              <h3>Inscripciones</h3>
            </Link>
          </article>
          <article className="home__section__item">
            <Link to="/categoria/2">
              <h3>Matriculados</h3>
            </Link>
          </article>
          <article className="home__section__item">
            <Link to="/categoria/3">
              <h3>Graduados</h3>
            </Link>
          </article>
          <article className="home__section__item">
            <Link to="/categoria/4">
              <h3>Profesores</h3>
            </Link>
          </article>
          <article className="home__section__item">
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
          disponer de forma abierta y gratuita datos del día a día universitario
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
          y a los estudiantes Luis y Jose cuya dedicación hizo realidad este
          portal.
        </p>
      </section>
    </section>
  );
};

export default Home;
