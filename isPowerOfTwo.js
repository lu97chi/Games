/**
 * @param {number} n
 * @return {boolean}
 */

// un numero a una potencia es, multiplicar la base la cantidad de veces que dice la
// exponencia, entonces, dividir un numero la veces que sea
// todas las divisiones deben de ser sin decimales
// hasta llegar al 1 so...
var isPowerOfTwo = function(n) {
    if (n < 1) return false;
    if (n === 1) return true;
    while(n >= 2) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            return false;
        }
    }
    return true;
};