import { renderComment } from './render-comment.js';

/**
 * Create DOM elements and render component to ui.
 *
 * @param {object} [post = {}] - The specific post data object.
 * @param {Array} [comment = []] - The comments witch attached to the specific post.
 *
 * @returns {DOM element} - A div element which contains a bunch of child elements witch stored info of the specific post.
 */
// way 1: create component and assign inner text.
// export const renderPost = ( post = {}, comments = []) => {
// // create container
// const container = document.createElement('div');
// container.id = `post-${post.id}`;

// // create title element and append it to container
// const titleEl = document.createElement('h1');
// titleEl.innerText = post.title;
// container.appendChild(titleEl);

// // create code element for user id and append it to container
// const codeEl = document.createElement('code');
// codeEl.innerText = `posted by user: ${post.userId}`;
// container.appendChild(codeEl);

// // create p element for body and append it to container
// const pEl = document.createElement('P');
// pEl.innerText = post.body;
// container.appendChild(pEl);

// // render comments
// // reduce all comment div elements into a bigger div element, and then append the div to container
// const renderedComments = comments.map(renderComment).reduce((acc, next) => {
// acc.appendChild(next);
// return acc;
// }, document.createElement('div'));
// container.appendChild(renderedComments);
// return container;
// };

// way 2 start: use template
// Create a class for the element
export class PostComment extends HTMLElement {
  constructor(post = {}, comments = []) {
    // Always call super first in constructor
    super();

   //  get root element and clear root content
    const root = document.getElementById('root');
    root.innerHTML = '';
  

    // Create a shadow root
    // const shadow = this.attachShadow({ mode: 'open' });
    const shadow = root.attachShadow({ mode: 'open' });
    console.log("host:", shadowRoot.host);

    //  part 1: render post
    // get the template element with id name "post-template";
    const template = document.querySelector('#post-template');

    // clone template and its descendants (children)
    const dupTemplateContent = template.content.cloneNode(true);

    // set container div id to `post-${post.id}`
    dupTemplateContent.id = `post-${post.id}`;

    // set h1 title
    dupTemplateContent.children[0].innerText = post.title;

    // set code email
    dupTemplateContent.children[1].innerText = `posted by user: ${post.userId}`;

    // set p body
    dupTemplateContent.children[2].innerText = post.body;

    //  set sub container div id to "comments", maybe not need?
    // dupTemplateContent.children[3].id = 'comments';

    // clear content of comments div
    dupTemplateContent.children[3].innerHTML = '';


    // part 2: render component one by one
    //create comment component one by one and append it to comments container div
    const renderedComments = comments.forEach((comment) => {
      // get the template div element with id name "comment-temp";
      const templateEl = document.querySelector('#comment-temp');

      // clone template div and its descendants (children), reset id to 'comment-' + comment.id
      const dupTemplateElContent = templateEl.content.cloneNode(true); //div
      dupTemplateElContent.id = 'comment-' + comment.id;

      // set h2 name
      dupTemplateElContent.children[0].innerText = comment.name;

      // set code email
      dupTemplateElContent.children[1].innerText =
        'comment by: ' + comment.email;

      // set p body
      dupTemplateElContent.children[2].innerText = comment.body;

      // append comment div to comments div
      dupTemplateContent.children[3].appendChild(dupTemplateElContent);
      return dupTemplateContent.children[3];
    });

    //  create style
    const style = document.createElement('style');
    style.textContent = `
      .comment {
        display: inline-block;
        line-height: 20px;
        border-radius: 4px;
        padding: 9px 15px;
        min-width: 50px;
        cursor: pointer;
        color:#fff;
        background-color: #2486ff;
        border:1px solid #2486ff;
      }
      `;

    shadow.appendChild(style);
    shadow.appendChild(dupTemplateContent);
  }
//   constructor end
}
// customElements.define('post-template', PostComment);
// way 2 end
