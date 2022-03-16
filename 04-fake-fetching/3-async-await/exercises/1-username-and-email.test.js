import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

/**
 * Fetches user by id and returns promise of username and email.
 *
 * @async
 * @param {number} [id=1] - The user ID to fetch.
 * @returns {Promise<string>} A promise that resolves to the user's
 * id, username and email on a string.
 *
 * @throws {Error} {status number}: {status text}
 */

const usernameAndEmail = async (id=1) => {
  const responsePromise = await fetchUserById(id);
  if (!responsePromise.ok) {
    throw new Error(`${responsePromise.status}: ${responsePromise.statusText}`);
  }
  const user = await responsePromise.json();
  return `${id}. ${user.username}, ${user.email}`;
};

describe("usernameAndEmail returns the user's id, name and email", () => {
  it("returns user 2's info", async () => {
    const actual = await usernameAndEmail(2);
    expect(actual).toEqual('2. Antonette, Sanna@melissa.tv');
  });
  it("returns user 4's info", async () => {
    const actual = await usernameAndEmail(4);
    expect(actual).toEqual('4. Karianne, Junianne.OConner@kory.org');
  });
  it("returns user 7's info", async () => {
    const actual = await usernameAndEmail(7);
    expect(actual).toEqual('7. Elwyn.Skiles, Telly.Hoeger@billy.biz');
  });
  it("returns user 10's info", async () => {
    const actual = await usernameAndEmail(10);
    expect(actual).toEqual('10. Moriah.Stanton, Re.Padberg@karina.biz');
  });
});

log('= = = =  the call stack is empty  = = = =');