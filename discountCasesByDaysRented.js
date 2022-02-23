
var discount = 0;

function discountCasesByDaysRented(daysRented, perDiem) {
    console.log('print');
    if (daysRented === 2) {
        let total = perDiem + perDiem * 0.75;
        return total;
    }
    else if (daysRented === 3 || daysRented === 4) {
        let total = perDiem * 2;
        return total;
    }
    else if (daysRented === 5 || daysRented === 6) {
        let total = perDiem * 2.5;
        return total;
    }
    else if (daysRented >= 7 && daysRented < 30) {
        let total = perDiem * 3;
        return total;
    }
    else if (daysRented >=30) {
        let total = perDiem * 8.75;
        return total;
    }
    else {
        total = perDiem * daysRented;
        return total;
    }


    // switch(discount) {
    //     case 1:
    //      if (daysRented === 2) {
    //          discount = 0.75;
    //          let subtotal = perDiem + perDiem * discount;
    //          return subtotal;
    //      }
    //      break;
    // //     case 2:
    // //      if (daysRented = 3 || 4) {
    // //          let firstSubtotal = perDiem * daysRented;
    // //          let perDiemDiscount = perDiem * 2;
    // //          return perDiemDiscount * firstSubtotal;
    // //      }
    // //      break;
    // //     case 3:
    // //      if (daysRented = 5 || 6) {
    // //         let perDiemDiscount = 2.5;
    // //         return (perDiemDiscount * daysRented);
    // //      }
    // //      break;
    //     default:
    //         if (daysRented === 1) {
    //             return daysRented * perDiem;
    //         }
    // }
};

module.exports = discountCasesByDaysRented;