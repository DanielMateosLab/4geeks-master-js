function average(...numbers) {
  return sum(...numbers) / numbers.length
}

function sum(...numbers) {
  return numbers.reduce((total, currNum) => total + currNum)
}