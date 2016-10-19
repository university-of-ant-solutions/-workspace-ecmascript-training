import test from 'tape';

test('es2015 \ 03-template-strings \ template strings looping', (t) => {
  t.plan(1);
  const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 },
    { name: 'Sunny', age: 1 }
  ];
  const markup = `
    <ul class="dogs">
      ${dogs.map(dog => `
        <li>
          ${dog.name}
          is
          ${dog.age * 7}
        </li>`).join('')}
    </ul>
  `;
  t.equal(markup, markup);
});
