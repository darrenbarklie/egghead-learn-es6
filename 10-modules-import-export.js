import { sumTwo as sumTwoNumbers, sumThree } from "./10-addition.js";
import * as subtraction from "./10-subtraction.js";
// import * as _ from 'lodash';

console.log("2 + 3 = " + sumTwoNumbers(2, 3));
console.log("2 + 3 + 4 = " + sumThree(2, 3, 4));

console.log("3 - 2 = " + subtraction.subtractTwo(3, 2));
console.log("10 - 3 - 2 = " + subtraction.subtractThree(10, 3, 2));
