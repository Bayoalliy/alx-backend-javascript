import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

const array = [1, 2, 'test'];
const set = new Set(array);
const array2 = [1, 2, 'test', 'banana']
console.log(hasValuesFromArray(set, array2));
