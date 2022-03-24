import { githubRecourse } from '../api-calls/github-resource.js';
import { renderUser } from '../components/render-user.js';
import { fourOhFour } from '../components/four-oh-four.js';
import { otherError } from '../components/other-error.js';

export const provideUsernameHandler = async (event) => {
  debugger;
  try {
    // get username from input
    // way 1: use .getElementById(). works
    const username = document.getElementById('searchUser').value;
    // way 2: use event.target. works
    // const username = event.target.parentElement.children[2].value;


    // fetch user data from github
    const data = await githubRecourse(username);

    // render component to ui
    renderUser(data);
  } catch (err) {
    console.error(err);

    // fourOhFour(), how to trigger?
    const errorElement = err.message.includes('HTTP error! status: 404')
    ? fourOhFour(username)
    : otherError(username);

  document.getElementById("search-container").appendChild(errorElement);
  }
};
