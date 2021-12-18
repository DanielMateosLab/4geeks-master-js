function findShortestElement(arr) {
    return arr.length
        ? arr.reduce((prevWord, currWord) => currWord.length < prevWord.length ? currWord : prevWord)
        : ""
}