import test from 'tape';

test('es2015 \ 05-destructuring \ destructuring arrays', (t) => {
  t.plan(10);

  const details = ['Wes Bos', 123, 'wesbos.com'];
  const [name, id, website] = details;
  t.equal(name, 'Wes Bos');
  t.equal(id, 123);
  t.equal(website, 'wesbos.com');

  const data = 'Basketball,Sports,90210,23,wes,bos,cool';
  const [itemName, category, sku, inventory] = data.split(',');
  t.equal(itemName, 'Basketball');
  t.equal(category, 'Sports');
  t.equal(sku, '90210');
  t.equal(inventory, '23');

  const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
  const [captain, assistant, ...players] = team;
  t.equal(captain, 'Wes');
  t.equal(assistant, 'Harry');
  t.deepEqual(players, ['Sarah', 'Keegan', 'Riker']);

});
