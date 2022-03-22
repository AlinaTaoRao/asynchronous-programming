/**
 * Create DOM element to store the info from photo, render component on ui.
 *
 * @param {object} [photo={}] - A photo which attached to the album.
 * @returns {DOM element} - A div element to store the info of a photo.
 */
export const renderPhoto = (photo = {}) => {
  const container = document.createElement('div');
  container.id = 'photo-' + photo.id;
  container.className = 'photo';

  const titleEl = document.createElement('h2');
  titleEl.innerHTML = photo.title;
  container.appendChild(titleEl);

  const imgEl = document.createElement('img');
  imgEl.alt = photo.title;
  imgEl.src = photo.thumbnailUrl;
  container.appendChild(imgEl);

  return container;
};
