import test from 'tape';

test('es2015 \ 03-template-strings \ tagged template', (t) => {
  t.plan(1);
  function highlight(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
      str += `${string} <span contenteditable class="hl">${values[i] || ''}</span>`;
    });
    return str;
  }
  const name = 'Snickers';
  const age = 100;
  const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
  t.equal(sentence, 'My dog\'s name is  <span contenteditable class="hl">Snickers</span> and he is  <span contenteditable class="hl">100</span> years old <span contenteditable class="hl"></span>');
});
