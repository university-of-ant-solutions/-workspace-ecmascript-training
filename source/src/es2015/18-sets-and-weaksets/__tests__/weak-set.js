import test from 'tape';

test('es2015 \ 18-sets-and-weaksets \ weak set', (t) => {
  t.plan(3);
  const dog1 = { name: 'Snickers', age: 3 };
  const dog2 = { name: 'sunny', age: 1 };
  const weakSauce = new WeakSet([dog1, dog2]);
  t.equal(weakSauce.has(dog1), true);
  t.equal(weakSauce.has(dog2), true);
  weakSauce.delete(dog1);
  t.equal(weakSauce.has(dog1), false);
});
