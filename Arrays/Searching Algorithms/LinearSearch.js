var newArray = [1, 9, 4, 2, 7, 6, 8, 0];

function findNumber(x, zArray) {
  var anotherArray = zArray;
  for (let i = 0; i < zArray.length; i++) {
    if (anotherArray[i] === x) {
      return i;
    }
  }
}

console.log(findNumber(9, newArray));
console.log(findNumber(0, newArray));
