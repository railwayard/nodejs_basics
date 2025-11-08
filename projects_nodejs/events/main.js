var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");

// Here fs.readFile() is a async function that read a file. 
// If an error occurs during the read operation, then the err object will contain the corresponding error, else data will contain the contents of the file. 
// readFile passes err and data to the callback function after the read operation is complete, which finally prints the content.