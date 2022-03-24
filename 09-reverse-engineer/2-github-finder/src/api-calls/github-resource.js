import { ORIGIN } from '../config.js';

export const githubRecourse = async (username) => {
  // set URL
  const URL = `${ORIGIN}/${username}`;
  console.log("URL:", URL);

  // fetch data from encoded url
  const response = await fetch(encodeURI(URL));

  // check data
  if (!response.ok) {
    throw new Error(
      `HTTP error! status: ${response.status}\n statusText: ${response.statusText}\n-> ${URL}`,
    );
  }

  // use .json() convert data
  return await response.json();
  console.log('githubRecourse be called');
};
