import test from 'tape';

test('es2015 \ 02-arrow-functions \ arrow functions examples', (t) => {
  t.plan(2);

  const race = '100m Dash';
  const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];
  const win = winners.map((winner, i) => ({ name: winner, race, place: i + 1 }));
  t.deepEqual(win, [{
    name: winners[0],
    race,
    place: 1,
  }, {
    name: winners[1],
    race,
    place: 2,
  }, {
    name: winners[2],
    race,
    place: 3,
  }]);

  const ages = [23, 62, 45, 234, 2, 62, 234, 62, 34];
  const old = ages.filter(age => age >= 60);
  t.deepEqual(old, [62, 234, 62, 234, 62]);
});
