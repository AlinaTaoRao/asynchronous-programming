import { provideUsernameHandler} from '../handlers/provide-username.js';

export const fetchAndRenderUserListener = (id = '') => {
    console.log("fetchAndRenderUserListener be called.")
    document.getElementById(id).addEventListener('click', provideUsernameHandler);
}