function getAverageOfElementsAtProperty(obj, key) {
  const arr = obj[key]

  if (!Array.isArray(arr) || arr.length < 1) return 0

  const total = arr.reduce((previousValue, currentValue) => previousValue + currentValue)
  const average = total / arr.length

  return average
}


