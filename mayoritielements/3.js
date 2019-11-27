/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const numbers = {};
    const payload = [];
    for (let i = 0; i < nums.length; i++) {
        if (!numbers[nums[i]]) {
            numbers[nums[i]] = 1
        } else {
            numbers[nums[i]] += 1;
        }
    }
    Object.keys(numbers).map((key) => {
        if (numbers[key] > (nums.length / 3)) {
            payload.push(key)
        }
    })
    return payload;
};