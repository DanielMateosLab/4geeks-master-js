function flipEveryNChars(input, n) {
    let result = ""
    const inputAsArray = input.split("")
    
    for (let i = 0; i < inputAsArray.length; i += n) {
        const substringOfNLengthReversed = inputAsArray
            .slice(i, i + n)
            .reverse()
            .join("")

        result = result.concat(substringOfNLengthReversed)
    }

    return result
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma