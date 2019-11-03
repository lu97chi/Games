/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const positiveLimit = (Math.pow(2, 31) - 1);
    const negativeLimit = Math.pow(-2, 31) ;
    let payload = [];
    let avaliableDeletions = 1;
    const hashedTable = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
        
    }
    
    str = str.trimLeft();
    if (str[0] === '+') {
        str = str.substr(1);
        avaliableDeletions = 0;
    }
    if (!avaliableDeletions && hashedTable[[str[0]]] === undefined) return 0;
    if (hashedTable[str[0]] !== undefined || str[0] === '-'){
        for (let i = 0; i < str.length; i+=1) {
            const b = str[i];
        if(str[i] === '-' && i < 1) continue;
        if (hashedTable[str[i]] !== undefined) {
            const j = 12;
            if(str[i - 1] === '-') {
                payload.push(`-${hashedTable[str[i]]}`);
            }
            else {
                payload.push(hashedTable[str[i]]);
            }
        } else {
            break;
        }
    }
        const result = parseInt(payload.join(''));
        if (result < positiveLimit && result > negativeLimit) {
            return result;
        } else if (result > positiveLimit) {
            return positiveLimit;
        } else if (result < negativeLimit) {
            return negativeLimit;
        }
        return 0;
    }
    return 0;
};


console.log(myAtoi('      2 3    '))