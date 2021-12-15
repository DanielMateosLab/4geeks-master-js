function removeArrayValues(obj) {
    
    Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value))
            delete obj[key]
    })
}