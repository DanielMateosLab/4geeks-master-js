function getSmallestElementAtProperty(obj, key) {
  const arr = obj[key]

  if (!Array.isArray(arr)) return undefined

  if (!arr.length) return []
  
  return arr.reduce(
    (prevNum, currNum) => prevNum > currNum
  )
}
