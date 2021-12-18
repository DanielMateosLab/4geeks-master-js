var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  const arr = obj[key]

  if (!Array.isArray(arr) || !arr.length) return []
  
  return arr.slice(0, -1)
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]