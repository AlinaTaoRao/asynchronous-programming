import { setItemHandler } from '../handlers/set-item.js';

export const fetchAndRenderItemListener = (id = '') => {
    document.getElementById(id).addEventListener('click', setItemHandler);
    console.log("fetchAndRenderItemListener be called.");
};