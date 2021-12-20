function findSmallestNumberAmongMixedElements(arr) {
  const numbersArray = arr.filter(el => typeof el === "number")
  const smallestNumberReducer = (result, currNum) => currNum < result ? currNum : result
  
  return numbersArray.length
      ? numbersArray.reduce(smallestNumberReducer)
      : 0
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4