/**
 * Generate a error message for 404 error, and then render component to ui.
 * 
 * @param {number} [id=1] - The album id that user input.
 * @return {DOM element} - A div element witch stores the error message.
 */
export const fourOhFour = (id = 1) => {
  const pre = document.createElement('pre');
  pre.innerHTML = `there is no album with id ${id}. try a number between 1 and 100.`;
  return pre;
};
