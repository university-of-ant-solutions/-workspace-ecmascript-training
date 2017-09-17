import test from 'tape';

test('es2015 \ 01-new-variables \ let const', (t) => {
  t.plan(4);

  const key = 'abc123';
  try {
    key = 'a';
  }
  catch (e) {
    t.equal(e.message, 'Assignment to constant variable.');
  }

  let points = 50;
  try {
    points = 10;
    t.equal(points, 10);
  }
  catch (e) {
    t.fail(e.message);
  }

  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
  const person = {
    name: 'Wes'
  };

  try {
    person.age = 28;
    t.equal(person.age, 28);
  }
  catch (e) {
    t.fail(e.message);
  }

  try {
    const wes = Object.freeze(person);
    wes.job = 'it'
  }
  catch (e) {
    t.equal(e.message, 'Cannot add property job, object is not extensible');
  }

});
