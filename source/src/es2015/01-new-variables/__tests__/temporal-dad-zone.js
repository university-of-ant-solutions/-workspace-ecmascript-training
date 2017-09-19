import test from 'tape';

test('es2015 \ 01-new-variables \ temporal dad zone', (t) => {
  t.plan(2);
  try {
    console.log(pizza);
  } catch (e) {
    t.equal('pizza is not defined', e.message);
  }
  const pizza = 'Deep Dish 🍕🍕🍕';
  t.equal(pizza, 'Deep Dish 🍕🍕🍕');
});
