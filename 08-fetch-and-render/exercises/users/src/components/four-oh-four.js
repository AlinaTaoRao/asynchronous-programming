/**
 * Display an error message.
 * 
 * @param {number} [id=1] - The user id.
 * @returns{DOM element} - A pre element to store the error message.
 */

export const fourOhFour = (id = 1) => {
const pre = document.createElement('pre');
pre.innerText = `There is no user with id ${id}. Try a number between 1 and 10`;
return pre;
};