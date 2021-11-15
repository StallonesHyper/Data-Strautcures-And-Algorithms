function factorial(num) {
  var newNumber = 1;
  for (var i = num; i > 0; i--) {
    newNumber *= i;
  }

  return newNumber;
}

console.log(factorial(5));
