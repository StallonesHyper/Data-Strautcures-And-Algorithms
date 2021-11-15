console.log("Recursion");
//NOTE: Invoking The Function Over ANd Over Again
//TODO:
//1.The Condition When The Recursion Ends
//2.Different Data Input

// function countDown(num) {
//   if (num <= 0) {
//     console.log("Out Of Numbers");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }

// countDown(5);

//NOTE: Another Recursion Function

function sumRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
