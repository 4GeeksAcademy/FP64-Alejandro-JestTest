const sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(7,3))



// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 153.14;
    // Retornamos el valor en dólares
    return valueInYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen * 0.0052;
    // Retornamos el valor en dólares
    return valueInPound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }