function getLongestOfThreeWords(...words) {
    return words.reduce((result, currWord) => currWord.length > result.length ? currWord : result)
}
