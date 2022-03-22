/**
 * Create DOM element to store the info from photo, render component on ui.
 *
 * @param {object} [comment={}] - A comment which attached to the post.
 * @returns {DOM element} - A div element to store the info of a comment.
 */

export const renderComment = (comment = {}) => {
const container = document.createElement('div');
container.id = 'comment-' + comment.id;
container.className = 'comment';

// create h2 for comment name
const titleEl = document.createElement('h2');
titleEl.innerText = comment.name;
container.appendChild(titleEl);

// create code element for user email
const userEl = document.createElement('code');
userEl.innerText = `comment by: ${comment.email}`;
container.appendChild(userEl);

// create p for body
const pEl = document.createElement('p');
pEl.innerText = comment.body
container.appendChild(pEl);

// return container
return container;
};


