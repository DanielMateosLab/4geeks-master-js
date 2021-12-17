getOddLengthWordsAtProperty = (obj, key) => {
    const arr = obj[key]

    return arr.filter(elem => elem.length % 2 !== 0)
}