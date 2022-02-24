const discountByClientStatus = require('../discountByClientStatus');
const constants = require('../constants')

test('non-profit-org discount', () => {
    expect(discountByClientStatus(100, constants.nonProfitOrgStatus)).toBe(90);
});

test('austin-school-film discount', () => {
    expect(discountByClientStatus(100, constants.austinFilmSchoolStatus)).toBe(90);
});

test('teacher discount', () => {
    expect(discountByClientStatus(100, constants.teacherStatus)).toBe(90);
});

test('student-film', () => {
    expect(discountByClientStatus(100, constants.studentFilmStatus)).toBe(85);
})