import test from 'tape';

test('es2015 \ 09-object-literal-upgrades \ object literal upgrades', (t) => {
  t.plan(4);
  const first = 'snickers';
  const last = 'bos';
  const age = 2;
  const breed = 'King Charles Cav';
  const dog = {
    firstName: first,
    last,
    age,
    breed,
    pals: ['Hugo', 'Sunny']
  };
  t.deepEqual(dog, {
    firstName: 'snickers',
    last: 'bos',
    age: 2,
    breed: 'King Charles Cav',
    pals: ['Hugo', 'Sunny']
  });

  const modal = {
    create(selector) {},
    open(content) {},
    close(goodbye) {}
  };
  t.deepEqual(Object.keys(modal), [ 'create', 'open', 'close' ]);

  function invertColor(color) {
      return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6);
  }
  const key = 'pocketColor';
  const value = '#ffc600';
  const tShirt = {
    [key]: value,
    [`${key}Opposite`]: invertColor(value)
  };
  t.deepEqual(Object.keys(tShirt), [ 'pocketColor', 'pocketColorOpposite' ]);

  const keys = ['size', 'color', 'weight'];
  const values = ['medium', 'red', 100];
  const shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
  }
  t.deepEqual(Object.keys(shirt), ['size', 'color', 'weight']);
});
