/**
 * Display other error message.
 * 
 * @param {number} [id=1] - User id.
 * @returns {DOM element} - A pre element to store the error message.
 */

export const otherError = (id = 1) => {
  const preEl = document.createElement('pre');
  preEl.innerHTML = `oops! something went wrong fetching the user with id ${id}, try again?`;
  return preEl;
};
