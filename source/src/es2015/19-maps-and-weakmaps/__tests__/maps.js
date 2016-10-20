import test from 'tape';

test('es2015 \ 19-maps-and-weakmaps \ map', (t) => {

  t.plan(2);
  const dogs = new Map();
  dogs.set('Snickers', 3);
  dogs.set('Sunny', 2);
  dogs.set('Hugo', 10);
  // dogs.forEach((val, key) => console.log(val, key));
  let keys = [], vals = [];
  for (const [key, val] of dogs) {
    keys.push(key);
    vals.push(val);
  }
  t.deepEqual(keys, [ 'Snickers', 'Sunny', 'Hugo' ]);
  t.deepEqual(vals, [ 3, 2, 10 ]);

});
