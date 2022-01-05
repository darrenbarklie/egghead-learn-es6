// Default parameters can be overwritten by assignment
function greet(greeting, name = "John") {
  console.log(greeting + "," + name);
}

greet("Hello");
// => Hello, John
greet("Hello", "Jane");
// => Hello, Jane

// Assign a default function as a parameter
function logFunc(
  complete = function () {
    console.log("Completed");
  }
) {
  complete();
}
logFunc();

// Assign a default arrow function as a parameter
function logFunc2(complete = () => console.log("Completed 2")) {
  complete();
}
logFunc2();
