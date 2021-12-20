function transformEmployeeData(array) {
  return array.map(employee => 
    employee
      .map(el => ({ [el[0]]: el[1] }))
      .reduce((result, currObj) => ({...result, ...currObj})))
}