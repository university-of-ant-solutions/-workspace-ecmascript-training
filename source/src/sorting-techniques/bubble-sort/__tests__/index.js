import test from 'tape';
import bubble from '../index.js';

test('sorting techniques \ bubble-sort \ returl an ordered array', (t) => {
  t.plan(2);
  let input = [4, 1, 3, 5, 2];
  t.deepEqual(bubble(input), [1, 2, 3, 4, 5]);

  input = [-4, 1, 3, -5, 2];
  t.deepEqual(bubble(input), [-5, -4, 1, 2, 3]);
});
