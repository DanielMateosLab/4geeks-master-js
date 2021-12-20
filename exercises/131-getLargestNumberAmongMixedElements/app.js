function getLargestNumberAmongMixedElements(arr) {
    const numbersArray = arr.filter(el => typeof el === "number")
    const largestNumberReducer = (result, currNum) => currNum > result ? currNum : result

    return numbersArray.length
        ? numbersArray.reduce(largestNumberReducer)
        : 0
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5