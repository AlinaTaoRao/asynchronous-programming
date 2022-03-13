import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* Address */

// --- declare some callbacks ---

const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
  return res.json();
};

const getAddress = (user) => {
  // write me!
  /* 
  address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
email: "Sincere@april.biz"
id: 1
name: "Leanne Graham"
phone: "1-770-736-8031 x56442"
username: "Bret"
website: "hildegard.org"
   */
  const adressInfo = `${user.id}: ${user.address.street}, ${user.address.city} ${user.address.zipcode}`;
  return adressInfo;
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 9');
fetchUserById(9)
  .then(handleResponse)
  .then(getAddress)
  // "9: Dayna Park, Bartholomebury 76495-3109"
  .then((adressInfo) => log(adressInfo))
  .catch(handleError);

log('fetching and processing user 8');
fetchUserById(8)
  .then(handleResponse)
  .then(getAddress)
  // "8: Ellsworth Summit, Aliyaview 45169"
  .then((adressInfo) => log(adressInfo))
  .catch(handleError);

log('fetching and processing user 2');
fetchUserById(2)
  .then(handleResponse)
  .then(getAddress)
  // "2: Victor Plains, Wisokyburgh 90566-7771"
  .then((adressInfo) => log(adressInfo))
  .catch(handleError);

log('fetching and processing user 0');
fetchUserById(0)
  .then(handleResponse)
  .then(getAddress)
  // 404
  .then((adressInfo) => log(adressInfo))
  .catch(handleError);

log('= = = =  the call stack is empty  = = = =');
