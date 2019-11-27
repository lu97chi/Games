/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// encuentra el numero, avaza el indice hasta tener todos los indices
// si no lo encuentras regresa -1, -1
var searchRange = function(nums, target) {
    const payload = [];
    
    for (let i = 0; i < nums.length; i+=1) {
        if (nums[i] === target) {
            payload.push(i)
        }
    }
    if (payload.length === 0) {
        return [-1, -1];
    } if (payload.length === 1) {
        return [payload[0], payload[0]]
    } else {
        return [payload[0], payload[payload.length-1]]
    }
};