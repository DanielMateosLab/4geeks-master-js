function isIsogram(text) {
  const textSet = new Set(text)

  return textSet.size === text.length
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false