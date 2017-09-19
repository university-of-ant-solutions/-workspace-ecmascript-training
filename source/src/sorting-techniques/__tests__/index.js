import test from 'tape';
import bubble from '../bubble-sort/index.js';
import insertion from '../insertion-sort/index.js';
import selection from '../selection-sort/index.js';

const algorithm = {
  bubble,
  insertion,
  selection,
};
test('sorting techniques', (assert) => {
  for (const prop in algorithm) {
    if (algorithm.hasOwnProperty(prop)) {
      test(`${prop}-sort \ return an ordered array`, (t) => {
        t.plan(2);
        let input = [4, 1, 3, 5, 2];
        t.deepEqual(algorithm[prop](input), [1, 2, 3, 4, 5]);

        input = [-4, 1, 3, -5, 2];
        t.deepEqual(algorithm[prop](input), [-5, -4, 1, 2, 3]);
      });
    }
  }
  assert.end();
});
