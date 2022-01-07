// Concatination
var salutation = "Hello";
var concatGreeting = salutation + ", " + "World";
var planet = "Earth";

// Template literal
var literalGreeting = `${salutation}, World`;
var intergalaticGreeting = `${salutation}, ${planet}`;

console.log(literalGreeting);
// => Hello, World

console.log(intergalaticGreeting);
// => Hello, Earth

var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x + y}`;
console.log(equation);
// => 1 + 2 = 3

// Advanced usage

function parse(strings, ...values) {
  if (values[0] < "21:45:00") {
    values[1] = "awake";
  } else {
    values[1] = "sleepy";
  }
  console.log(values[1]);
  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

var message = parse`It's ${new Date().toLocaleTimeString()}, I'm ${""}`;
console.log(message);
