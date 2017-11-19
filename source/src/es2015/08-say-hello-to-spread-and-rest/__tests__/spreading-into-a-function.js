import test from 'tape';

test('es2015 \ 08-say-hello-to-spread-and-rest \ spreading into a function', (t) => {
  t.plan(2);
  const inventors = ['Einstein', 'Newton', 'Galileo'];
  const newInventors = ['Musk', 'Jobs'];
  inventors.push(...newInventors);
  t.deepEqual(inventors, [
    'Einstein', 'Newton', 'Galileo', 'Musk', 'Jobs',
  ]);

  const name = ['Wes', 'Bos'];
  function sayHi(first, last) {
    return (`Hey there ${first} ${last}`);
  }
  t.equal('Hey there Wes Bos', sayHi(...name));
});
