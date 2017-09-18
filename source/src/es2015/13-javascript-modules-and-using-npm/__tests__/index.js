import { apiKey as key, url, sayHi, old, dog } from './src/config';

import User, { createURL, gravatar } from './src/user';

import test from 'tape';

test('es2015 \ 13-javascript-modules-and-using-npm \ index', (t) => {
  t.plan(6);
  t.equal(old, 100);
  t.equal(dog, 'snickers');
  t.equal('Hello there John', sayHi('John'));


  const wes = new User('Wes Bos', 'wesbos@gmail.com', 'wesbos.com');
  t.deepEqual(wes, {
    name: 'Wes Bos',
    email: 'wesbos@gmail.com',
    website: 'wesbos.com',
  });
  const profile = createURL(wes.name);
  const image = gravatar(wes.email);
  t.equal('http://wesbos.com/users/Wes Bos', profile);
  t.equal('https://www.gravatar.com/avatar/wesbos@gmail.com', image);
});
