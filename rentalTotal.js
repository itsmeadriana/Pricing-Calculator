// import calculator from "./calculator";
// import quantityCalculator from "./quantityCalculator";

function rentalTotal (quantity, totalPerDay, daysRented) {
    let total = quantity * totalPerDay * daysRented;
    return total;
};

module.exports = rentalTotal;