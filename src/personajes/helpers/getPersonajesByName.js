import { personajes } from '../data/personajes';

export const getPersonajesByName = (name = '') => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return personajes.filter((personaje) => personaje.superhero.toLowerCase().includes(name));
};
