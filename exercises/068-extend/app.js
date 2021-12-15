var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    Object.keys(obj2).forEach(key => {
        if (obj1[key] === undefined) {
            obj1[key] = obj2[key]
        } 
    })
}