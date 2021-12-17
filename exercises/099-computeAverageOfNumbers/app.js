const computeAverageOfNumbers = arr => {
    const total = arr.reduce((previousValue, currentValue) => previousValue + currentValue)
    const average = total / arr.length

    return average
}