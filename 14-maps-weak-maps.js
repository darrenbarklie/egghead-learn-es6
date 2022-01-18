// Map object is a simple key value store.
// JS objects and maps are very similar to each other.

// Some differences:
// - Objects have a prototype, by default there are keys in the map
// - Object keys must be a string, but in a map can be any primitive type
// - Maps have methods that allow you track the size of the map

// Methods:
// set()
// get()
// size
// clear()
// has()
// keys()
// entries()
// values()

var myMap = new Map();

myMap.set("foo", "bar");
myMap.set("hello", "world");
console.log(myMap.get("foo"));
// => bar
console.log(myMap.get("qwerty"));
// => undefined
console.log(myMap.size);
// => 2

// myMap.clear();
// console.log(myMap.size);
// => 0

console.log(myMap.has("foo"));
// => true

// Map gives us iterators to loop over the keys and values
console.log(myMap.keys());
// => [Map Iterator] { 'foo', 'hello' }

console.log(myMap.entries());
// => [Map Entries] { [ 'foo', 'bar' ], [ 'hello', 'world' ] }

console.log(myMap.values());
// => [Map Iterator] { 'bar', 'world' }

for (var [key, value] of myMap.entries()) {
  console.log(key, value);
}
// => foo bar
// => hello world

// Advanced setting of object keys

myMap2 = new Map();
myMap2.set(function something() {}, "foo2");
myMap2.set({ javascript: "object" }, "bar2");
myMap2.set("string", "bar2");

console.log("---------");
console.log(myMap2);

// No references are held to the keys of the map
// This allows for automatic garbage collection
// This is useful for storing objects that are not referenced anywhere else
// They are innumerable, so cannot be mapped over

// - Cannot use string as a key in a weak map
// - keys(), values() and entries() are not supported functions

myWeakMap = new WeakMap();

myWeakMap.set(function something() {}, "foo2");
// Okay

myWeakMap.set({ javascript: "object" }, "bar2");
// Okay

// myWeakMap.set("string", "bar2");
// => ERROR: Invalid value used as weak map key

// for (var [key, value] of myWeakMap.entries()) {
//   console.log(key, value);
// }
// => ERROR: myWeakMap.entries is not a function or its return value is not iterable

console.log("---------");
console.log(myWeakMap);
