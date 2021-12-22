function findPairForSum(array, number) {
    for (let iOfNum1 = 0; iOfNum1 < array.length; iOfNum1++) {
        const arrayWithoutCurrentNumber = [...array]
        const num1 = arrayWithoutCurrentNumber.splice(iOfNum1, 1)[0]
        
        for (let iOfNum2 = 0; iOfNum2 < arrayWithoutCurrentNumber.length; iOfNum2++) {
            const num2 = arrayWithoutCurrentNumber[iOfNum2]
            if (num1 + num2 === number) {
                return [num1, num2]
            }
        }
    }
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

var pair2 = findPairForSum([1, 2, 3, 4, 5], 7)
console.log(pair2)