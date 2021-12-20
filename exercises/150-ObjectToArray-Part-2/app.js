function listAllValues(obj) {
  const values = []

  for (const key in obj) {
    values.push(obj[key])
  }

  return values
}