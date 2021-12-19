function sumDigits(num) {
    let digitsArr = num
        .toString()
        .split("")
        .map(stringNum => stringNum === "-"
            ? "-"
            : Number(stringNum))

    if (digitsArr[0] === "-") {
        digitsArr = digitsArr.slice(1)
        digitsArr[0] = -digitsArr[0]
    }

    return digitsArr.reduce((total, currNum) => total + currNum)
}