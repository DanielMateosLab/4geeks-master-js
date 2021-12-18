

function getElementOfArrayProperty(obj, key, index) {
    const arr = obj[key]

    return Array.isArray(arr) ? arr[index] : undefined
}
