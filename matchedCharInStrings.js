/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    if (words.length < 1) return 0;
    if (chars.length > 100) return 0;
    if (words.length > 1000) return 0;
    const mapedHashChars = {};
    for (let i = 0; i < chars.length; i+=1) {
        if (mapedHashChars[chars[i]]) {
            mapedHashChars[chars[i]] += 1;
        } else {
            mapedHashChars[chars[i]] = 1;
        }
    }
    const auxCopyWithValues = {};
    Object.assign(auxCopyWithValues, mapedHashChars);
    let payload = 0;
    for (let i = 0; i < words.length; i+=1) {
    if (words[i].length > 100) return 0;
    let auxCounter = 0;
     for (let j = 0; j < words[i].length; j += 1) {
         if (mapedHashChars[words[i][j]]) {
             auxCounter += 1;
             mapedHashChars[words[i][j]] -= 1;
         }
        }
        if(auxCounter === words[i].length) {
            payload += auxCounter;
        }
        auxCounter = 0;
        Object.assign(mapedHashChars, auxCopyWithValues);
    }
    return payload;
};

console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"))