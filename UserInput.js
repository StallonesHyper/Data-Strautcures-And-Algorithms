var readLine = require("readline-sync");

var myName = readLine.question("What's Your Name ?:");
console.log("Hello", myName);

var newArray = [];
newArray.length = 10; //Setting Array Size

for (var i = 0; i < newArray.length; i++) {
  newArray[i] = readLine.question(`Element ${i}:`);
}

console.log(newArray);
