const test = require('tape');

function readOnly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Cat {
  constructor(nickname = 'mimi') {
    this.nickname = nickname;
  }

  @readOnly
  meow () {
    return `${this.nickname} say meow !`;
  }
}

test('class test', function (t) {
  t.plan(2);
  const c = new Cat();

  t.equal(c.nickname, 'mimi');
  try {
    c.meow = function(){};
  }
  catch(e) {
    t.equal(e.message, 'Cannot assign to read only property \'meow\' of #<Cat>');
  }
});
