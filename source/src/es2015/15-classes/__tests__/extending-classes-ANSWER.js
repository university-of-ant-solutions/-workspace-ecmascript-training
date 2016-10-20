import test from 'tape';

test('es2015 \ 15-classes \ extending classes ANSWER', (t) => {
  t.plan(6);

  class Animal {
    constructor(name) {
      this.name = name;
      this.thirst = 100;
      this.belly = [];
    }
    drink() {
      this.thirst -= 10;
      return this.thirst;
    }
    eat(food) {
      this.belly.push(food);
      return this.belly;
    }
  }

  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    bark() {
      return ('BARK BARK BARK!');
    }
  }

  const rhino = new Animal('Rhiney');
  const snickers = new Dog('Snickers', 'King Charles');
  t.equal(rhino.bark(), 'BARK BARK BARK!');
  t.equal(snickers.bark(), 'BARK BARK BARK!');
  rhino.drink();
  snickers.drink();
  t.equal(rhino.thirst, 90);
  t.equal(snickers.thirst, 90);
  t.equal(rhino.breed, undefined);
  t.deepEqual(snickers.breed, 'King Charles');

});
