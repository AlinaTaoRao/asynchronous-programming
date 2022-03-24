import { ORIGIN } from '../config.JS';

/**
 * Fetches a specific resource from wiki API.
 *
 * @async
 * @param {...string|number} params - The parameters to append to the URL.
 * @returns {Promise<object>} A resource object returned from the API.
 *
 * @throws {Error} HTTP error! status: {number}.
 */

export const wikiResource = async (itemToSearch) => {
  const URL = `${ORIGIN}?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=50&srsearch=${itemToSearch}`;
  const response = await fetch(encodeURI(URL));

  // check if there is a problem with the response, if yes throw error.
  // way 1: error message: `${response.status}: ${response.statusText}`
  // if (!response.ok) {
  //   // do not continue with the data if something went wrong
  //   throw new Error(`${response.status}: ${response.statusText}`);
  // }

  // way 2: example from "08-fetch-and-render\examples\albums\src\api-calls\typicode-resource.js"
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }

  // way 3:
  // --- throw an error if the response is not ok (this works!) ---
  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  // pass the data to the next .then handler after it resolves
  // way 1: one line code, works.
  // return await response.json();

  // way 2: create a variable-data to store the value and return data. works
  const data = await response.json(); // await doesn't matter here, if use await when calling wikiResource()

  // --- return the final data ---
  return data;
};
