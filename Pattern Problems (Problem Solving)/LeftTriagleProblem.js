var n = 5;
var result = "";

for (var i = 1; i <= n; i++) {
  for (var j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
