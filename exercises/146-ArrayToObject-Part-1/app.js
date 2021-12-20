function transformFirstAndLast(array) {
  return { [array.shift()]: array.pop() }
}