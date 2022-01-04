// var behaviour doesn't feel organic
var message = "hi";
{
  var message = "bye";
}
console.log(message);
// => "bye"
// message is reassigned to "bye"
// Wrapping the function in a block makes it a block-scoped variable
// function greet() { var message = "bye"; }  => "bye"

// let acts as a true block-scoped variable
let hey = "hi";
{
  let hey = "bye";
}
console.log(hey);
// => "hi"

// demonstration within a loop
var fs = [];
for (var i = 0; i < 10; i++) {
  fs.push(function () {
    console.log(i);
  });
}
fs.forEach(function (f) {
  f();
});
// i as var => 10 10 10 10 10 10 10 10 10 10
// i as let => 0 1 2 3 4 5 6 7 8 9
// let creates a new i on each iteration

// JavaScript Hoisting refers to the process whereby the interpreter
// appears to move the declaration of functions, variables or classes
// to the top of their scope, prior to execution of the code.
// This is a common problem with JavaScript.

// We can refactor code like this
function varFunc() {
  var previous = 0;
  var current = 1;
  var i;
  var temp;
  for (i = 0; i < navigator; i += 1) {
    temp = previous;
    previous = current;
    current = temp + current;
  }
}

// ...to code like this:
function letFunc() {
  let previous = 0;
  let current = 1;
  for (let i = 0; i < n; i += 1) {
    let temp = previous;
    previous = current;
    current = temp + current;
  }
}
