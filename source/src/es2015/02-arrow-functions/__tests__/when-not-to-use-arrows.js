import test from 'tape';

test('es2015 \ 02-arrow-functions \ when not to use arrows', (t) => {
  t.plan(2);

  // When you need a method to bind to an object
  const person = {
    points: 23,
    score() {
      this.points++;
    }
  }
  person.score();
  t.equal(person.points, 24);

  // When you need to add a prototype method
  class Car {
    constructor(make, colour) {
      this.make = make;
      this.colour = colour;
    }
  }
  const beemer = new Car('bmw', 'blue');
  const subie = new Car('Subaru', 'white');
  Car.prototype.summarize = function() {
    return `This car is a ${this.make} in the colour ${this.colour}`;
  };
  t.equal(beemer.summarize(), 'This car is a bmw in the colour blue');

});
