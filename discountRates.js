
// created JSON object to contain discount rates by group using constants from a constants.js.
//
const discountRates = JSON.parse(`{
    "austin-school-film": 0.90,
    "non-profit-org": 0.90,
    "teacher": 0.90,
    "${constants.studentFilmStatus}": 0.85
}`);


module.exports = discountRates;