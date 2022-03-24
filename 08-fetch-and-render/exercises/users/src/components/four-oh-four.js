/**
 * Generate a error message for 404 error, and then render component to ui.
 * 
 * @param {number} [id=1] - The user id that user input.
 * @return {DOM element} - A div element witch stores the error message.
 */

export const fourOhFour = (id = 1) => {
const pre = document.createElement('pre');
pre.innerText = `There is no user with id ${id}. Try a number between 1 and 10`;
return pre;
};