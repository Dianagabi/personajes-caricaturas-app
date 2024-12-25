import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const PersonajeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const personajeImageUrl = `personajes/${id}.png`;

  return (
    <Link to={`/personaje/${id}`}>
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-04 ">
              {/* IMAGE */}
              <img src={personajeImageUrl} alt={superhero} className="card-img" />
              {/* HERO DATA */}
              <div className="cardHero__data">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                {alter_ego !== characters && <p>{characters}</p>}
                <p className="card-text">
                  <small>
                    Primera aparición <br /> {first_appearance}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
