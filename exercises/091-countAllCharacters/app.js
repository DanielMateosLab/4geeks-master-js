var countAllCharacters = function (str) {
    var result = {};
    str.split("").forEach(function (character) {
        result[character] = result[character] == undefined
            ? 1
            : result[character] + 1;
    });
    return result;
};
