/**
 * Generate a error message for 404 error, and then render component to ui.
 * 
 * @param {number} [id=1] - The post id that user input.
 * @return {DOM element} - A div element witch stores the error message.
 */

export const fourOhFour = (id = 1) => {
    const pre = document.createElement('pre');
    pre.innerText = `There is no post with id ${id}. Try a number between 1 and 5.`;
    return pre;
}