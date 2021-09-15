function getMax(x) {
  var result = x[0];
  for (var i = 0; i < x.length; i++) {
    if (result < x[i]) {
      result = x[i];
    }
  }
  return result;
}

function getMin(x) {
  var result = x[0];
  for (var i = 0; i < x.length; i++) {
    if (result > x[i]) {
      result = x[i];
    }
  }
  return result;
}

var newArray = [1, 25, 3, 6, 7, 22, 10];

console.log(getMax(newArray));
console.log(getMin(newArray));
