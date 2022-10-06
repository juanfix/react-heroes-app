import { heroes } from '../data/heroes';

/**
 * It returns an array of heroes that belong to a specific publisher
 * @param publisher - The publisher of the heroes we want to filter.
 * @returns An array of objects.
 */
export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} isn't a valid publisher`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
