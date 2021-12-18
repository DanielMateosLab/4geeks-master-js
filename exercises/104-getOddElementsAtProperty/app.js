function getOddElementsAtProperty(obj, key) {
  const arr = obj[key]

  if (!Array.isArray(arr)) return []

  return arr.filter(elem => elem % 2 !== 0)
}
