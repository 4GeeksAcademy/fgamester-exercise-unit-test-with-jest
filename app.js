// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = function(usd) {
    return (usd / oneEuroIs.USD) * oneEuroIs.JPY
}

const fromEuroToDollar = function(euro) {
    return euro * oneEuroIs.USD
}

const fromYenToPound = function(yen) {
    return (yen / oneEuroIs.JPY) * oneEuroIs.GBP
}

console.log(fromDollarToYen(1.07))

//exportando las funciones
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
