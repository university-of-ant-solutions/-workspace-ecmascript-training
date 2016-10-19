import test from 'tape';

test('es2015 \ 02-arrow-functions \ arrow functions this', (t) => {
  t.plan(2);

  setTimeout(() => {
    t.equal(this, undefined);
  }, 0);

  const o = {};
  function h () {
    setTimeout(() => {
      t.equal(this, o);
    }, 0);
  };
  h = h.bind(o);
  h();

});
