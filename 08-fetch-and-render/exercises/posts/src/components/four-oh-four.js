/**
 * 
 */

export const fourOhFour = (id = 1) => {
    const pre = document.createElement('pre');
    pre.innerText = `There is no post with id ${id}. Try a number between 1 and 5.`;
    return pre;
}