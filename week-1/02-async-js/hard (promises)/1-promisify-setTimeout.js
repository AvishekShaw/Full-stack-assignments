/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { resolve } = require("path");

function wait(n) {
    return new Promise(resolve => setTimeout(resolve, n*1000));
}

console.log("Waiting for 5 seconds...");
wait(5).then(() => {
  console.log("5 seconds have passed!");
});
