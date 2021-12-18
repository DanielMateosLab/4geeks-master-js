function getLengthOfShortestElement(arr) {
    if (!arr.length) return 0
    
    const shortestWord = arr.reduce((prevWord, currWord) => prevWord.length > currWord.length ? currWord : prevWord)

    return shortestWord.length
}