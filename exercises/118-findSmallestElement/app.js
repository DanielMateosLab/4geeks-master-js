function findSmallestElement(arr) {
    return arr.length ?
        arr.reduce((prevNum, currNum) => currNum < prevNum ? currNum : prevNum) :
        0
}
