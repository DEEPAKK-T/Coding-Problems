/** https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    // /.../: Encloses the pattern to match.
    // [^: Matches any character that is not within the following set.
    // 0-9: Matches any digit from 0 to 9 (inclusive).
    // a-z: Matches any lowercase letter from a to z (inclusive).
    // gi: Flags that modify the matching behavior:
    // g: Global flag, matches all occurrences of the pattern in the string, not just the first one.
    // i: Case-insensitive flag, makes the matching case-insensitive.
    // '': An empty string, used as the replacement to remove matched characters.
    s = s.replace(/[^0-9a-z]/gi, '')
    console.log(s)
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false
        }
    }
    return true

};

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/