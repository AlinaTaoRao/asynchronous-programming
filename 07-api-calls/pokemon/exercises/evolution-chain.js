import { ORIGIN } from '../config.js';

/**
 * Returns an array of pokemon in an evolution chain.
 *
 * @async
 * @param {number} [chainId=1] - The evolution chain's id to fetch.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const evolutionChain = async (chainId = 1) => {
  // --- generate and declare your resource's URL ---
  // docs: https://pokeapi.co/docs/v2#evolution-section
  // 'https://pokeapi.co/api/v2';
  // https://pokeapi.co/api/v2/evolution-chain/{id}/
  const URL = `${ORIGIN}/evolution-chain/${chainId}`;
  // debugger;
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
  console.log(data);
  // --- process the fetched data (if necessary) ---
  //  you do not need to use `await` below this comment
  //  you can refactor this to a separate logic function and test it
  // tricky one!  you will need to push all the species into an array

  // way1: recursion key=== species
  // const isObject = (value) => (Object(value) === value); // return true if value is an Object/Array
  // const findSpecies = (data = {}) => {
  //     let species = [];
  //     if(isObject(data)) {
  //         const keys = Object.keys(data);
  //         for(const key of keys) {
  //             let tempSpecies;
  //             if (key === 'species') {
  //                 tempSpecies = [ data[key] ];
  //             } else {
  //                 tempSpecies = findSpecies(data[key]);
  //             }
  //             // species = species.concat(tempSpecies);
  //             species.push(...tempSpecies);
  //         }
  //     }
  // --- return the final data ---
  // return pokemon;

  // way 2 : sander and aviv .length > 0 to replace recursion

  const pokemon = [];
  pokemon.push(data.chain.species);
  let key = data.chain.evolves_to;
  while (key.length === 1) {
    console.log('ping');
    pokemon.push(key[0].species);
    key = key[0].evolves_to;
  }

  //const keyNext = key[0].evolves_to
  //console.log(key.length, keyNext.length)

  console.log(pokemon);
  return pokemon;
};
