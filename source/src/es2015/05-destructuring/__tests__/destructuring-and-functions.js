import test from 'tape';

test('es2015 \ 05-destructuring \ destructuring and functions', (t) => {
  t.plan(1);

  function convertCurrency(amount) {
    const converted = {
      USD: amount * 0.76,
      GPB: amount * 0.53,
      AUD: amount * 1.01,
      MEX: amount * 13.30
    };
    return converted;
  }
  function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
    return total + (tip * total) + (tax * total);
  }
  const bill = tipCalc({ tip: 0.20, total: 200 });
  t.equal(bill, 200 + (0.20 * 200) + (0.13 * 200));

});


