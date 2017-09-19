import test from 'tape';
import fetch from 'node-fetch';

test('es2015 \ 16-generators \ generators syncish ajax', (t) => {
  t.plan(3);
  function ajax(url) {
    fetch(url).then(data => data.json()).then(data => dataGen.next(data));
  }
  function* steps() {
    console.log('fetching beers');
    const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
    t.equal(typeof beers, 'object');
    console.log('fetching wes');
    const wes = yield ajax('https://api.github.com/users/');
    t.equal(typeof wes, 'object');
    console.log('fetching fat joe');
    const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
    t.equal(typeof fatJoe, 'object');
  }
  const dataGen = steps();
  dataGen.next(); // kick it off
});
