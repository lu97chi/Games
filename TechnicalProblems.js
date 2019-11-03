function countConcurrencies(stringValue) {
    const hashedTable = {};
    for (let i = 0; i < stringValue.length; i += 1) {
        if (stringValue[i] !== ' ') {
            if (hashedTable[stringValue[i]] !== undefined) {
                hashedTable[stringValue[i]] += 1;
            } else {
                hashedTable[stringValue[i]] = 1;
            }
        }
    }
    return hashedTable;
}


function findSum(arr, sumValue) {
    const hashedTable = {};
    arr.forEach((num, i) => hashedTable[num] = i);
    for (let i = 0; i <= arr.length; i++) {
        const complement = sumValue - arr[i];
        if (hashedTable[complement] && hashedTable[complement] !== i) {
            return [i, hashedTable[complement]];
        }
    }
    return false;
}

console.log(countConcurrencies('HhEello world'));
console.log(findSum([3,15,18,8,-1], 17));