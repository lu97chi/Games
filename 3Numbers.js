var threeSum = function(nums) {
    const result = [];
    const payload = [];
    const combinations = {}
    for (let i = 0; i < nums.length; i++) {
        const pivot = nums[i];
        for (let j = 1; j < nums.length; j++) {
          let auxRest = pivot + nums[j];
            if (auxRest !== 0 || nums[j] === 0) {
                for (let h = 2; h < nums.length; h++) {
                    if (auxRest + nums[h] === 0 && i !== j && i !== h && j !== h){
                        result.push([pivot, nums[j], nums[h]]);
                    }
                }
            }
        }
    }
    result.forEach((resultArray, index) => {
        const auxSorted = [];
        Object.assign(auxSorted, resultArray);
        const sorted = auxSorted.sort((a,b) => a - b);
        if (!combinations[sorted]) {
            payload.push(resultArray);
        }
        combinations[sorted] = true;
    });
    return payload;
};

threeSum([0,0,0])

// [[-1,0,1],[-1,2,-1],[-1,-1,2],[0,1,-1],[0,-1,1],[1,0,-1],[-1,0,1]]