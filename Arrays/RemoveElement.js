function removeElement(x, e) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] == e) {
      x.splice(i, 1);
    }
  }
  return x;
}

var newArray = [1, 2, 2, 2, 3, 4, 5, 6, 7, 2, 8, 9, 0];

console.log(removeElement(newArray, 2));

console.log(newArray);
