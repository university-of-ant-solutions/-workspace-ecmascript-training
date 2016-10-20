import test from 'tape';
import fetch from 'node-fetch';

test('es2015 \ 10-promises \ multiple promises', (t) => {

  t.plan(2);
  const weather = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ temp: 29, conditions: 'Sunny with Clouds'});
    }, 100);
  });
  const tweets = new Promise((resolve) => {
    setTimeout(() => {
      resolve(['I like cake', 'BBQ is good too!']);
    }, 200);
  });
  Promise
  .all([weather, tweets])
  .then(responses => {
    const [weatherInfo, tweetInfo] = responses;
    t.deepEqual(weatherInfo, { temp: 29, conditions: 'Sunny with Clouds'});
    t.deepEqual(tweetInfo, ['I like cake', 'BBQ is good too!']);
  });

});
