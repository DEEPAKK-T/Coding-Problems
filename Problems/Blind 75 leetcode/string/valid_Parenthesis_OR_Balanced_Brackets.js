/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let ParenPair = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }

    let stack = []

    for(let char of s){
        if(ParenPair[char]){
            stack.push(char)
        } else {
            if(stack.length == 0 || ParenPair[stack.pop()] != char){
                return false
            }
        }
    }
    return stack.length == 0
};

const validParenthesis = "[()]{}{[()()]()}";
const invalidParenthesis = "{[()";

console.log(isValid(validParenthesis))
console.log(isValid(invalidParenthesis))