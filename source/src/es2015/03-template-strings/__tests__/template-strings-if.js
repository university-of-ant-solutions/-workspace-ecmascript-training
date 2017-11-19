import test from 'tape';

test('es2015 \ 03-template-strings \ template strings if', (t) => {
  t.plan(1);
  const song = {
    name: 'Dying to live',
    artist: 'Tupac',
    featuring: 'Biggie Smalls',
  };
  const markup = `
    <div class="song">
      <p>
        ${song.name} — ${song.artist}
        ${song.featuring ? `(Featuring ${song.featuring})` : ''}
      </p>
    </div>
  `;
  t.equal(`
    <div class="song">
      <p>
        Dying to live — Tupac
        (Featuring Biggie Smalls)
      </p>
    </div>
  `, markup);
});
