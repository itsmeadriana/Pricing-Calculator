const calculator = require('../calculator');

test('multiplies dailyRentalPrice by rentalDays', () => {
    expect(calculator(3, 200)).toBe(600);
});