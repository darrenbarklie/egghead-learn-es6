// Traditional way of retrieving values from an object
var obj = {
  color: "red",
};
console.log(obj.color);
// => red

// Destructuring assignment
var { color } = {
  color: "green",
};
console.log(color);
// => green

// Destructure multiple values
var { color, size } = {
  color: "green",
  size: "large",
};
console.log(color, size);
// => green large

// A function that returns an object
// Destructured assignmnets can be renamed
function generateObject() {
  return {
    color: "red",
    size: "large",
    location: "New York",
    position: "forward",
  };
}
var { color: tone, size } = generateObject();
console.log(tone);
// => red
console.log(size);
// => large

// Throwaway unrequired values from an array
var [first, , , , fifth] = [1, 2, 3, 4, 5];
console.log(first);
// => 1
console.log(fifth);
// => 5

// Destructuring can occur within a loop
var people = [
  {
    firstName: "John",
    age: 22,
  },
  {
    firstName: "Jack",
    age: 23,
  },
  {
    firstName: "Jason",
    age: 25,
  },
];
people.forEach(({ firstName }) => console.log(firstName));
// => John
// => Jack
// => Jason

// Getting fancy
var [, Jackieboy] = people;
function logAge({ age }) {
  console.log(age);
}
logAge(Jackieboy);
// => 23
