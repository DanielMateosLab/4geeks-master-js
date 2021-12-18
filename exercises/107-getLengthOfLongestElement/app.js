function getLengthOfLongestElement(arr) {
    if (!Array.isArray(arr) || !arr.length) return 0

    const longestElement = arr.reduce(
        (previousStr, currentStr) => currentStr.length > previousStr.length
            ? currentStr
            : previousStr
    )

    return longestElement.length
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5