const getIndexOf = (char, str) => {
    const strAsArray = str.split("")
    let index = -1

    strAsArray.some((stringChar, i) => {
        if (stringChar === char) {
            index = i
            return true
        }
    })

    return index
}
char = 'l';
    str = 'i really like soup'
console.log(getIndexOf(char, str))