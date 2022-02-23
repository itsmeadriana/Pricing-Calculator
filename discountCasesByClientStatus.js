let total = 0;
let status = '';

function discountCasesByClientStatus(total, status) {
    if (
        status = 'non-profit-org'
        // status = 'austin-school-film',
        // status = 'teacher'
        ) {
        tenOffDiscount = total * .85;
        return tenOffDiscount;
    }
    else if (status = 'student-film') {
        studentDiscount = total * .85;
        return studentDiscount;
    }
    else {
        return;
    }
}

module.exports = discountCasesByClientStatus;