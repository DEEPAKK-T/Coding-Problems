function maxSubArray(nums){
    let max = nums[0];
    let pre = nums[0];

    for(let i = 1; i < nums.length; i ++){
        pre = Math.max(nums[i], pre + nums[i]);
        max = Math.max(max, pre);
    }
    return max;

}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

/**Here's a breakdown of the code maxSubArray with a step-by-step example:

Purpose:

This function finds the contiguous subarray (a sequence of elements) within a given array that has the largest sum.
Key Steps:

Initialization:

max is set to the first element of nums, assuming it's the largest sum initially.
pre is also set to the first element, representing the sum of the current subarray being considered.
Iterating through the Array:

The loop starts from the second element (i = 1) and continues to the end of nums.
Within each iteration:
Updating the Current Subarray Sum:
pre = Math.max(nums[i], pre + nums[i]): This decision point checks if starting a new subarray at the current element is better (nums[i]) or continuing the current subarray (pre + nums[i]) results in a larger sum.
Updating the Maximum Sum:
max = Math.max(pre, max): This compares the current subarray sum (pre) with the overall maximum sum found so far (max) and updates max if a larger sum is found.
Returning the Result:

After the loop, the function returns the max value, which holds the largest sum of any contiguous subarray.
Example:

Consider nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]:

Initialization:

max = -2
pre = -2
Iterations:

i = 1:
pre = max(1, -2 + 1) = 1
max = max(1, -2) = 1
i = 2:
pre = max(-3, 1 - 3) = -3
max remains 1
i = 3:
pre = max(4, -3 + 4) = 4
max = max(4, 1) = 4
... (continue for remaining elements) ...
Return: The function returns max, which is 6 in this case (the subarray [4, -1, 2, 1]).

Explanation:

The code effectively tracks the maximum sum found so far (max) and continuously evaluates whether to extend the current subarray or start a new one based on the potential for a larger sum. This dynamic decision-making ensures that the largest subarray sum is discovered efficiently. */