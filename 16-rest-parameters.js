// rest parameters vs arguements keyword

// `arguments` keyword returns an array-like object

function myFunc() {
  console.log(arguments);
  console.log(arguments.length);
}
myFunc(1, 2, 3);
// => [Arguments] { '0': 1, '1': 2, '2': 3 }
// => 3

// `arguments` is an array-like object, but lacks
// a number of methods that are common to arrays.
// e.g. arguments.forEach() is not a function

function StoreConstructor() {
  var aisle = {
    fruit: [],
    vegetable: [],
  };

  return {
    // StoreConstructor.add('category', 'item1', 'item2')
    addES5: function (category) {
      // ES5 required splice/call hack:
      var items = [].splice.call(arguments, 1);
      // Excludes first argument (category), lists remaining arguments
      console.log(items);
      // Push items to the category array
      items.forEach(function (value, index, array) {
        aisle[category].push(value);
      });
    },
    addES6: function (category, ...items) {
      items.forEach(function (v, i, a) {
        aisle[category].push(v);
      });
    },
    aisle: aisle,
  };
}

var myGroceryStore = new StoreConstructor();

myGroceryStore.addES5("fruit", "apple", "orange");
// => [ 'apple', 'orange' ]

console.log(myGroceryStore.aisle);
// => { fruit: [ 'apple', 'orange' ], vegetable: [] }

myGroceryStore.addES6("vegetable", "carrot", "tomato");
console.log(myGroceryStore.aisle);
// => { fruit: [ 'apple', 'orange' ], vegetable: [ 'carrot', 'tomato' ] }
