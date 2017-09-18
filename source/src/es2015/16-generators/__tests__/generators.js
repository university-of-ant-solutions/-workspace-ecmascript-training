import test from 'tape';

test('es2015 \ 16-generators \ generators', (t) => {
  t.plan(6);

  function* listPeople() {
    let i = 0;
    yield i;
    i++;
    yield i;
    i++;
    yield i;
  }
  const people = listPeople();
  let { value } = people.next();
  t.equal(value, 0);
  value = people.next().value;
  t.equal(value, 1);
  value = people.next().value;
  t.equal(value, 2);
  value = people.next().value;
  t.equal(value, undefined);

  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];
  function* loop(arr) {
    for (const item of arr) {
      yield item;
    }
  }
  const inventorGen = loop(inventors);
  let { value: value2 } = inventorGen.next();
  t.deepEqual(value2, inventors[0]);
  value2 = inventorGen.next().value;
  t.deepEqual(value2, inventors[1]);
});
