import test from 'tape';

test('es2015 \ 18-sets-and-weaksets \ sets brunch', (t) => {
  t.plan(5);

  const brunch = new Set();
  // as people start coming in
  brunch.add('wes');
  brunch.add('Sarah');
  brunch.add('Simone');
  // ready to open!
  const line = brunch.values();
  t.equal(line.next().value, 'wes');
  t.equal(line.next().value, 'Sarah');
  brunch.add('Heather');
  brunch.add('Snickers');
  t.equal(line.next().value, 'Simone');
  t.equal(line.next().value, 'Heather');
  t.equal(line.next().value, 'Snickers');
});
