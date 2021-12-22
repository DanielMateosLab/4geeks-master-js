const rewire = require("rewire");

test('Function findPairForSum must exist', () => {
    const findPairForSum = rewire("./app.js").__get__("findPairForSum");
    expect(findPairForSum).not.toBe(undefined);
});

test('the function must find a pair of numbers that add up to the goal number.', () => {
    const findPairForSum = rewire("./app.js").__get__("findPairForSum");

    const combinations = [
        [[3, 34, 4, 12, 5, 2], 9],
        [[1, 2, 3, 4, 5], 7]
    ]

    combinations.forEach(
        ([numberList, expectedSum]) => {
            const result = findPairForSum(numberList, expectedSum)

            expect(numberList).toContain(...result)
            expect(result[0] + result[1]).toEqual(expectedSum)
        }
    )
})


