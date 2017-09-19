import test from 'tape';

test('es2015 \ 02-arrow-functions \ arrow functions', (t) => {
  t.plan(6);
  const names = ['wes', 'kait', 'lux'];
  const fullNames = names.map(name => `${name} bos`);
  t.deepEqual(fullNames, [
    'wes bos',
    'kait bos',
    'lux bos',
  ]);

  const fullNames2 = names.map(name => `${name} bos`);
  t.deepEqual(fullNames2, [
    'wes bos',
    'kait bos',
    'lux bos',
  ]);

  const fullNames3 = names.map(name => `${name} bos`);
  t.deepEqual(fullNames3, [
    'wes bos',
    'kait bos',
    'lux bos',
  ]);

  const fullNames4 = names.map(name => `${name} bos`);
  t.deepEqual(fullNames4, [
    'wes bos',
    'kait bos',
    'lux bos',
  ]);

  const fullNames5 = names.map(() => 'cool bos');
  t.deepEqual(fullNames5, [
    'cool bos',
    'cool bos',
    'cool bos',
  ]);

  const sayMyName = name => (`Hello ${name}!`);
  t.equal(sayMyName('Wes'), 'Hello Wes!');
});
