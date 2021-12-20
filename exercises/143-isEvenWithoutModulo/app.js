function isEvenWithoutModulo(num) {
    const divisionResult = Math.abs(num / 2)
    const decimalPart = divisionResult - Math.floor(divisionResult)
    const reminder = decimalPart * 2

    return reminder === 0
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true