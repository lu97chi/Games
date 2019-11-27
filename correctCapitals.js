/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word === '' ) return true;
    if (word.replace(/ /g,'') === '') return false;
    let capitals = 0;
    for (let i = 0; i < word.length; i += 1) {
        if (word[i] === word[i].toUpperCase()) {
            capitals += 1;
        }
    }
    if (word[0] === word[0].toUpperCase()) {
       if (capitals === word.length) return true;
        else if(capitals === 1) return true;
        return false;
    }
    if (capitals === word.length) return true;
    if (capitals === 0) return true;
    return false;
};