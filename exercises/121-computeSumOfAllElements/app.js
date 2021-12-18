function computeSumOfAllElements(arr) {
  return arr.reduce((total, currNum) => total + currNum)
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6