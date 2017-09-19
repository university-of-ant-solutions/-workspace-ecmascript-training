import test from 'tape';

test('es2015 \ 06-iterables-looping \ for of examples', (t) => {
  t.plan(5);

  const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];
  const r = [
    'Chuck is the 1 item',
    'Brisket is the 2 item',
    'Shank is the 3 item',
    'Short Rib is the 4 item',
  ];
  for (const [i, cut] of cuts.entries()) {
    t.equal(`${cut} is the ${i + 1} item`, r[i]);
  }
  function addUpNumbers() {
    let total = 0;
    for (const num of arguments) {
      total += num;
    }
    return total;
  }
  t.equal(addUpNumbers(10, 23, 52, 34, 12, 13, 123), 267);

  // const name = 'Wes Bos';
  // for (const char of name) {
  //   console.log(char);
  // }
});
