const getElementsLessThan100AtProperty = (obj, key) => {
    return obj[key].filter(value => value < 100)
}