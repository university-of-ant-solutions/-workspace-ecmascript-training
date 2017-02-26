import test from 'tape';
import maxBy from 'lodash/maxBy';
import minBy from 'lodash/minBy';

test('function-js \ 04-higher-order-functions \ lodash-max-min-function', (t) => {

  t.plan(2);

  const people = [{name: "Fred", age: 65}, {name: "Lucy", age: 36}, {name: "Hiep", age: 40}];

  t.deepEqual(maxBy(people, (p) => (p.age)), {name: "Fred", age: 65});
  t.deepEqual(minBy(people, (p) => (p.age)), {name: "Lucy", age: 36});

});
