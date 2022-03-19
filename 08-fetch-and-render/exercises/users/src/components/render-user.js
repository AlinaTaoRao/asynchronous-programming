import { renderTodo } from './render-todo.js';

/**
 * Document me!
 *
 * @returns
 */

export const renderUser = (user = {}, todos = []) => {
  // create a container div, set id
  const container = document.createElement('div');
  container.id = `user-${user.id}`;

  // create title element
  const titleEl = document.createElement('h1');
  titleEl.innerText = user.username;
  container.appendChild(titleEl);

  // create name element
  const nameEl = document.createElement('p');
  nameEl.innerText = `name: ${user.name}`;
  container.appendChild(nameEl);

  // create email element
  const emailEl = document.createElement('p');
  emailEl.innerText = `email: ${user.email}`;
  container.appendChild(emailEl);

  // create website element
  const websiteEl = document.createElement('p');
  const aEl = document.createElement('a');
  aEl.href = `http://${user.website}`;
  aEl.target = '_blank';
  aEl.innerText = user.website;
  // websiteEl.innerHTML = `website: ${aEl}`;
  websiteEl.innerHTML = "website: ";
  websiteEl.appendChild(aEl);
  container.appendChild(websiteEl);

  //  reduce todos to a div element with the id "comments"
  const todoContainer = document.createElement('div');
  todoContainer.id = 'comments';
  const renderedTodos = todos.map(renderTodo).reduce((acc, next) => {
    acc.appendChild(next);
    return acc;
  }, todoContainer);

  container.appendChild(renderedTodos);

  return container;
};
