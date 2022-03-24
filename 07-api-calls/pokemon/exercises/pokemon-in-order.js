import { ORIGIN } from '../config.js';

/**
 * Returns a selected array of pokemon in order.
 *
 * @async
 * @param {number} [limit=1] - The number of pokemon to return.
 * @param {number} [offset=0] - How far down the order of pokemon to begin the list.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
// way 1: 
// export const pokemonInOrder = async (limit=1, offset=0) => {
//   // --- generate and declare your resource's URL ---
//   // docs: https://pokeapi.co/docs/v2#resource-listspagination-section
//   // ORIGIN = 'https://pokeapi.co/api/v2';
//   // test: 'https://pokeapi.co/api/v2/pokemon/11/'
//   // next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
//   const pokemon = [];
//   for(let i= 1; i<= limit; i++) {
//     const id = offset + i;
//     const URL = `${ORIGIN}/pokemon?limit=60&offset=0`;

//   // --- fetch the API data (this works!) ---
//   const encodedURL = encodeURI(URL);
//   const response = await fetch(encodedURL);

//   // --- throw an error if the response is not ok (this works!) ---
//   if (!response.ok) {
//     const message = response.statusText
//       ? `${response.status}: ${response.statusText}\n-> ${URL}`
//       : `HTTP error! status: ${response.status}\n-> ${URL}`;
//     throw new Error(message);
//   }

//   /* --- parse the data if the response was ok (this works!) ---*/
//   const data = await response.json();
//   console.log("data:", data, "data.results: " , data.results );
//   const target = data.results[id-1];

//   // --- process the fetched data (if necessary) ---
//   //  you do not need to use `await` below this comment
//   //  you can refactor this to a separate logic function and test it
  
//   pokemon.push(target);
// }
//   // --- return the final data ---
//   return pokemon;
// };

// way 2: use ?limit&offset

export const pokemonInOrder = async (limit=1, offset=0) => {
  // --- generate and declare your resource's URL ---
  // docs: https://pokeapi.co/docs/v2#resource-listspagination-section
  // ORIGIN = 'https://pokeapi.co/api/v2';
  // test: 'https://pokeapi.co/api/v2/pokemon/11/'
  // next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
 
    const URL = `${ORIGIN}/pokemon?limit=${limit}&offset=${offset}`;
    // or:
    // const URL = `${ORIGIN}/pokemon/?limit=${limit}&offset=${offset}`;

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
  console.log("data:", data);


  // --- process the fetched data (if necessary) ---
  //  you do not need to use `await` below this comment
  //  you can refactor this to a separate logic function and test it
  
 const pokemon = data.results;

  // --- return the final data ---
  return pokemon;
};