const discountCasesByDaysRented = require('../discountCasesByDaysRented');

test('applies no discount', () => {
    expect(discountCasesByDaysRented(1, 100)).toBe(100);
});

test('applies discount of 1.75 x daily rate', () => {
    expect(discountCasesByDaysRented(2, 100)).toBe(175);
});

test('applies discount of 2 x daily rate', () => {
    expect(discountCasesByDaysRented(3, 100)).toBe(200);
});

test('applies discount of 2 x daily rate', () => {
    expect(discountCasesByDaysRented(4, 100)).toBe(200);
});

test('applies discount of 2.5 x daily rate', () => {
    expect(discountCasesByDaysRented(5, 100)).toBe(250);
});

test('applies discount of 2.5 x daily rate', () => {
    expect(discountCasesByDaysRented(6, 100)).toBe(250);
});

test('applies discount of 3 x daily rate', () => {
    expect(discountCasesByDaysRented(7, 100)).toBe(300);
});

test('applies discount of 3 x daily rate', () => {
    expect(discountCasesByDaysRented(18, 100)).toBe(300);
});

test('applies discount of 8.75 x daily rate', () => {
    expect(discountCasesByDaysRented(30, 100)).toBe(875);
});