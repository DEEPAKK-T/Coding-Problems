/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let premin = nums[0];
    let premax = nums[0];

    for(let i = 1; i < nums.length; i ++){
        var currMax = Math.max(nums[i] * premax, nums[i], premin * nums[i]);
        var currMin = Math.min(nums[i] * premin, nums[i], nums[i] * premax);

        premax = currMax;
        premin = currMin;

        max = Math.max(currMax, max);
    }
    return max;
    
};

console.log(maxProduct([2,3,-2,4]))