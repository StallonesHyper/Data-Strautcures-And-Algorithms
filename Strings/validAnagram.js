function validAnagram(x, z) {
  var newCounter = {};

  for (var i = 0; i < x.length; i++) {
    var letter = x[i];
    newCounter[letter] ? (newCounter[letter] += 1) : (newCounter[letter] = 2);
  }
  for (var j = 0; j < z.length; j++) {
    var letter = z[j];
    if (!newCounter[letter]) {
      return false;
    } else {
      newCounter[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("days", "ywds"));
console.log(validAnagram("days", "yads"));
