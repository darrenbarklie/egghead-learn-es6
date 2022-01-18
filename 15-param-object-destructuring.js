console.clear();

// Leverage the default value feature of object destructuing,
// we can provide required parameters and/or default values

// Ajax function using ES6 param destructuring with default values
function ajax({
  type = "get",
  url = requiredParameter("url"),
  data = {},
  success = () => {},
  error = () => {},
  isAsync = true,
} = {}) {
  console.log(
    JSON.stringify({ type, url, data, success, error, isAsync }, null, 2)
  );
}

try {
  ajax({ url: "http://my.api.io", success: () => {} });
} catch (e) {
  console.warn(e.message);
}

// Returns default values for values we didn't pass
// => {
// =>   "type": "get",
// =>   "url": "http://my.api.io",
// =>   "data": {},
// =>   "isAsync": true
// => }

// Set a required parameter failsafe
function requiredParameter(name) {
  throw new Error(`Missing required parameter: ${name}`);
}

// try {
//   ajax({ success: () => {} });
// } catch (e) {
//   console.warn(e.message);
// }
// => Missing required parameter: url
