function removeStringValuesLongerThan(num, obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value == "string" && value.length > num)
            delete obj[key]
    })
}
