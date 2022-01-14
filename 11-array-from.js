const products = document.querySelectorAll(".product");
console.log(products);
// => NodeList(5) [li.product, li.product, li.product, li.product, li.product]

// NodeList is like an array, but is not an array.
// It is a collection of nodes.
// It does not offer any methods like `filter`, `forEach`, `reduce`, etc.

// We can convert NodeList to an array:
const productsArray = Array.from(products);
console.log(productsArray);
// => (5) [li.product, li.product, li.product, li.product, li.product]

// Check price is less than 10
productsArray
  .filter((product) => parseFloat(product.innerHTML) < 10)
  .forEach((product) => (product.style.color = "red"));
console.log(productsArray);
