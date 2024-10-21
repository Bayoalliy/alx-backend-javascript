import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
console.log(promise);
let a = handleResponseFromAPI(promise);
console.log(a);
console.log(promise);
