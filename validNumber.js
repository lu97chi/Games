/**
 * @param {string} s
 * @return {boolean}
 */

// '' -> false
// .5 -> true
// 0.5 -> true
// any length of zeros at begining -> true
// any starting white spaces removed
// only letter e is acepted, and single dot
// + and - is acepted
// remove 0 from begining of string not needed
var isNumber = function(s) {
    const decimalHash = {
        '0': true,
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true,
        '8': true,
        '9': true
    }
    const specialHash = {
        '.' : true,
        '+' : true,
        'e' : true,
        '-' : true,
    }
    s = s.trimLeft();
    if (s === '') return false;
    for (let i = 0; i < s.length; i++) {
        if(decimalHash[s[i]] === undefined) {
            return false;
        }
        if(specialHash[s[i]] === undefined) {
            return false;
        }
    }
    return true;
};

isNumber('87878')