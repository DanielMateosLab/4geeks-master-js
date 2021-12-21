function detectOutlierValue(string) {
    const numberList = string.split(" ").map(el => +el)

    const evenNumbers = []
    const oddNumbers = []

    numberList.forEach(num => {
        num % 2 === 0 ? evenNumbers.push(num) : oddNumbers.push(num)
    })

    const outlierIndex = evenNumbers.length === 1
        ? numberList.indexOf(evenNumbers[0])
        : numberList.indexOf(oddNumbers[0])
    
    return outlierIndex + 1
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2