/* Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.
*/

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "1-counter.md")

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

function sum(n){
    let sum = 0
    for (let i = 0; i <= n; i++){
        sum += i
    }
    return sum
}

console.log(sum(1000000)) // with a very big sum, the file read async operation will not log to the console before the sum finishes. 

