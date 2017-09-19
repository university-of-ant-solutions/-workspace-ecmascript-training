import test from 'tape';

test('es2015 \ 05-destructuring \ destructuring intro', (t) => {
  t.plan(2);
  const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
      social: {
        twitter: 'https://twitter.com/wesbos',
        facebook: 'https://facebook.com/wesbos.developer',
      },
      web: {
        blog: 'https://wesbos.com',
      },
    },
  };
  const { twitter: tweet, facebook: fb } = wes.links.social;
  t.equal(tweet, 'https://twitter.com/wesbos');
  t.equal(fb, 'https://facebook.com/wesbos.developer');
});
