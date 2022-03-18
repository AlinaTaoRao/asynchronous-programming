import { ORIGIN } from "../config.js";

/**
 * Fetches a specific resource from the typicode jsonplaceholder API.
 *
 * @async
 * @param {...string|number} params - The parameters to append to the URL.
 * @returns {Promise<object>} A resource object returned from the API.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
// ORIGIN = 'https://jsonplaceholder.typicode.com';
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/posts/1/comments

export const typicodeResource = async (...params) => {
debugger;
const paramsPath = params.join('/');
const URL = `${ORIGIN}/${paramsPath}`;
console.log(URL);

const encodedURL = encodeURI(URL);
const response = await fetch(encodedURL);

if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
}

const data = await response.json();
console.log(data);
return data;
};