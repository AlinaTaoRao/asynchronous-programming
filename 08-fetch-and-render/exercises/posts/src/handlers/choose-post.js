import { typicodeResource } from '../api-calls/typicode-resource.js';

// import { renderPost } from '../components/render-post.js'; // way 1: standard way
import { MyDivForPost } from '../components/custom-div.js'; // way 2: user template and class "PostComment"
import { data } from '../../src/data.js';


import { fourOhFour } from '../components/four-oh-four.js';
import { otherError } from '../components/other-error.js';

/**
 * Handle the click event and render component to ui.
 *
 * @param {event} [event] - The "click" event witch will trigger this handler.
 */

/* ---- way 1: standard way  ---- */
// export const choosePost = async (event) => {
//   debugger;
//   // get post id
//   const postId = event.target.form.postId.value;

//   const root = document.getElementById('root');
//   root.innerText = '';

//   try {
//     // get the specific data
//     const postPromise = typicodeResource('posts', postId);
//     const commentsPromise = typicodeResource('posts', postId, 'comments');

//     // await promise all
//     const [post, comments] = await Promise.all([postPromise, commentsPromise]);

//     // render post
//     const postElement = renderPost(post, comments);

//     // append post element to root
//     root.appendChild(postElement);

//   } catch (err) {
//     console.error(err);

//     const errorElement = err.message.includes('HTTP error! status: 404')
//       ? fourOhFour(postId)
//       : otherError(postId);

//     root.appendChild(errorElement);
//   }
// };

/* ---- way 2: use template and class  ---- */
export const choosePost = async (event) => {
  debugger;
  // get post id
  const postId = event.target.form.postId.value;

  //way 1: clear root content
  //   const root = document.getElementById('root');
  //   root.innerText = '';

  try {
    // get the specific data
    const postPromise = typicodeResource('posts', postId);
    const commentsPromise = typicodeResource('posts', postId, 'comments');

    // await promise all
    const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    // write returnedPost, returnedComments to data
    data.post = post;
    data.comments = comments;

    // Define my custom  element
    console.log('--Define the new element start--');
    customElements.define('my-div-for-post', MyDivForPost);
    console.log('--Define the new element end--');

    // //  call constructor
    // const obj = new PostComment(post, comments);
    // console.log('obj: ', obj);
    // class end
  } catch (err) {
    console.error(err);

    const errorElement = err.message.includes('HTTP error! status: 404')
      ? fourOhFour(postId)
      : otherError(postId);

    root.appendChild(errorElement);
  }
};
