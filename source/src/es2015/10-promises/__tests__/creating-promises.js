import test from 'tape';

test('es2015 \ 10-promises \ creating promises', (t) => {

  t.plan(1);
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error('Err wes isn\'t cool'));
    }, 100);
  });
  p
  .then(data => {
    t.fail('should throw an error');
  })
  .catch(err => {
    t.equal(err.message, 'Err wes isn\'t cool');
  });
});
