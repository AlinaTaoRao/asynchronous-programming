/**
 * Create DOM element to store the info from photo, render component on ui.
 *
 * @param {object} [comment={}] - A comment which attached to the post.
 * @returns {DOM element} - A div element to store the info of a comment.
 */

// export const renderComment = (comment = {}) => {
// const container = document.createElement('div');
// container.id = 'comment-' + comment.id;
// container.className = 'comment';

// // create h2 for comment name
// const titleEl = document.createElement('h2');
// titleEl.innerText = comment.name;
// container.appendChild(titleEl);

// // create code element for user email
// const userEl = document.createElement('code');
// userEl.innerText = `comment by: ${comment.email}`;
// container.appendChild(userEl);

// // create p for body
// const pEl = document.createElement('p');
// pEl.innerText = comment.body
// container.appendChild(pEl);

// // return container
// return container;
// };

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

