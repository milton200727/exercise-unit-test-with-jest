let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (amount) => {
    return amount * (oneEuroIs.JPY / oneEuroIs.USD)
}

const fromEuroToDollar = (amount) => {
    return amount * oneEuroIs.USD
}

const fromYenToPound = (amount) => {
    return amount * (oneEuroIs.GBP / oneEuroIs.JPY)
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
