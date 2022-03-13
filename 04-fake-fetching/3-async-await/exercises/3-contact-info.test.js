import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

/**
 * Fetches user by id and resolves in user contact info.
 *
 * @async
 * @param {number} [id=1] - The user id to fetch.
 * @returns {Promise<array>} A prromise that resolves to user's contact info (email, phone number and website) in an arrray of strings.
 *
 * @throws {Error} {status number}: {status text}
 */

const contactInfo = async (id=1) => {
  const responsePromise = await fetchUserById(id);
  if(!responsePromise.ok) {
    throw new Error(`${responsePromise.status}: ${responsePromise.statusText}`)
  }
  const user = await responsePromise.json();
  return [user.email, user.phone, user.website];

};

describe("contactInfo returns a specific user's contact info", () => {
  it("gets user 3's info", async () => {
    const actual = await contactInfo(3);
    expect(actual).toEqual([
      'Nathan@yesenia.net',
      '1-463-123-4447',
      'ramiro.info',
    ]);
  });
  it("gets user 5's info", async () => {
    const actual = await contactInfo(5);
    expect(actual).toEqual([
      'Lucio_Hettinger@annie.ca',
      '(254)954-1289',
      'demarco.info',
    ]);
  });
  it("gets user 7's info", async () => {
    const actual = await contactInfo(7);
    expect(actual).toEqual([
      'Telly.Hoeger@billy.biz',
      '210.067.6132',
      'elvis.io',
    ]);
  });
  it("gets user 9's info", async () => {
    const actual = await contactInfo(9);
    expect(actual).toEqual([
      'Chaim_McDermott@dana.io',
      '(775)976-6794 x41206',
      'conrad.com',
    ]);
  });
});

log('= = = =  the call stack is empty  = = = =');
