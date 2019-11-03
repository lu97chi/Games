/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const numberLetters = {
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"],
        0: [" "],
    }
    const payload = [];
    // number of letters to power of 3 is the time a letter starts with
    // exept if number is 7 or 9, then is 4
    for (let i = 0; i < digits.length; i+= 1) {
        const actualNumber = digits[i];
        let lastIndex = 0;
        let lastLetterIndex = 0;
        let letterCounter = 0;
        if (actualNumber !== 7 || actualNumber !== 9) {
            for (let j = 0; j < 3 ** digits.length  ; j+=1) {
                payload[lastIndex] = '';
                if (letterCounter < 3 ** (digits.length - 1)) {
                    payload[lastIndex] += numberLetters[actualNumber][lastLetterIndex];
                    letterCounter += 1;
                } else {
                    payload[lastIndex] += numberLetters[actualNumber][lastLetterIndex + 1];
                    letterCounter = 1;
                    lastLetterIndex += 1;
                }
                lastIndex += 1;
            }
            lastLetterIndex = 0;
        }
    }
    return payload;
};

console.log(letterCombinations('222'));