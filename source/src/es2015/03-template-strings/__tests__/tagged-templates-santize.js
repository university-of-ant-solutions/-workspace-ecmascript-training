import test from 'tape';

test('es2015 \ 03-template-strings \ tagged template santize', (t) => {
  t.plan(1);
  function sanitize(strings, ...values) {
    return strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ''}`, '');
  }
  const first = 'Wes';
  const aboutMe = 'I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert(\'you got hacked\');" />';
  const html = sanitize`
    <h3>${first}</h3>
    <p>${aboutMe}</p>
  `;
  t.equal(`
    <h3>Wes</h3>
    <p>I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked');" /></p>
  `, html);
});
