function modulo(num1, num2) {
    const divisionResult = Math.abs(num1 / num2)
    const decimalPart = divisionResult - Math.floor(divisionResult)
    const reminder = decimalPart * num2

    return num1 < 0 ? -reminder : reminder
}
