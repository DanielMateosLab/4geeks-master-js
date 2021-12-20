function multiply(num1, num2) {
    const sign = [num1, num2].filter(num => num < 0).length % 2 === 0 ? 1 : -1

    let absoluteResult = 0
    
    for (let i = 0; i < Math.abs(num2); i++) {
        absoluteResult += Math.abs(num1);
    }

    return absoluteResult * sign
}

var output = multiply(5, -5);
console.log(output); // --> 28