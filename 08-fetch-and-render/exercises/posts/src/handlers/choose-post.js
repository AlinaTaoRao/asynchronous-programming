import { typicodeResource } from "../api-calls/typicode-resource.js";

import { renderPost } from "../components/render-post.js";
import { fourOhFour } from '../components/four-oh-four.js';
import { otherError } from '../components/other-error.js';

/**
 * Handle the click event and render component to ui.
 * 
 * @param {event} [event] - The "click" event witch will trigger this handler.
 */

// ORIGIN = 'https://jsonplaceholder.typicode.com';
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/posts/1/comments
export const choosePost = async (event) => {
    debugger;
    // get post id
const postId = event.target.form.postId.value;

// clear root content
const root = document.getElementById('root');
root.innerText = '';

try {
    // get the specific data
    const postPromise = typicodeResource('posts', postId);
    const commentsPromise = typicodeResource('posts', postId, 'comments');

    // await promise all
    const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    // render post 
    const postElement = renderPost(post, comments);

    // append post element to root
    root.appendChild(postElement);
} catch (err) {
    console.error(err);

    const errorElement = err.message.includes('HTTP error! status: 404')
    ? fourOhFour(postId)
    : otherError(postId);

    root.appendChild(errorElement);
}
};