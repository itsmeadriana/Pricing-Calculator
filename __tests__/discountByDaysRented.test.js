const discountByDaysRented = require('../discountByDaysRented');

test('applies no discount', () => {
    expect(discountByDaysRented(1, 100)).toBe(100);
});

test('applies discount of 1.75 x daily rate', () => {
    expect(discountByDaysRented(2, 100)).toBe(175);
});

test('applies discount of 2 x daily rate', () => {
    expect(discountByDaysRented(3, 100)).toBe(200);
});

test('applies discount of 2 x daily rate', () => {
    expect(discountByDaysRented(4, 100)).toBe(200);
});

test('applies discount of 2.5 x daily rate', () => {
    expect(discountByDaysRented(5, 100)).toBe(250);
});

test('applies discount of 2.5 x daily rate', () => {
    expect(discountByDaysRented(6, 100)).toBe(250);
});

test('applies discount of 3 x daily rate', () => {
    expect(discountByDaysRented(7, 100)).toBe(300);
});

test('applies discount of 3 x daily rate', () => {
    expect(discountByDaysRented(18, 100)).toBe(300);
});

test('applies discount of 8.75 x daily rate', () => {
    expect(discountByDaysRented(30, 100)).toBe(875);
});