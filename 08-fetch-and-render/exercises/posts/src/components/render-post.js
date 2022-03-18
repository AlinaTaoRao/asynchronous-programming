import { renderComment } from "./render-comment.js";

/**
 * Document me!
 *
 * @returns
 */

export const renderPost = ( post = {}, comment = []) => {
// create container
const container = document.createElement('div');
container.id = `post-${post.id}`;

// create title element and append it to container
const titleEl = document.createElement('h1');
titleEl.innerText = post.title;
container.appendChild(titleEl);

// create code element for user id and append it to container
const codeEl = document.createElement('code');
codeEl.innerText = `posted by user: ${post.userId}`;
container.appendChild(codeEl);

// create p element for body and append it to container
const pEl = document.createElement('P');
pEl.innerText = post.body;
container.appendChild(pEl);

// render comments
// reduce all comment div elements into a bigger div element, and then append the div to container
const renderedComments = comment.map(renderComment).reduce((acc, next) => {
acc.appendChild(next);
return acc;
}, document.createElement('div'));
container.appendChild(renderedComments);
return container;
};