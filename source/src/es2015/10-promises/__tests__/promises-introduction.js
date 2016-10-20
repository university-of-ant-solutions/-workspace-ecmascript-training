import test from 'tape';
import fetch from 'node-fetch';

test('es2015 \ 10-promises \ promises introduction', (t) => {
  t.plan(1);

  const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
  postsPromise
  .then(data => data.json())
  .then(data => {
    t.equal(typeof data, 'object');
  })
  .catch((err) => {
    t.fail(err.message);
  });

});
