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

export const typicodeResource = async (...params) => {
    //  set path URL
const paramsPath = params.join('/');
const URL = `${ORIGIN}/${paramsPath}`;
console.log("URL: ", URL);

// fetch data from URL
// way 1: ?
// const response = await fetch(encodeURI(URL));
// way 2:
// const encodeURL = encodeURI(URL);
// const response = await fetch(encodeURL);
const encodedURL = encodeURI(URL);
const response = await fetch(encodedURL);

if(!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
}

// if data is ok , json data 
return await response.json();

};