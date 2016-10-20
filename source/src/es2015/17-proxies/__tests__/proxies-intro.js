import test from 'tape';

test('es2015 \ 17-proxies \ proxies-intro', (t) => {

  t.plan(6);

  const person = { name: 'Wes', age: 100 };
  let personProxy = new Proxy(person, {
    get(target, name) {
      t.deepEqual(target, person);
      t.equal(name, 'name');
      return target[name].toUpperCase();
    },
    set(target, name, value) {
      t.equal(name, 'name');
      t.equal(value, 'Wesley');
      t.deepEqual(target, person);

      if(typeof value === 'string') {
        target[name] = value.trim().toUpperCase() + '✂️';
      }
      return true;
    }
  });
  t.equal(personProxy.name, 'WES');
  personProxy.name = 'Wesley';
});
