function getSquaredElementsAtProperty(obj, key) {
  const arr = obj[key]

  if (!Array.isArray(arr)) return []

  return arr.map(num => num ** 2)
}
