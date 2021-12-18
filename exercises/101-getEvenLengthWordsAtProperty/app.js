
function getEvenLengthWordsAtProperty(obj, key) {
  const arr = obj[key]

  if (!Array.isArray(arr)) return []

  return arr.filter(elem => elem.length % 2 == 0)
}
