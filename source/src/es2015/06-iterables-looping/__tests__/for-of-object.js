import test from 'tape';

test('es2015 \ 06-iterables-looping \ for of examples', (t) => {
  t.plan(1);
  const apple = {
    color: 'Red',
    size: 'Medium',
    weight: 50,
    sugar: 10
  };
  const r = [];
  for (const prop in apple) {
    r.push(prop);
  }
  t.deepEqual(r, ['color', 'size', 'weight', 'sugar']);
});
