import test from 'tape';
import reduce from 'lodash/reduce';
import get from 'lodash/get';

function finder (valueFun, bestFun, coll) {
  return reduce(coll, (best, current) => {
    const bestValue = valueFun(best);
    const currentValue = valueFun(current);
    return (bestValue === bestFun(bestValue, currentValue)) ? best : current;
  }, {});
}

function pluck (field) {
  return function (objs) {
    return get(objs, field);
  }
}

test('function-js \ 04-higher-order-functions \ finder', (t) => {

  t.plan(2);

  // finder, that takes two functions: one to build a comparable value,
  // and another to compare two values and return the “best” value of the two.
  const people = [{name: "Fred", age: 65}, {name: "Lucy", age: 36}, {name: "Hiep", age: 40}];
  t.deepEqual(finder(pluck('age'), Math.max, people), {name: "Fred", age: 65});
  t.deepEqual(finder(pluck('age'), Math.min, people), {name: "Lucy", age: 36});
});
