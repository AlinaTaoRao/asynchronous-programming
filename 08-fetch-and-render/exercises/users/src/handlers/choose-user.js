import { typicodeResource } from '../api-calls/typicode-resource.js';

import { fourOhFour } from '../components/four-oh-four.js';
import { otherError } from '../components/other-error.js';
import { renderUser } from '../components/render-user.js';

export const chooseUser = async (event) => {
  debugger;
  // get user id
  const userId = event.target.form.userId.value;

  // clear root content
  const root = document.getElementById('root');
  root.innerText = '';

  try {
    // get the specific data
    const userPromise = typicodeResource('users', userId);
    const todosPromise = typicodeResource('users', userId, 'todos');

    // await promise all
    const [user, todos] = await Promise.all([userPromise, todosPromise]);

    // render user
    const userEl = renderUser(user, todos);

    // append post element to root
    root.appendChild(userEl);
  } catch (err) {
    console.error(err);

    // set error element depending on the catch error message.
    const errorEl = err.message.includes('HTTP error! status: 404')
      ? fourOhFour(userId)
      : otherError(userId);

    // append error message element to root
    root.appendChild(errorEl);
  }
};
