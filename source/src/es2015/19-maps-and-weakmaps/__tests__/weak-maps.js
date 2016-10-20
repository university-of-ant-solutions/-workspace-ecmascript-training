
import test from 'tape';

test('es2015 \ 19-maps-and-weakmaps \ weak-maps.js', (t) => {

  t.plan(2);
  let dog1 = { name: 'Snickers' };
  let dog2 = { name: 'Sunny' };
  const strong = new Map();
  const weak = new WeakMap();
  strong.set(dog1, 'Snickers is the best!');
  weak.set(dog2, 'Sunny is the 2nd best!');
  dog1 = null;
  dog2 = null;
  t.equal(strong.get(dog1), undefined);
  t.equal(weak.get(dog2), undefined);

});
