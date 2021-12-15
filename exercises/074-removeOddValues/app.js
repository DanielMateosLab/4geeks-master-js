function removeOddValues(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value == "number" && value % 2 !== 0)
            delete obj[key]
    })}