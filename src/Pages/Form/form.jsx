import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { SiteContext } from '../../Context/siteContext';
import Request from '../../Requests/apiRequests';
import './form.scss';

const Form = ({ history }) => {
  const { order, cleanOrder } = useContext(SiteContext);
  const [vinculoUdea, setVinculoUdea] = useState();
  const [uso, setUso] = useState();
  const [conocidoPor, setConocidoPor] = useState();
  const [sent, setSent] = useState();
  const [sending, setSending] = useState();
  const [err, setErr] = useState();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange' || 'onSubmit',
  });

  const onSubmit = (values) => {
    setSending(true);
    Request.post(
      '/send-mail/',
      { ...values, rep: order.map((item) => item.id) },
      ({ data, error }) => {
        setSending(false);
        if (data) {
          setSent(true);
        } else if (error) {
          setErr(true);
        }
      }
    );
  };

  useEffect(() => {
    setErr(false);
    setSent(false);
  }, []);

  useEffect(() => {
    if (order && order.length <= 0 && !sent) {
      history.push('/');
    }
    // eslint-disable-next-line
  }, [order, sent]);

  useEffect(() => {
    if (sent) {
      cleanOrder();
    }
    // eslint-disable-next-line
  }, [sent]);

  return (
    <section className="form-page min-page-height">
      <h2 className="form-page__title">
        Solicitud de conjunto de datos{sent ? ' exitosa' : ''}
      </h2>
      {sent ? (
        <section className="form-page__sent-message">
          <p>
            Recuerda que puedes escribirnos a data@udea.edu.co para información
            adicional.
          </p>
          <p>
            La información suministrada sólo será usada para llevar un registro
            del uso de estos repositorios.
          </p>
          <p>Agradecemos tu apoyo a nuestra iniciativa.</p>
          <p>Con cariño, el equipo de trabajo de Data UdeA</p>
        </section>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="form-page__form">
          <p className="form-page__description">
            Complete el siguiente formulario para recibir los conjuntos de datos
            que desea
          </p>
          <div
            className={`form-page__text-item ${
              errors.email ? 'form-page__text-item--error' : ''
            }`}
          >
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="text"
              name="email"
              id="email"
              ref={register({
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/,
                  message: 'Correo electronico invalido',
                },
              })}
            />
            {errors.email && (
              <span className="warning">{errors.email.message}</span>
            )}
          </div>
          <div className="form-page__radio-item">
            <label className="form-page__radio-item__title">
              Vínculo que tiene con la Universidad de Antioquia
            </label>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="vinculo_udea"
                id="profesor"
                value="Profesor"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="profesor">Profesor</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="vinculo_udea"
                id="egresado"
                value="egresado"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="egresado">Egresado</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="vinculo_udea"
                id="estudiantePregrado"
                value="Estudiante de pregrado"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="estudiantePregrado">Estudiante de pregrado</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="vinculo_udea"
                id="estudiantePosgrado"
                value="Estudiante de posgrado"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="estudiantePosgrado">Estudiante de posgrado</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="vinculo_udea"
                id="estudianteExtension"
                value="Estudiante de cursos de extensión"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="estudianteExtension">
                Estudiante de cursos de extensión
              </label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="vinculo_udea"
                id="investigador"
                value="Investigador"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="investigador">Investigador</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="vinculo_udea"
                id="jovenInvestigador"
                value="Joven investigador"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="jovenInvestigador">Joven investigador</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="vinculo_udea"
                id="administrativo"
                value="Administrativo"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="administrativo">Administrativo</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="vinculo_udea"
                id="sinVinculacion"
                value="No tengo vínculo con la UdeA"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="sinVinculacion">
                No tengo vínculo con la UdeA
              </label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="vinculo_udea"
                id="vinculoOther"
                value={vinculoUdea}
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="vinculoOther">Otra:</label>
              <input
                className="form-page__radio-item__other"
                type="text"
                onChange={(e) => setVinculoUdea(e.target.value)}
              />
            </div>
            {errors.vinculo_udea && (
              <span className="warning">{errors.vinculo_udea.message}</span>
            )}
          </div>
          <div className="form-page__radio-item">
            <label className="form-page__radio-item__title">
              Usaré estos datos para
            </label>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="uso"
                id="investigacion"
                value="Una investigación"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="investigacion">Una investigación</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="uso"
                id="gradoInvestigacionTesis"
                value="Un trabajo de grado, trabajo de investigación o tesis"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="gradoInvestigacionTesis">
                Un trabajo de grado, trabajo de investigación o tesis
              </label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="uso"
                id="practicaAcademica"
                value="Una práctica académica"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="practicaAcademica">Una práctica académica</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="uso"
                id="laborAdministrativa"
                value="Es importante para mi labor administrativa"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="laborAdministrativa">
                Es importante para mi labor administrativa
              </label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="uso"
                id="practicar"
                value="Quiero un conjunto de datos para practicar análisis de datos"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="practicar">
                Quiero un conjunto de datos para practicar análisis de datos
              </label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="uso"
                id="usoOther"
                value={uso}
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="usoOther">Otra:</label>
              <input
                className="form-page__radio-item__other"
                type="text"
                onChange={(e) => setUso(e.target.value)}
              />
            </div>
            {errors.uso && (
              <span className="warning">{errors.uso.message}</span>
            )}
          </div>
          <div className="form-page__radio-item">
            <label className="form-page__radio-item__title">
              ¿Quisieras publicar los resultados de tu análisis en el portal de
              la UdeA?
            </label>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="publicar_portal"
                id="siPublicar"
                value="Si"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="siPublicar">Sí</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="publicar_portal"
                id="noPublicar"
                value="No"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="noPublicar">No</label>
            </div>
            {errors.publicar_portal && (
              <span className="warning">{errors.publicar_portal.message}</span>
            )}
          </div>
          <div className="form-page__radio-item">
            <label className="form-page__radio-item__title">
              ¿Cómo conociste este repositorio?
            </label>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="conocido_por"
                id="tableros"
                value="Desde los tableros en Data UdeA"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="tableros">Desde los tableros en Data UdeA</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="conocido_por"
                id="meContaron"
                value="Alguien me contó sobre el repositorio"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="meContaron">
                Alguien me contó sobre el repositorio
              </label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="conocido_por"
                id="redesSociales"
                value="Redes sociales"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="redesSociales">Redes sociales</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="conocido_por"
                id="google"
                value="Búsqueda desde Google"
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="google">Búsqueda desde Google</label>
            </div>
            <div className="form-page__radio-item__option">
              <input
                type="radio"
                name="conocido_por"
                id="conocidoOther"
                value={conocidoPor}
                ref={register({
                  required: 'Este campo es obligatorio',
                })}
              />
              <label htmlFor="conocidoOther">Otra:</label>
              <input
                className="form-page__radio-item__other"
                type="text"
                onChange={(e) => setConocidoPor(e.target.value)}
              />
            </div>
            {errors.conocido_por && (
              <span className="warning">{errors.conocido_por.message}</span>
            )}
          </div>
          <button
            type="submit"
            className={`form-page__button ${
              sending ? 'form-page__button--disabled' : ''
            }`}
            disabled={sending}
          >
            {sending ? (
              <div className="loading" />
            ) : (
              <span>Enviar solicitud</span>
            )}
          </button>
          {err && (
            <span className="warning">
              Hubo un error al enviar el formulario, por favor intente más tarde
            </span>
          )}
        </form>
      )}
    </section>
  );
};

export default withRouter(Form);
