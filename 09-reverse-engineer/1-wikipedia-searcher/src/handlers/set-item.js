import { wikiResource } from '../api-calls/wiki-resource.js';
import { renderItem } from '../components/render-item.js';

export const setItemHandler = async (event) => {
//   debugger;
  try {
    // get the item need to search
    const itemToSearch = event.target.parentElement.children[0].value;

    // fetch data from wiki api, and then json data
    const data = await wikiResource(itemToSearch);

    // render component to ui
    data.query.search.forEach((item) => renderItem(item));
  } catch (err) {
    console.error(err);

    const errorElement = err.message.includes('HTTP error! status: 404')
      ? fourOhFour()
      : otherError(itemToSearch);

document.getElementById('#error').appendChild(errorElement);
  }
  console.log('setItemHandler be called.');
};
