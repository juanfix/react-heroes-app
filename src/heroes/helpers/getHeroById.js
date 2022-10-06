import { heroes } from '../data/heroes';

/**
 * It takes an id as an argument and returns the hero object that has that id
 * @param id - The id of the hero to find.
 * @returns A function that takes an id as an argument and returns a hero object.
 */
export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
