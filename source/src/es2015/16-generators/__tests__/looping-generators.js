import test from 'tape';

test('es2015 \ 16-generators \ looping generators', (t) => {
  t.plan(1);
  function* lyrics() {
    yield 'But don\'t tell my heart';
    yield 'My achy breaky heart';
    yield 'I just don\'t think he\'d understand';
    yield 'And if you tell my heart';
    yield 'My achy breaky heart';
    yield 'He might blow up and kill this man';
  }
  const a = [];
  const achy = lyrics();
  for (const line of achy) {
    a.push(line);
  }
  t.deepEqual(a, [
    'But don\'t tell my heart',
    'My achy breaky heart',
    'I just don\'t think he\'d understand',
    'And if you tell my heart',
    'My achy breaky heart',
    'He might blow up and kill this man',
  ]);
});
