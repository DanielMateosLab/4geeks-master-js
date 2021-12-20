function findShortestWordAmongMixedElements(arr) {
    const wordsArray = arr.filter(el => typeof el === "string")
    const shortestWordReducer = (result, currWord) => currWord.length < result.length ? currWord : result
    
    return wordsArray.length
        ? wordsArray.reduce(shortestWordReducer)
        : ""
}