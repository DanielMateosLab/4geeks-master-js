const isEven = (num) => num % 2 == 0

function isEitherEvenAndLessThan9(num1, num2) {
    
    return (isEven(num1) || isEven(num2)) && num1 < 9 && num2 < 9
}
