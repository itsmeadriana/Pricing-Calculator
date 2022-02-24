// This appears to be the best practice for something  like this: https://stackoverflow.com/a/21247500

// Global objects for scalability; "single source of truth"(-y-ness);

module.exports = Object.freeze({
    nonProfitOrgStatus: 'non-profit-org',
    austinFilmSchoolStatus: 'austin-school-film',
    teacherStatus: 'teacher',
    studentFilmStatus: 'student-film'
});
