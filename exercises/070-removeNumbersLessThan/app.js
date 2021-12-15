var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value == "number" && value < num) {
            delete obj[key]
        }
    })
}
