import test from 'tape';

test('es2015 \ 05-destructuring \ destructuring in action', (t) => {
  t.plan(2);

  let inRing = 'Hulk Hogan';
  let onSide = 'The Rock';

  [inRing, onSide] = [onSide, inRing];
  t.equal(inRing, 'The Rock');
  t.equal(onSide, 'Hulk Hogan');

});
