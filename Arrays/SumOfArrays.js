var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfArray(n) {
  var sum = 0;
  for (var i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
}

console.log(sumOfArray(newArray));
