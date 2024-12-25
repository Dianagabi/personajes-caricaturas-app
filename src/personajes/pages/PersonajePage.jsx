import React, { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getPersonajeById } from '../helpers';

export const PersonajePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const personaje = useMemo(() => getPersonajeById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!personaje) {
    return <Navigate to={'/bluey'} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        {/* HERO IMAGE */}
        <img
          src={`/personajes/${id}.png`}
          alt={personaje.superhero}
          className=" card-img animate__animated animate__fadeInLeft"
        />
      </div>
      {/* HERO DATA */}
      <div className="heroData__page col-8 position-relative">
        <h3 className="mb-4">{personaje.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-dark">
            <b>Apodo:</b>
            <br />
            {personaje.alter_ego}
          </li>
          <li className="list-group-item list-group-item-dark">
            <b>Caricatura</b>
            <br /> {personaje.publisher}
          </li>
          <li className="list-group-item list-group-item-dark">
            <b>Primera Aparicion</b>
            <br /> {personaje.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Caracter</h5>
        <p>{personaje.characters}</p>

        <button
          style={{ marginBottom: 16 }}
          className="btn btn-light position-absolute bottom-0"
          onClick={onNavigateBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
