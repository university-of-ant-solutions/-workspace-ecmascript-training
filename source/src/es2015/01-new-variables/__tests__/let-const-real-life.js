import test from 'tape';

test('es2015 \ 01-new-variables \ let const real life', (t) => {
  t.plan(2);
  {
    const name = 'wes';
    t.equal(name, 'wes');
  }
  try {
    console.log(name);
  }
  catch (e) {
    t.equal('name is not defined', e.message);
  }
});
