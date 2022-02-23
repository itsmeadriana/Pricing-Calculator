const discountCasesByClientStatus = require('../discountCasesByClientStatus');

test('non-profit-org discount', () => {
    expect(discountCasesByClientStatus(100, 'non-profit-org')).toBe(85);
});

// test('austin-school-film discount', () => {
//     expect(discountCasesByClientStatus(100, 'austin-school-film')).toBe(90);
// });

// test('teacher discount', () => {
//     expect(discountCasesByClientStatus(100, 'teacher')).toBe(90);
// });

test('student-film', () => {
    expect(discountCasesByClientStatus(100, 'student-film')).toBe(85);
})