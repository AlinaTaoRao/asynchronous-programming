import { wikiResource } from '../api-calls/wiki-resource.js';
import { renderItem } from '../components/render-item.js';
import { fourOhFour} from '../components/four-oh-four.js';
import { otherError } from '../components/other-error.js';

export const setItemHandler = async (event) => {
  //   debugger;
  try {
    // get the item need to search
    // way 1: user event.target, works
    // const itemToSearch = event.target.parentElement.children[0].value;

    // way 2: user element id, works
    const itemToSearch = document.getElementById('search-box').children[0].value;


    // fetch data from wiki api, and then json data
    const data = await wikiResource(itemToSearch); // await maters

    // clear the output div before render new component
    const output = document.getElementById('output');
    output.innerHTML = '';

    // render all component to ui
    data.query.search.forEach((item) => renderItem(item));
  } catch (err) {
    // Need example which will trigger error.
    // console.log("error message:", err, "\nerror.status: ", err.status, "\nerror.statusText:", err.statusText ); //not work
    console.error(err);

    // way 1: use function
    const errorElement = err.message.includes('HTTP error! status: 404')
      ? fourOhFour()
      : otherError(itemToSearch);
    document.getElementById('#error').appendChild(errorElement);

    // way 2: innerHTML
    document.getElementById('output').innerText = `OWW shit! API isn't working!`;
  }
};
