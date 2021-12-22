function search(array, value) {
  let startIndex = 0
  let finishIndex = array.length - 1

  while (finishIndex - startIndex >= 0) {
    const midpointIndex = Math.floor((finishIndex + startIndex) / 2)
    const midpointValue = array[midpointIndex]
    console.log(midpointValue, midpointIndex, startIndex, finishIndex)

    if (midpointValue === value) {
      return midpointIndex
    }

    if (midpointValue > value) {
      finishIndex = midpointIndex
    } else {
      startIndex = midpointIndex + 1
    }
  }
  
  return null
}

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 34)); // => 4