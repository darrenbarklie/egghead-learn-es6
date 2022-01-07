// Take an array and spread out to individual values
console.log(...[1, 2, 3]);
// => 1 2 3

let first = [1, 2, 3];
let second = [4, 5, 6];
first.push(...second);
console.log(first);
// => [1, 2, 3, 4, 5, 6]

// You can also push in an array of parmeters
function addThreeThings(a, b, c) {
  let result = a + b + c;
  console.log(result);
}
addThreeThings(...first);
// => 6
addThreeThings(...second);
// => 15
