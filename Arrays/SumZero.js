function sumZero(x) {
  for (var i = 0; i < x.length; i++) {
    for (var j = i + 1; j < x.length; j++) {
      if (x[i] + x[j] == 0) {
        return [x[i], x[j]];
      } else {
        return undefined;
      }
    }
  }
}

var x = [-3, -2, -1, 0, 1, 2, 3];

console.log(sumZero(x));

function sumZerRefactored() {}
