import test from 'tape';

test('es2015 \ 15-classes \ classes', (t) => {

  t.plan(8);
  // OLD
  function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  Dog.prototype.bark = function() {
    return (`Bark Bark! My name is ${this.name}`);
  };
  Dog.prototype.cuddle = function() {
    return (`I love you owner!`);
  };
  const snickers = new Dog('Snickers', 'King Charles');
  const sunny = new Dog('Sunny', 'Golden Doodle');

  t.equal(snickers.cuddle(), 'I love you owner!');
  t.equal(sunny.cuddle(), 'I love you owner!');
  t.equal(snickers.bark(), 'Bark Bark! My name is Snickers');
  t.equal(sunny.bark(), 'Bark Bark! My name is Sunny');

  // NEW
  class Dog2 {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
    bark() {
      return (`Bark Bark! My name is ${this.name}`)
    }
    cuddle() {
      return (`I love you owner!`);
    }
    static info() {
      return ('A dog is better than a cat by 10 times');
    }
    get description() {
      return `${this.name} is a ${this.breed} type of dog`;
    }
    set nicknames(value) {
      this.nick = value.trim();
    }
    get nicknames() {
      return this.nick.toUpperCase();
    }
  }
  const snickers2 = new Dog2('Snickers', 'King Charles');
  const sunny2 = new Dog2('Sunny', 'Golden Doodle');
  t.equal(snickers2.cuddle(), 'I love you owner!');
  t.equal(sunny2.cuddle(), 'I love you owner!');
  t.equal(snickers2.bark(), 'Bark Bark! My name is Snickers');
  t.equal(sunny2.bark(), 'Bark Bark! My name is Sunny');

});
