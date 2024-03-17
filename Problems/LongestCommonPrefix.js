/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var ans = ""
    var s = strs[0]; //return minimum string
    console.log("s", s)

        for(let i=0; i<s.length; i++){
            // console.log("strs", strs[1].length)
            for(let j=1; j<strs.length;j++){
                if(i>=strs[j].length || s[i] != strs[j][i]){
                    // console.log("strs", strs[1][5])
                    return ans;
                }
            }
            ans+=s[i]
        }
        return ans;
    
};
console.log(longestCommonPrefix(["flower","flow","flight"]))

/*


Here's a breakdown of the logic with an example:

Goal:

Find the longest common prefix (LCP) shared by all strings in an array.
The LCP is the initial sequence of characters that are identical in every string.
Logic:

Start with the first string as a potential LCP:

Assume the first string (strs[0]) is the LCP to begin with.
Iterate through its characters one by one.
Check each character against other strings:

For each character in the potential LCP:
Compare it to the same position in all other strings in the array.
If any string doesn't match at that position:
The current potential LCP is no longer valid.
Return the LCP found so far (stored in ans).
Build the LCP character by character:

If all strings match at a certain position:
Add that character to the ans string, building the LCP.
Return the final LCP:

After iterating through all characters of the potential LCP:
Return the final ans string, which represents the longest common prefix.
Example:

JavaScript
strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);  // Output: "fl"
Use code with caution. Learn more
Explanation:

Starts with s = "flower" as the potential LCP.
Compares s[0] = "f" to strs[1][0] and strs[2][0], both match.
Adds "f" to ans, now ans = "f".
Compares s[1] = "l" to strs[1][1] and strs[2][1], both match.
Adds "l" to ans, now ans = "fl".
Compares s[2] = "o" to strs[1][2], it matches.
Compares s[2] = "o" to strs[2][2], it doesn't match.
LCP found, returns "fl" as the longest common prefix.

*/