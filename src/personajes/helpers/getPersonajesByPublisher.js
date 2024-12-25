import { personajes } from '../data/personajes';

export const getPersonajesByPublisher = (publisher) => {
  const validPubliushers = ['Bluey', 'PlimPlim'];

  if (!validPubliushers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return personajes.filter((personaje) => personaje.publisher === publisher);
};
