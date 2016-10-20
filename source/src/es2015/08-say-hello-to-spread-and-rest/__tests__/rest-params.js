import test from 'tape';

test('es2015 \ 08-say-hello-to-spread-and-rest \ rest params', (t) => {
  t.plan(6);
  const runner = ['Wes Bos', 123, 5.5, 5, 3, 6, 35];
  const [name, id, ...runs] = runner;
  t.equal(name, 'Wes Bos');
  t.equal(id, 123);
  t.deepEqual(runs, [5.5, 5, 3, 6, 35]);

  const team = ['Wes', 'Kait', 'Lux', 'Sheena', 'Kelly'];
  const [captian, assistant, ...players] = team;
  t.equal(captian, 'Wes');
  t.equal(assistant, 'Kait');
  t.deepEqual(players, ['Lux', 'Sheena', 'Kelly']);
});
