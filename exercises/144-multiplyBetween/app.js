function multiplyBetween(num1, num2) {
    const sequence = []

    for (let i = num1; i < num2; i++) {
        sequence.push(i)
    }

    return sequence.length
        ? sequence.reduce((total, currNum) => total * currNum)
        : 0
}
