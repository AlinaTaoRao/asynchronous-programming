/**
 * Generate a error message for 404 error, and then render component to ui.
 *
 */

export const fourOhFour = () => {
  const pre = document.createElement('pre');
  pre.innerText = `OWW shit! API isn't working!`;
  return pre;
};

