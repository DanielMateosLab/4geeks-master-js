function getSumOfAllElementsAtProperty(obj, key) {
    const arr = obj[key]

    if (!Array.isArray(arr) || !arr.length) return 0
    
    return arr.reduce((total, currNum) => total + currNum)
}