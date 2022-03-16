import { ORIGIN } from '../config.js';

/**
 * Returns an array of all Pokemon with a specific ability.
 *
 * @async
 * @param {string} [ability=''] - The ability to request.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const pokemonWithAbility = async (ability = '') => {
  // --- generate and declare your resource's URL ---
  // docs: https://pokeapi.co/docs/v2#abilities
  // ORIGIN = 'https://pokeapi.co/api/v2'
  // real: https://pokeapi.co/api/v2/ability/drizzle/
  const URL = `${ORIGIN}/ability/${ability}`;

  // --- fetch the API data (this works!) ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  // --- throw an error if the response is not ok (this works!) ---
  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  /* --- parse the data if the response was ok (this works!) ---*/
  const data = await response.json();
  console.log("data: ", data);

  // --- process the fetched data (if necessary) ---
  //  you do not need to use `await` below this comment
  //  you can refactor this to a separate logic function and test it
  const pokemon = data.pokemon.map( item => item.pokemon);

  // --- return the final data ---
  return pokemon;
};
