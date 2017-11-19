import test from 'tape';

test('es2015 \ 17-proxies \ proxies case saftey', (t) => {
  t.plan(1);

  const safeHandler = {
    set(target, name, value) {
      const likeKey = Object.keys(target).find(k => k.toLowerCase() === name.toLowerCase());
      if (!(name in target) && likeKey) {
        throw new Error(`Oops! Looks like like we already have a(n) ${name} property but with the case of ${likeKey}.`);
      }
      target[name] = value;
      return true;
    },
  };
  const saftey = new Proxy({ id: 100 }, safeHandler);
  try {
    saftey.ID = 200;
  } catch (e) {
    t.equal(e.message, 'Oops! Looks like like we already have a(n) ID property but with the case of id.');
  }
});
