import test from 'tape';
import map from 'lodash/map';
import range from 'lodash/range';

function repeat(times, VALUE) {
  return map(range(times), () => VALUE);
}

function repeatedly(times, func) {
  return map(range(times), func);
}

function iterateUntil(fun, check, init) {
  const ret = [];
  let result = fun(init);
  while (check(result)) {
    ret.push(result);
    result = fun(result);
  }
  return ret;
}

test('function-js \ 04-higher-order-functions \ repeat-repeatedly-iterate-until ', (t) => {
  t.plan(3);

  // repeat funtion, which takes a number and a value and builds an array containing some number of the value,
  // duplicated
  const result1 = repeat(3, 'hi');
  t.deepEqual(result1, ['hi', 'hi', 'hi']);

  // Use functions, not values
  const result2 = repeatedly(3, () => ('ho'));
  t.deepEqual(result2, ['ho', 'ho', 'ho']);

  // iterateUntil
  // may want to instead call a given function until its return value crosses some threshold
  //
  const result3 = iterateUntil(n => (n + n), n => (n <= 1024), 1);
  t.deepEqual(result3, [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
});
