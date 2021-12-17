const contAllCharacters = function(str: string): {[key: string]: number} {
    const result = {}
    str.split("").forEach(character => {
        result[character] = result[character] == undefined
            ? 1
            : result[character] + 1
    })

    return result
}