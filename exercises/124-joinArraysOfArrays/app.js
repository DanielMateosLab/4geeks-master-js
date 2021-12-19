function joinArrayOfArrays(arr) {
  return arr.reduce((prevArr, currArr) => [...prevArr, ...currArr])
}
