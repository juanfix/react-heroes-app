import { heroes } from '../data/heroes';

/**
 * It takes a string as an argument, and returns an array of objects that have a property called
 * superhero that contains the string
 * @param [name] - The name of the hero you're searching for.
 * @returns An array of objects.
 */
export const getHeroesByName = (name = '') => {
  name = name.toLowerCase().trim();

  if (name.length === 0) return [];

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
