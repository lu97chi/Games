/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mapValues = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let payload = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === 'I') {
            if (s[i + 1] === 'V') {
                payload += 4;
                i += 1;
            } else if (s[i + 1] === 'X') {
                payload += 9;
                i += 1;
            } else {
                payload += mapValues[s[i]];
            }
        } else if (s[i] === 'X') {
            if (s[i + 1] === 'L') {
                payload += 40;
                i += 1;
            } else if (s[i + 1] === 'C') {
                payload += 90;
                i += 1;
            } else {
                payload += mapValues[s[i]];
            }
        } else if (s[i] === 'C') {
            if (s[i + 1] === 'D') {
                payload += 400;
                i += 1;
            } else if (s[i + 1] === 'M') {
                payload += 900;
                i += 1;
            } else {
                payload += mapValues[s[i]];
            }
        } else {
            payload += mapValues[s[i]];
        }
    }
    return payload;
};