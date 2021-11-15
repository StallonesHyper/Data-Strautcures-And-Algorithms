const anotherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(newArray, x) {
  let initPoint = 0;
  let endPoint = newArray.length - 1;
  let midPoint = 0;

  while (initPoint <= endPoint) {
    midPoint = Math.floor((initPoint + endPoint) / 2);

    if (newArray[midPoint] === x) {
      return midPoint;
    } else if (x > newArray[midPoint]) {
      initPoint = midPoint + 1;
    } else {
      endPoint = midPoint - 1;
    }
  }

  return -1;
}

const wasItFound = binarySearch(anotherArray, 8);
console.log(wasItFound);

//NOTE: Complexity Analysis:
//Code Runs In O(log n) Complexity
