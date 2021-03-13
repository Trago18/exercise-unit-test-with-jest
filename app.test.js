const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One dollar should be 153.48 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yens = fromDollarToYen(3.5)

    // 1 dolar son 153.48 yens, entonces 3.5 dolares deberian ser = (3.5 * 1.2 * 127.9)
    const expected = 3.5 * 1.2 * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yens);
})

test("One yen should be 122.784 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const pounds = fromYenToPound(3.5)

    // 1 yen son 122.784 pounds, entonces 3.5 pounds deberian ser = (3.5 * 1.2 * 127.9 * 0.8)
    const expected = 3.5 * 1.2 * 127.9 * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pounds);
})