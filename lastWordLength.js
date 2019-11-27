/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastLength = 0;
    if (s === "") return 0;
    if (s.replace(/ /g,'') === '') return 0;
    for (let i = s.length - 1 ; i >= 0; i--) {
        if (s[i] !== ' ') {
            lastLength += 1;
            if (s[i - 1] === ' ') return lastLength;
        };
    }
    return lastLength;
};