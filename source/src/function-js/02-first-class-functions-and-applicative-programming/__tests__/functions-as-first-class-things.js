import test from 'tape';

test('function-js \ 02-first-class-functions-and-applicative-programming \ functions-as-first-class-things', (t) => {

  t.plan(7);
  // A number can be stored in a variable and so can a function:
  const fortytwo = function() { return 42 };
  t.equal(42, fortytwo());

  // A number can be stored in an array slot and so can a function:
  const fortytwos = [42, function() { return 42 }];
  t.equal(fortytwos[0], 42);
  t.equal(fortytwos[1](), 42);

  // A number can be stored in an object field and so can a function:
  const fortytwos2 = {number: 42, fun: function() { return 42 }};
  t.equal(fortytwos2.number, 42);
  t.equal(fortytwos2.fun(), 42);

  // A number can be created as needed and so can a function:
  t.equal(42 + (function() { return 42 })(), 84); //=> 84

  // A number can be passed to a function and so can a function:
  function weirdAdd(n, f) { return n + f() };
  t.equal(weirdAdd(42, function() { return 42 }), 84);

  // A number can be returned from a function and so can a function:
  // return 42;
  // return function() { return 42 };
});
