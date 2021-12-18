function computeProductOfAllElements(arr) {
    if (!arr.length) return 0

    return arr.reduce(
        (prevVal, currVal) => prevVal * currVal
    )
}
