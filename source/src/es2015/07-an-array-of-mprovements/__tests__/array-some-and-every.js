import test from 'tape';

test('es2015 \ 07-an-array-of-mprovements \ array some and every', (t) => {
  t.plan(2);
  const ages = [32, 15, 19, 12];
  // 👵👨 is there at least one adult in the group?
  const adultPresent = ages.some(age => age >= 18);
  t.deepEqual(adultPresent, true);

  // 🍻 is everyone old enough to drink?
  const allOldEnough = ages.every(age => age >= 19);
  t.deepEqual(allOldEnough, false);
});
