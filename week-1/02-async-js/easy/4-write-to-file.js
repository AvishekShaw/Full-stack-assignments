/* Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.*/

const path = require("path")
const fs = require("fs")

filePath = path.join(__dirname,"dummyFile.txt")


fs.writeFile(filePath,"\nhello world af", (err) => {
    if (err) throw err;
    console.log("file saved")
})