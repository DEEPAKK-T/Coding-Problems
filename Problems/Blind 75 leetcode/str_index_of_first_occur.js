
/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 * https://www.youtube.com/watch?v=vw1ITfb8DjQ
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0. */


function IndexOfSubstring(haystack, needle){

    if(haystack === needle || needle == 0){
        return 0;
    }

    for(let i = 0; i < haystack.length; i ++){
        if(haystack[i] == needle[0]){
            sub = haystack.substring(i, i + needle.length)
            if(sub === needle){
                return i;
            }
        }
    }
    return -1
}

var haystack = "Deepak"
var needle = "pak" // result ==> 3
console.log(IndexOfSubstring(haystack, needle))