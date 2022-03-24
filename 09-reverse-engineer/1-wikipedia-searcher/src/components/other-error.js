/**
 *Generate a error message, and then render component to ui.
 */

export const otherError = (itemToSearch) => {
  const pre = document.createElement('pre');
  pre.innerText = `Oops! Something went wrong when fetching the keyword ${itemToSearch}, try again.`;
  return pre;
};