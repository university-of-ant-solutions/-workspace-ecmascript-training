import test from 'tape';

test('es2015 \ 11-symbols \ symbols', (t) => {

  t.plan(1);
  const wes = Symbol('Wes');
  const person = Symbol('Wes');
  const classRoom = {
    [Symbol('Mark')] : { grade: 50, gender: 'male' },
    [Symbol('olivia')]: { grade: 80, gender: 'female' },
    [Symbol('olivia')]: { grade: 80, gender: 'female' },
  };
  for (const person in classRoom) {
    console.log(person); // nothing happens
  }
  const syms = Object.getOwnPropertySymbols(classRoom);
  const data = syms.map(sym => classRoom[sym]);
  t.deepEqual([
    { grade: 50, gender: 'male' },
    { grade: 80, gender: 'female' },
    { grade: 80, gender: 'female' }], data);

});
