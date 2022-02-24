const discountRates = require('./discountRates');

function discountByClientStatus(total, status) {
    return total * discountRates[status]
}

module.exports = discountByClientStatus;

    // how we started:

    // if (
    //     status === constants.nonProfitOrgStatus ||
    //     status === constants.austinFilmSchoolStatus ||
    //     status === constants.teacherStatus
    //     ) {
    //     tenOffDiscount = total * .90;
    //     return tenOffDiscount;
    // }
    // else if (status === constants.studentFilmStatus) {
    //     fifteenOffDiscount = total * .85;
    //     return fifteenOffDiscount;
    // }
    // else {
    //     return;
    // }
