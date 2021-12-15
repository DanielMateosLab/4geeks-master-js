var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value == "number")
            delete obj[key]
    })
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }