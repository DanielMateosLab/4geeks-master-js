const select = (arr, obj) => {
    const result = {}

    Object.entries(obj).forEach(([key, value]) => {
        if (arr.includes(key)) {
            result[key] = value
        }
    })

    return result
}
