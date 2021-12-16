const findMinLengthOfThreeWords = (...words) => {
    const threeWords = words.slice(0, 3)
    
    const shortestWord = threeWords.reduce((previousWord, currentWord) => 
        previousWord.length < currentWord.length
            ? previousWord
            : currentWord)
            
    return shortestWord.length
}
