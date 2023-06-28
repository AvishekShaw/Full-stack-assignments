/* File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require("fs")
const path = require("path")

filePath = path.join(__dirname,"dummyFile.txt")

let write = false;
let read = true;

if (write) {
    fs.writeFile(filePath,"Hello this is line with    spaces", (err) => {
        if (err) throw err;
        console.log("file saved")
    })
}

if (read){
    fs.readFile(filePath,"utf-8",(err,data) => {
        if (err) throw err;
        console.log(data.split(" ").filter(data => data !== "").join(" "))
    })
}

