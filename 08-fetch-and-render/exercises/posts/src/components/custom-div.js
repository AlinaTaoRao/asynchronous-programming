import { data } from '../data.js';

/**
 * A customized div element constructor.
 *
 */

export class MyDivForPost extends HTMLElement {
  constructor(post = data.post, comments = data.comments) {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    // console.log('shadow: ', shadow);

    //  part 1: render post
    // get the template element with id name "my-div-for-post";
    const template = document.querySelector('#my-div-for-post');

    // clone template and its descendants (children)
    /* The HTMLTemplateElement.content property returns a <template> element's template contents (a DocumentFragment). */
    const dupTemplateContent = template.content.cloneNode(true);

    // console.log('dupTemplateContent: ', dupTemplateContent); // works
    // console.log(
    //   'dupTemplateContent.children[0].id: ',
    //   dupTemplateContent.children[0].id,
    // ); //works

    // set container div id to `post-${post.id}`
    const postDiv = dupTemplateContent.children[0];
    postDiv.id = `post-${post.id}`; //

    // set h1 title
    postDiv.children[0].innerText = post.title;

    // set code email
    postDiv.children[1].innerText = `posted by user: ${post.userId}`;

    // set p body
    postDiv.children[2].innerText = post.body;
    console.log('postDiv: ', postDiv);

    // part 2: render component one by one
    //create comment component one by one and append it to comments container div
    // find commentTemplate
    const commentTemplate = postDiv.children[3].children[0]; // div

    // render comment element one by one
    comments.forEach((comment) => {
      // const commentTemplate = postDiv.children[3].children[0]; // div

      const dupCommentTemplate = commentTemplate.cloneNode(true);

      // set container div id to 'comment-' + comment.id;
      dupCommentTemplate.id = 'comment-' + comment.id;

      // set h2 name
      dupCommentTemplate.children[0].innerText = comment.name;

      // set code email
      dupCommentTemplate.children[1].innerText = 'comment by: ' + comment.email;

      // set p body
      dupCommentTemplate.children[2].innerText = comment.body;

      // append comment div to comments div
      postDiv.children[3].appendChild(dupCommentTemplate);
    });

    // // remove the temp div element with id "comment-temp";
    // try 1: Use remove() method, not work
    // const toRemoveNode = document.getElementById("comment-temp");
    // toRemoveNode.remove(); // Cannot read properties of null (reading 'remove')

    //  try 2: removeChild() method, not work
    // const pNode = document.getElementById("comments");
    // pNode.removeChild(pNode.firstElementChild); // TypeError: Cannot read properties of null (reading 'removeChild')

    // try 3: parentNode //not work. Uncaught TypeError: Cannot read properties of null (reading 'parentNode')
//    const toRemoveNode = document.getElementById("comment-temp");
//    toRemoveNode.parentNode.removeChild(toRemoveNode); 
   

    //  create style
    const style = document.createElement('style');
    style.textContent = `
          [my-customized-div] {
            display: block;
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
  } // constructor end
} // class end
