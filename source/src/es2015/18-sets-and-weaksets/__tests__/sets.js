import test from 'tape';

test('es2015 \ 18-sets-and-weaksets \ sets', (t) => {
  t.plan(2);
  const people = new Set();
  people.add('Wes');
  people.add('Snickers');
  people.add('Kait');
  let r = [];
  for (const person of people) {
    r.push(person);
  }
  t.deepEqual(r, ['Wes', 'Snickers', 'Kait']);

  // const students = new Set(['Wes', 'Kara', 'Tony']);
  const dogs = ['Snickers', 'Sunny'];
  const dogSet = new Set(dogs);
  r = [];
  for (const d of dogSet) {
    r.push(d);
  }
  t.deepEqual(r, ['Snickers', 'Sunny']);
});
