const getElementsThatEqual10AtProperty = (obj, key) => {
    return obj[key].filter(value => value === 10)
}