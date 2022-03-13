import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* User Summary */

// --- declare some callbacks ---

const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
  return res.json();
};

const createSummary = (user) => {
  // write me!
  const infoObj = {};
  infoObj.name = user.name;
  infoObj.city = user.address.city;
  infoObj.companyName = user.company.name;
  return infoObj;
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 5');
fetchUserById(5)
  .then(handleResponse)
  .then(createSummary)
  /*  {
      name: 'Chelsey Dietrich',
      city: 'Roscoeview',
      companyName: 'Keebler LLC'
    } */
  .then((infoObj) => log(infoObj))
  .catch(handleError);

log('fetching and processing user 1');
fetchUserById(1)
  .then(handleResponse)
  .then(createSummary)
/*  {
      name: 'Leanne Graham',
      city: 'Gwenborough',
      companyName: 'Romaguera-Crona',
    } */
  .then((infoObj) => log(infoObj))
  .catch(handleError);

log('fetching and processing user 10');
fetchUserById(10)
  .then(handleResponse)
  .then(createSummary)
/*  {
      name: 'Clementina DuBuque',
      city: 'Lebsackbury',
      companyName: 'Hoeger LLC',
    } */
  .then((infoObj) => log(infoObj))
  .catch(handleError);

log('fetching and processing user -1');
fetchUserById(-1)
  .then(handleResponse)
  .then(createSummary)
// 404
  .then((infoObj) => log(infoObj))
  .catch(handleError);

log('= = = =  the call stack is empty  = = = =');
