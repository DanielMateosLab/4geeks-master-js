const findMaxLengthOfThreeWords = (...words) => {
    const threeWords = words.slice(0, 3)

    const longestWord = threeWords.reduce((previousWord, currentWord) => 
        previousWord.length > currentWord.length
            ? previousWord
            : currentWord)

    return longestWord.length
}
