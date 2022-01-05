// ES5 developers use a CAPITALISED var name
// to declare a constant, and a lowercase var
// name to declare a variable, though no
// protections are actually afforded by JS.

var VALUE = "Hello World";
VALUE = "foo bar";
console.log("value: ", VALUE);
// => value: foo bar
// Not intended by dev

// const declares a read-only variable
const constantReference = {};
constantReference.foo = "bar";
console.log("value: ", constantReference);
// => value: {"foo": "bar"}
// constantReference = "foo bar";
// console.log("value: ", constantReference);
// => ERROR: TypeError: Assignment to constant variable.

// Cannot change the reference of the contstant declaration.

// const adhere to the block-scope rules
if (true) {
  const foo = "bar";
}
console.log("foo: ", foo);
// => ERROR: ReferenceError: foo is not defined
