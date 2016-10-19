import test from 'tape';

test('es2015 \ 03-template-strings \ tagged-templates-dictionary-ANSWER', (t) => {
  t.plan(3);

  const dict = {
    HTML: 'Hyper Text Markup Language',
    CSS: 'Cascading Style Sheets',
    JS: 'JavaScript'
  };
  function addAbbreviations(strings, ...values) {
    t.deepEqual(strings, [
      'Hi my name is ',
      ' ',
      ' and I love to code ',
      ', ',
      ' and ',
      ' all day and all night long!'
    ]);

    t.deepEqual(values, [ 'Wes', 'Bos', 'JS', 'HTML', 'CSS' ]);

    const abbreviated = values.map(value => {
      if(dict[value]) {
        return `<abbr title="${dict[value]}">${value}</abbr>`
      }
      return value;
    });
    return strings.reduce((sentence, string, i) => {
      return sentence + string + (abbreviated[i] || '');
    }, '');
  }
  const first = 'Wes';
  const last = 'Bos';
  const sentence = addAbbreviations`Hi my name is ${first} ${last} and I love to code ${'JS'}, ${'HTML'} and ${'CSS'} all day and all night long!`

  t.equal(
    'Hi my name is Wes Bos and I love to code <abbr title="JavaScript">JS</abbr>, <abbr title="Hyper Text Markup Language">HTML</abbr> and <abbr title="Cascading Style Sheets">CSS</abbr> all day and all night long!',
    sentence
  );
});


