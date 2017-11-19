import test from 'tape';

test('es2015 \ 05-destructuring \ destructuring WTF', (t) => {
  t.plan(2);
  // Object Destructuring with variable renaming & default values
  const { w: width = 400, h: height = 500 } = { w: 800 };
  t.equal(width, 800);
  t.equal(height, 500);
});
