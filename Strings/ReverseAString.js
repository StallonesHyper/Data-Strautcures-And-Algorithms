function reverseAString(x) {
  var newString = "";
  for (var i = x.length - 1; i >= 0; i--) {
    newString += x[i];
  }
  return newString;
}

var name = "STALLONE";

console.log(reverseAString(name));
