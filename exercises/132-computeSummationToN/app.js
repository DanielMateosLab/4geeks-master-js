function computeSummationToN(n) {
    let sequientialNumbers = []

    for (let i = n; i > 0; i--) {
        sequientialNumbers.push(i)
    }

    return sequientialNumbers.reduce((total, currNum) => total + currNum)
}

var output = computeSummationToN(6);
console.log(output); // --> 21