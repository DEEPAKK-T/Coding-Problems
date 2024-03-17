/**
 * count the frequency of both the strings and compare them
 * if the frequency of both the strings are same it's a valid anagram
 * counts { a: 3, n: 1, g: 1, r: 1, m: 1 }
counts 3 { a: 3, n: 0, g: 1, r: 1, m: 1 }
counts 3 { a: 2, n: 0, g: 1, r: 1, m: 1 }
counts 3 { a: 2, n: 0, g: 0, r: 1, m: 1 }
counts 3 { a: 1, n: 0, g: 0, r: 1, m: 1 }
counts 3 { a: 1, n: 0, g: 0, r: 0, m: 1 }
counts 3 { a: 0, n: 0, g: 0, r: 0, m: 1 }
counts 3 { a: 0, n: 0, g: 0, r: 0, m: 0 }
counts 2 { a: 0, n: 0, g: 0, r: 0, m: 0 }
The dominant factor for the time complexity is the length of the longer string (either s or t). 
Therefore, the overall time complexity is O(n), where n is the length of the longer of the two strings.
 */

function validAnagran(s, t){
    if(s.length !== t.length) return false

    let counts = {}

    for(let char of s){
        counts[char] = (counts[char] || 0) + 1
    }

    for(let char of t){
        if (!counts[char]) return false
        counts[char]--
    }
    return true

}

const s = "anagram"
const t = "naaoramjkh"
console.log(validAnagran(s, t))