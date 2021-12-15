function removeStringValues(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value == "string")
            delete obj[key]
    })
}
