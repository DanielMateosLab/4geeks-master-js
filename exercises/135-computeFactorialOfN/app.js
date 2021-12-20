function computeFactorialOfN(n) {
    let sequientialNumbers = []

    for (let i = n; i > 0; i--) {
        sequientialNumbers.push(i)
    }

    return sequientialNumbers.reduce((total, currNum) => total * currNum)
}