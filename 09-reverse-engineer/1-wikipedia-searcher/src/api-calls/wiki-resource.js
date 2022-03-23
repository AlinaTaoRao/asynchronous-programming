import { ORIGIN } from "../config.JS";

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
    const URL = `${ORIGIN}${itemToSearch}`;
    const response = await fetch(encodeURI(URL));

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} \n-> status text: ${response.statusText}\n-> ${URL}`);
      }
    
      return await response.json();

};