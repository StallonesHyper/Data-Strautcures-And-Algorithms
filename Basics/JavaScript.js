console.log("JavaScript");

// Variables
var x = 100;
console.log(x);

//DataTypes
//STRING
var myName = "Stallone Fernandes";
console.log(myName);
//NUMBER
var myNumber = 10;
console.log(myNumber);
//BOOLEANS
var myBoolean = true;
console.log(myBoolean);
//DECIMALS
var myDecimal = 10.23;
console.log(myDecimal);

//LOOPS
for (var i = 0; i < 10; i++) {
  console.log(i);
}

do {
  console.log("Hi");
  i++;
} while (i < 15);

while (i < 20) {
  console.log("Hello");
  i++;
}

//Functions
function doSomething() {
  console.log("Function");
}

doSomething();

//Parameters
function doOneThing(x) {
  console.log(x);
}

doOneThing(10);

//For Of And For In
var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (var k of newArray) {
  console.log(k);
}

var newArrayNew = [22, 13, 2, 45, 78, 2, 34, 15];
for (var z in newArrayNew) {
  console.log(z);
}
// For In Gives The Index
