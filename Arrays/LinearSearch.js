const findAnElement = (n, x) => {
  for (var i = 0; i < x.length; i++) {
    if (x[i] === n) {
      return i;
    }
  }
};
var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findAnElement(10, newArray));
