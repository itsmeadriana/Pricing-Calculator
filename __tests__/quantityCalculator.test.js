const quantityCalculator = require('../quantityCalculator');

test('multiplies productPrice by productQuantity', () => {
    expect(quantityCalculator(150, 2)).toBe(300);
});