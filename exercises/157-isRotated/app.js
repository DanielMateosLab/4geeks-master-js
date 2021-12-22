function isRotated(str1, str2) {
    let rotatedTest = str1
    
    for (let i = 0; i < str1.length; i++) {
        rotatedTest = rotateString(rotatedTest)

        if (rotatedTest === str2) {
            return true
        }
    }

    return false
}

function rotateString(str) {
    return str.slice(-1) + str.slice(0, -1)
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false