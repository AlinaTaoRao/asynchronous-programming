/**
 * Create a error message.Render component to ui.
 * @param {number} [id=1] - The album id that user have inputted.
 * @return {DOM element} - A pre element which store the error message.
 */
export const otherError = (id = 1) => {
  const pre = document.createElement('pre');
  pre.innerHTML = `oops! something went wrong fetching the album with id ${id}, try again?`;
  return pre;
};
