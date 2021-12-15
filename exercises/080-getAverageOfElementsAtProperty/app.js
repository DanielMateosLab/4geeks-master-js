const getAverageOfElementsAtProperty = (obj, key) => {
    const property = obj[key]
    
    if (Array.isArray(property) && property.length > 0) {
        const total = property.reduce((prevValue, currentValue) => prevValue + currentValue)
        const average = total / property.length

        return average
    }

    return 0
}