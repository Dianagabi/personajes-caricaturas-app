import React, { useMemo } from 'react';
import { getPersonajesByPublisher } from '../helpers';
import { PersonajeCard } from './PersonajeCard';

export const PersonajesList = ({ publisher }) => {
  const personajes = useMemo(() => getPersonajesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {personajes.map((personaje) => (
        <PersonajeCard key={personaje.id} {...personaje} />
      ))}
    </div>
  );
};
