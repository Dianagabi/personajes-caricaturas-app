import { personajes } from '../data/personajes';

export const getPersonajeById = (id) => {
  return personajes.find((personaje) => personaje.id === id);
};
