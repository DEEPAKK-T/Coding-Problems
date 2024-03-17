/** 
 * logic is create one obj and store alphabetically sorted str as key and values are corresponding anagrams for that key
 * without sorting
 * initialize and object obj = {}
 * for each str of strs sort the str alphabetically
 * if obj already contains above str as key and do push the matching str to value array
 * otherwise add it as new key with array as value [str] 
 * return values of the object as result
*/

function groupAnagrams(strs){
    let obj = {}

    for(let str of strs){
        var letter = str.split("").sort().join("")
        obj[letter] ? obj[letter].push(str) : obj[letter] = [str] 
    }
    return Object.values(obj)
}

const inputstr = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(inputstr)) // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

/** 
 * Explanation:

Initialization:

The code starts by declaring a variable obj as an empty object. This object will be used to store the anagram groups.
Iterating through strings:

The for...of loop iterates over each string str in the input array strs.
Creating a sorted key:

Inside the loop, the code creates a new variable letters. It splits the current string str into individual letters, sorts them alphabetically, and joins them back into a string. This sorted string represents a unique key for all anagrams of str.
Grouping anagrams:

The code uses a ternary operator to check if the sorted key letters already exists as a property in the obj object.
If the key exists (obj[letters]), it means we've encountered an anagram of str before. So, the current string str is pushed into the existing array associated with that key.
If the key doesn't exist (!obj[letters]), it means this is the first time encountering an anagram with these letters. So, a new array is created with str as the first element, and the array is stored in the obj object with the sorted key as the property name.
Returning the result:

After iterating through all strings, the code uses Object.values(obj) to extract the arrays of anagrams from the obj object and return them as the final result.
Example Iteration:

Imagine the input array strs is ["eat", "tea", "tan", "ate"]. Here's how the code would process each string:

Iteration 1:

str = "eat"
letters = "aet" (after splitting and sorting)
Since this is the first time encountering "aet", a new array ["eat"] is created and stored in obj["aet"].
Iteration 2:

str = "tea"
letters = "aet" (again)
The key "aet" already exists in obj, so "tea" is pushed into the existing array obj["aet"], which becomes ["eat", "tea"].
Iteration 3:

str = "tan"
letters = "ant" (different from "aet")
A new array ["tan"] is created and stored in obj["ant"].
Iteration 4:

str = "ate"
letters = "aet" (same as "eat")
The key "aet" already exists, so "ate" is pushed into obj["aet"], which becomes ["eat", "tea", "ate"].
After processing all strings, the obj object would look like this:

obj = {
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan"]
}
Finally, Object.values(obj) would return the grouped anagrams as:

[["eat", "tea", "ate"], ["tan"]]
I hope this explanation clarifies how the code works! Feel free to ask if you have any further questions.
 */