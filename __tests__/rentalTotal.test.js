
const rentalTotal = require('../rentalTotal');

test('adds sums of rent per days and quantity of product', () => {
    expect(rentalTotal(3, 20, 4)).toBe(240);
});
