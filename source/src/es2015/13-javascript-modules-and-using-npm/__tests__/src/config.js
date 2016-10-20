// Named Export
export const apiKey = 'abc123';

export const url = 'http://wesbos.com';

export function sayHi(name) {
  return (`Hello there ${name}`);
}

const age = 100;
const dog = 'snickers';

export { age as old, dog };
