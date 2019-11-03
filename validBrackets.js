/**
 * @param {string} s
 * @return {boolean}
 */
// si abro uno, no puedo cerrarlo con otro tipo
// si empieza con uno cerrado, el que sea es falso
var isValid = function(s) {
    if (s === '') return true;
    if (s[0] === ']' || s[0] === ')' || s[0] === '}') return false;
    const auxStack = [];
    const hashValues = {
         '}' : '{' ,
         ']' : '[',
         ')' : '(' ,
    };
    for (let i = 0; i< s.length; i+= 1) {
        if (hashValues[s[i]] !== undefined) {
            const a = hashValues[s[i]];
            const b = a;
            if (hashValues[s[i]] === auxStack[auxStack.length - 1]) {
                auxStack.pop();
            }
            else {
                return false;
            }
        }
        else {
            auxStack.push(s[i])
        }
    }
    if (auxStack.length === 0) return true;
    return false;
};

console.log(isValid('([[{}]])'));