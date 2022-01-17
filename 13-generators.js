// Make a generator by adding an * immediately
// after the function keyword.

function* greet() {
  console.log(`You called 'next()'`);
  yield "Hello";
}
greet();
// => [Nothing]

let greeter = greet();
console.log(greeter);
// => Object [Generator] {}

// Actually returns an object that `next`
// can be called on.

let next = greeter.next();
console.log(next);
// => You called 'next()'
// => { value: undefined, done: true }

// Value is undefined because we didn't
// yield anything from the generator.
// Done is true because we completed all
// yield statements.

// Set `yield "hello"` to return:
// => { value: 'Hello', done: false }

let done = greeter.next();
console.log(done);
// => { value: undefined, done: true }

// Another example

function* greet2() {
  console.log(`Generators are lazy...`);
  yield "One";
  console.log(`I'm not called until the second next()`);
  yield "Two";
  console.log(`Call me before "Three"?`);
  yield "Three";
  console.log(`Called when "done"`);
}

var greeter2 = greet2();
console.log("----------");
console.log(greeter2.next());
// => Generators are lazy...
// => { value: 'One', done: false }

console.log(greeter2.next());
console.log(greeter2.next());
console.log(greeter2.next());
// => Generators are lazy...
// => { value: 'One', done: false }
// => I'm not called until the second next()
// => { value: 'Two', done: false }
// => Call me before "Three"?
// => { value: 'Three', done: false }
// => Called when "done"

// Because it's an iterator, we can use
// the `for of` loop.
console.log("----------");
for (let word of greet2()) {
  console.log(word);
}
// => Generators are lazy...
// => One
// => I'm not called until the second next()
// => Two
// => Call me before "Three"?
// => Three
// => Called when "done"

// Assigning yield to a variable requires
// a little thinking, the assignment yields
// to the next `next()` call:
function* greet3() {
  let friendly = yield "How";
  friendly = yield friendly + "are";
  yield friendly + "you?";
}
var greeter3 = greet3();
console.log("----------");
console.log(greeter3.next().value);
console.log(greeter3.next(` the heck `).value);
console.log(greeter3.next(` silly ol' `).value);
// => How
// =>  the heck are
// =>  silly ol' you?

// Note that you cannot send a value to a
// newborn generator.

// It can help to test infinite loops with a
// control measure:
function* infiniteLoop() {
  let x = 0;
  let y = 0;
  while (true) {
    yield { x: x, y: y };
    x += 2;
    y += 1;
  }
}

console.log("----------");

var infiniteGenerator = infiniteLoop();
console.log(infiniteGenerator.next().value);
console.log(infiniteGenerator.next().value);
console.log(infiniteGenerator.next().value);
// => { x: 0, y: 0 }
// => { x: 2, y: 1 }
// => { x: 4, y: 2 }
// Doesn't run definitely, only when invoked.
