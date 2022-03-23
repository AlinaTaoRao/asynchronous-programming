/**
 *Generate a error message, and then render component to ui.
 */

export const otherError = (itemToSearch) => {
  const pre = document.createElement('pre');
  pre.innerText = `opps! Something went wrong fetching the keyword ${itemToSearch}, try again.`;
  return pre;
};

/* 


 export const otherError = (id = 1) => {
    const pre = document.createElement('pre');
    pre.innerText = `opps! Something went wrong fetching the post with id ${id}, try again.`;
    return pre;
}
*/
