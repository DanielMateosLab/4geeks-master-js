function flipPairs(input){
    return input
        .split("")
        .reduce(reducer, [])
        .join("")
}

function reducer (result, currElement, i) {
    if (i % 2 !== 0) {
        result.splice(i - 1, 0, currElement)
    } else {
        result.push(currElement)
    }
    return result
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
