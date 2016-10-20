import test from 'tape';

test('es2015 \ 08-say-hello-to-spread-and-rest \ spread introduction', (t) => {
  t.plan(2);

  const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
  const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];
  const pizzas = [...featured, 'veg', ...specialty];
  const fridayPizzas = [...pizzas];
  t.deepEqual(pizzas, ['Deep Dish', 'Pepperoni', 'Hawaiian', 'veg', 'Meatzza', 'Spicy Mama', 'Margherita']);
  t.deepEqual(fridayPizzas, ['Deep Dish', 'Pepperoni', 'Hawaiian', 'veg', 'Meatzza', 'Spicy Mama', 'Margherita']);
});
