/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

// a -> b
// a and b < 100 chars
// if diff sizes false
// check if includes all letters
// if so then
// create a function that reverses the string
// loop until the length of the funcion, like that all the letters have been
// in all the places if could be, if found be return true
// if not return false
var rotateString = function(A, B) {
    const AL = A.length;
    const BL = B.length
    const BMap = {};
    for (let i = 0; i < BL; i++) {
        BMap[B[i]] = true
    }
    if (!AL && !BL) return true;
    if (AL > 100 || BL > 100) return false;
    if (AL !== BL) return false;
    for (let i = 0; i < AL; i++) {
        if (!BMap[A[i]]) return false;
    }
    const aval = reverseString();
    const mapAval = aval(A);
    if (mapAval[B]) return true;
    return false;
};

function reverseString() {
    const reversedAval = {};
    let auxTimes = 0;
    return function actualReverse(text) {
        let currentText = '';
        if (auxTimes === text.length) {
            return reversedAval;
        }
        const remaning = text.substring(1, text.length);
        currentText += `${remaning}${text[0]}`
        reversedAval[currentText] = true;
        auxTimes++
        return actualReverse(currentText);
    }    
} 
