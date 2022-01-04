// Standard function
var functionGreeting = function (message, name) {
  return messsage + name;
};

// Arrow function
const arrowGreeting = (message, name) => message + name;
const arrowSingleParm = (message) => message;
const squared = (x) => x * x;

// Old this-that pattern:
// Child function's scope can access parent function's scope
var deliveryBoy = {
  name: "John",
  handleMessage: function (message, handler) {
    handler(message);
  },
  receive: function () {
    var that = this;
    this.handleMessage("Hello, ", function (message) {
      that.name;

      console.log(message + that.name);
    });
  },
};
deliveryBoy.receive();

// Refactor arrow function:
// Lexical scope reaches outside of immediate function
var deliveryMan = {
  name: "John",
  handleMessage: function (message, handler) {
    handler(message);
  },
  receive: function () {
    this.handleMessage("Hello, ", (message) =>
      console.log(message + this.name)
    );
  },
};
deliveryMan.receive();
