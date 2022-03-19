/**
 * Document me!
 *
 * @param {_} todo
 * @returns
 */

export const renderTodo = (todo = {}) => {
    //  create a container div, set div id and class
    const container = document.createElement('div');
    container.id= 'todo-' + todo.id;
    container.className = 'todo';

    // create check box, append it to container
    const checkEl = document.createElement('input');
    checkEl.type = 'checkbox'
    container.appendChild(checkEl);

    // create code to store title, append it to container
    const titleEl = document.createElement('code');
    titleEl.innerText = todo.title;
    container.appendChild(titleEl);

    // return container;
    return container;
};