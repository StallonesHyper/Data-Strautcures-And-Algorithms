var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var x = 10;

function linearSearch(newArray, x) {
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] === x) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(myArray, x));
