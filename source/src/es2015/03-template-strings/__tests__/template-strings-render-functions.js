import test from 'tape';

test('es2015 \ 03-template-strings \ template strings looping', (t) => {
  t.plan(1);
  const beer = {
    name: 'Belgian Wit',
    brewery: 'Steam Whistle Brewery',
    keywords: ['pale', 'cloudy', 'spiced', 'crisp'],
  };
  function renderKeywords(keywords) {
    return `
      <ul>
        ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
      </ul>
    `;
  }
  const markup = `
    <div class="beer">
      <h2>${beer.name}</h2>
      <p class="brewery">${beer.brewery}</p>
      ${renderKeywords(beer.keywords)}
    </div>
  `;
  t.equal(markup, markup);
  /**
    <div class="beer">
      <h2>Belgian Wit</h2>
      <p class="brewery">Steam Whistle Brewery</p>
      <ul>
        <li>pale</li><li>cloudy</li><li>spiced</li><li>crisp</li>
      </ul>
    </div>
   */
});
