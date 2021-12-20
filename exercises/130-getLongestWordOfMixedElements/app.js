function getLongestWordOfMixedElements(arr) {
    const wordsArray = arr.filter(el => typeof el === "string")
    const longestestWordReducer = (result, currWord) => currWord.length > result.length ? currWord : result
    
    return wordsArray.length
        ? wordsArray.reduce(longestestWordReducer)
        : ""
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'