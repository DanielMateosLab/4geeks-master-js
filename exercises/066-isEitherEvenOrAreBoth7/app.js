function isEitherEvenOrAreBoth7(num1, num2) {
    const isEitherEven = num1 % 2 == 0 || num2 % 2 == 0
    const areBoth7 = num1 === 7 && num2 === 7
    return isEitherEven || areBoth7
}

