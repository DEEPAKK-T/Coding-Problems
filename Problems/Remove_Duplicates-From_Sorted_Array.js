// /** https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//     var i = 0;

//     for (let j = 1; j < nums.length; j ++){
//         if(nums[i] != nums[j]){
//             i ++;
//             nums[i] = nums[j];
//         }
//     }
//     return i + 1;
    
// };

function removeDuplicates(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return arr.slice(0, i + 1); // Return the modified array
  }
  

console.log(removeDuplicates([10,20,30,40, 40]))

//Remove duplicates from unsorted array without sort

function removeDuplicatesUnsorted(arr){
  let i = 0;
  let j = 0;
  let seen = {};

  while(j < arr.length){
    var element = arr[j];
    if(!seen[element]){
      seen[element] = true;
      arr[i] = element;
      i ++
    }
    j ++;
  }
  return arr.slice(0, i)
}

const arr = [1, 3, 2, 3, 4, 5, 4, 2, 7, 2, 2];
const result = removeDuplicatesUnsorted(arr);
console.log(result); // Output: [1, 3, 2, 4, 5, 7]

/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/


// Here's a detailed explanation of the removeDuplicates function with an example:

// Function Breakdown:

// Initialization:

// let i = 0;: This variable acts as a pointer to the last unique element found so far.
// Looping Through the Array:

// for (let j = 1; j < arr.length; j++): This loop iterates through the array starting from the second element (j = 1).
// Checking for Duplicates:

// if (arr[i] !== arr[j]): This condition checks if the current element (arr[j]) is different from the last unique element (arr[i]).
// If Unique, Move Forward:

// i++; arr[i] = arr[j];: If a unique element is found, the pointer i is incremented to point to the next available position, and the current element is placed there.
// Returning the Modified Array:

// return arr.slice(0, i + 1);: After the loop, the slice method extracts a portion of the array containing only the unique elements (from index 0 up to i + 1).
// Example:

// JavaScript
// let originalArray = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = removeDuplicates(originalArray);
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
// Use code with caution. Learn more
// Explanation:

// The function starts with i = 0 (pointing to the first element).
// The loop begins with j = 1 (second element).
// arr[1] (2) is different from arr[0] (1), so i becomes 1 and arr[1] is copied to arr[1] (no change).
// j becomes 2. arr[2] (2) is the same as arr[1] (2), so no action is taken.
// This process continues, resulting in i eventually pointing to index 4 (after the last unique element, 5).
// The slice method returns a new array containing elements from index 0 to 4 (inclusive): [1, 2, 3, 4, 5].
// Key Points:

// This method efficiently removes duplicates in-place, preserving the original order.
// It's specifically designed for sorted arrays.
// It uses a two-pointer approach to efficiently track unique elements.