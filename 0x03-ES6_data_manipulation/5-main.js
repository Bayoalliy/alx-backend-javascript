import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

let array = createInt8TypedArray(10, 0, 5);
console.log(array.getInt8(0));
