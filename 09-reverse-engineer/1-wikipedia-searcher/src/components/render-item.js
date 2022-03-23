import { WIKI } from "../config.js";

/**
 * Create DOM elements and render component to ui.
 *
 * @param {object} [item = {}] - The data object to render.
 */
export const renderItem = (item= {}) => {
    // debugger;
    // create container
    const container = document.createElement('div');
    container.className = 'row';

    // define the link url
    const joinedPath = item.title.split(' ').join('%20');
    const URL = `${WIKI}/${joinedPath}`;

    // create title and link
    const titleEl = document.createElement('h3');
    const linkEl = document.createElement('a');
    linkEl.href = URL; //set href way1: works
    // linkEl.setAttribute('href', URL); // set href way2: works
    linkEl.innerText = item.title;
    titleEl.appendChild(linkEl);
    container.appendChild(titleEl);

    // create paragraph
    const pEl = document.createElement('p');
    pEl.innerHTML = item.snippet;
    container.appendChild(pEl);

    // create button and link
    const btnEl = document.createElement('button');
    btnEl.innerText = 'view full article';
    const aEl = document.createElement('a');
    aEl.href = URL 
    aEl.appendChild(btnEl);
    container.appendChild(aEl);

    // append container to output
    document.getElementById('output').appendChild(container);

};