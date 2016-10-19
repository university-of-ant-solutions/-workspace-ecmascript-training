import test from 'tape';

test('es2015 \ 07-an-array-of-mprovements \ array from and of', (t) => {
  t.plan(2);
  function sumAll() {
    // The Array.from() method creates a new Array instance from an array-like or iterable object.
    const nums = Array.from(arguments);
    return nums.reduce((prev, next) => prev + next, 0);
  }
  t.equal(sumAll(2, 34, 23, 234, 234, 234234, 234234, 2342), 471337);

  // The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
  const ages = Array.of(12, 4, 23, 62, 34);
  t.deepEqual(ages, [12, 4, 23, 62, 34]);
});
