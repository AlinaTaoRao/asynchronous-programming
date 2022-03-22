import { renderComment } from "./render-comment.js";

/**
 * Create DOM elements and render component to ui.
 * 
 * @param {object} [post = {}] - The specific post data object.
 * @param {Array} [comment = []] - The comments witch attached to the specific post.
 *
 * @returns {DOM element} - A div element which contains a bunch of child elements witch stored info of the specific post.
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


// way 2 start: use template
// export const renderComment = (comment = {}) => {

// };

export class PostComment extends HTMLElement {
    constructor(comment = {}) {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      // get the template div with class name "comment";
      const template = document.querySelector('#post-template .comment');
      // template.id = 'comment-' + comment.id;
  
      // clone template and its descendants (children)
      const dupTemplateContent = template.content.cloneNode(true);
  
      // set div id
      dupTemplateContent.id = 'comment-' + comment.id;
  
      // set h2 title
      dupTemplateContent.children[0].innerText = comment.name;
  
      // set code email
      dupTemplateContent.children[1].innerText = `comment by: ${comment.email}`;
  
      // set p body
      dupTemplateContent.children[2].innerText = comment.body;
  
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
  }
  customElements.define("post-template", PostComment)
  
  const renderComment = new PostComment (comment = {});
  
  // way 2 end
  
  