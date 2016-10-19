import test from 'tape';

test('es2015 \ 02-arrow-functions \ default-arguments', (t) => {
  t.plan(1);
  function calculateBill(total, tax = 0.13, tip = 0.15) {
    return total + (total * tax) + (total * tip);
  }
  const totalBill = calculateBill(100, undefined, 0.25);
  t.equal(totalBill, 100 + (100 * 0.13) + (100 * 0.25));
});
