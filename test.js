// Importando las funciones del archivo app.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');


// Tests para From Dollar To Yen
describe('Test para fromDollarToYen', () => {
    test('1.07 dollars should be 156.5 Yen', () => {
        expect(fromDollarToYen(1.07)).toBe(156.5)
    });

    test('3.21 dollars should be 469.5 Yen', () => {
        expect(fromDollarToYen(3.21)).toBe(469.5)
    });
})


// Tests para From Euro To Dollar
describe('Test para fromEuroToDollar', () => {
    test('1 Euro should be 1.07 dollars', () => {
        expect(fromEuroToDollar(1)).toBe(1.07)
    });

    test('3.5 Euros should be 3.745 dollars', () => {
        expect(fromEuroToDollar(3.5)).toBe(3.745)
    });
})

//Tests para From Yen to Pound
describe('Test para fromYenToPound', () => {
    test('156.5 Yens should be 0.87 Punds', () => {
        expect(fromYenToPound(156.5)).toBe(0.87)
    });

    test('297.35 Yens should be 1.653 Punds', () => {
        expect(fromYenToPound(297.35)).toBe(1.653)
    });
})