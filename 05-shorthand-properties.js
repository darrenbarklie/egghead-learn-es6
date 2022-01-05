// Destructuring lets you easily extract values from arrays and objects.
const foo = ["one", "two", "three"];
const [red, yellow, green] = foo;
console.log(red);
// => "one"

// Shorthand properties allow you to easily
// assign a value to a variable.
// Consider it destructuring backwards.

let firstname = "John";
let lastname = "Doe";

let person = { firstname, lastname };
console.log(person);
// => {firstname: "John", lastname: "Doe"}
let family = { wife: "Jane", son: "John Jr" };
console.log(family);
// => { firstname: 'John', lastname: 'Doe' }
//    { wife: 'Jane', son: 'John Jr' }
