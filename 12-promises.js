// Promises
// Callback inside an Promise takes two arguments: resolve and reject.
var d = new Promise((resolve, reject) => {
  setTimeout(() => {
    var cointoss = false;
    if (cointoss) {
      resolve("Successfully resolved!");
    } else {
      reject("Failure encountered...");
    }
  }, 2000);
});
// Resolved or rejected
// Value of `data` or `error` is what is returned from the resolve function.
d.then((data) => {
  console.log("Success: ", data);
}).catch((error) => {
  console.error("Error: ", error);
});

// Error callback can be passed as second argument to `.then()`
// Can also be written as:
d.then(
  (data) => console.log("Success: ", data),
  (error) => {
    console.error("Error: ", error);
  }
);
// May not be most obvious, prefer to be explicit

// The return of chained `.then()` returns a new Promise that is passed to the next `.then()`
