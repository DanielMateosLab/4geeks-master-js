function getLargestElementAtProperty(obj, key) {
  const arr = obj[key]

  if (!Array.isArray(arr) || !arr.length) return []
  
  return arr.reduce(
    (prevNum, currNum) => prevNum < currNum ? currNum : prevNum
  )
}