function calculateBillTotal(preTaxAndTipAmount) {
    const salesTax = 0.095
    const tip = 0.15
    const taxAndTipRate = salesTax + tip

    return preTaxAndTipAmount + preTaxAndTipAmount * taxAndTipRate
}