// Object enhancements
var color = "red";
var speed = 10;
function go() {
  console.log("vroom");
}

var car = { color, speed, go };

console.log(car.color);
// => red

// If you declare a property with the same name as a variable, you can use the variable name instead. Same as car = { color: color, speed: speed }

// This also works for functions
console.log(car.go());
// => vroom

// Shorthand syntax
// for function declaration
// and computed properties (evaluation)
var breaks = "stop";

var car2 = {
  color,
  speed,
  go() {
    console.log("vroom");
  },
  ["horn"]: function () {
    console.log("beep");
  },
  [breaks]: function () {
    console.log("eeek");
  },
};

console.log(car2.stop);
// => eeek

// car["horn"]
