import { ORIGIN } from '../config.js';

/**
 * Fetches a single user with the given user name.
 *
 * @async
 * @param {string} [userName=''] - The user name to request.
 * @returns {Promise<object|null>} The user object if it exists, otherwise null.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const userByUsername = async (userName = '') => {
  // --- declare your resource's URL ---
  // hint: ctr-f "filter" -> https://github.com/typicode/json-server
  // ORIGIN = 'https://jsonplaceholder.typicode.com'
  // /comments?author.name=typicode
  const URL = `${ORIGIN}/users?username=${userName}`;

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

  // --- process the fetched data (if necessary) ---
  //   you do not need to use `await` below this comment
  // way 1:
  // const user = data.filter(e => e.username = userName);

  // --- return the final data ---
  // if (user.length === 0) {
  //   return null;
  // } 
  // return user[0];

  // way2:
  const user = data[0];
  if (data.length === 0) {
    return null;
  }
  return user;
};
