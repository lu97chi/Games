/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const table = {};
    let biggest = 0;
    let payload = 0;
    nums.forEach((num) => table[num] = 0);
    for (let i = 0; i < nums.length; i+=1) {
        if (table[nums[i]]) {
            table[nums[i]] += 1;
        } else {
            table[nums[i]] = 1;
        }
    }
    
    Object.keys(table).map((key) => {
        if (table[key] > biggest) {
            payload = key;
            biggest = table[key]
        }
    })
    return payload;
};