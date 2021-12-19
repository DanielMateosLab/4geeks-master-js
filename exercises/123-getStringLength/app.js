function getStringLength(string) {
    let length = 0
    
    string.split("").forEach(() => length++)

    return length
}
