function fromListToObject(array) {
  return array
    .map(el => ({ [el[0]]: el[1] }))
    .reduce((result, currObj) => ({...result, ...currObj}))
}
