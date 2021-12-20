function findShortestOfThreeWords(...words) {
    return words.reduce((result, currWord) => currWord.length < result.length ? currWord : result)
}