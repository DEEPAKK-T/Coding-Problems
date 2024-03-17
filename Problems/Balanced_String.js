

/*
function isBalanced(str) {

    let stack = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stack.push(str[i]);
            continue
        }

        if (stack.length == 0)
            return false;

        let check
        switch (str[i]) {
            case ")":
                check = stack.pop();
                if (check == "{" || check == "[")
                    return false;
                break

            case "}":
                check = stack.pop();
                if (check == "(" || check == "[")
                    return false;
                break

            case "]":
                check = stack.pop();
                if (check == "(" || check == "{")
                    return false;
                break
        }

        return (stack.length == 0)
    }

}

// brackets = "[()]{}{[()()]()}"
// brackets = "[(])"

brackets = "([{}])"


if (isBalanced(brackets)) {
    console.log("String is balanced")
} else {
    console.log("String is not balanced")
}

*/

function isBalanced(str){
    const stack = [];

    //Defining Map for opening and closing Brackets
    const bracketPairs = {
        '(' : ")",
        "{" : "}",
        "[" : "]"
    };

    for (let char of str){
        // If the character is an opening bracket, push it onto the stack
        if(bracketPairs[char]){
            console.log(bracketPairs[char])
            stack.push(char);
        } else {
            // If the character is a closing bracket
            // Check if the stack is empty or if the top of the stack matches the current closing bracket
            //                                                ( === )
            //                                                
            if(stack.length == 0 || bracketPairs[stack.pop()] !== char){
                return false;
            }

        }

    }

    //if the stack is empty string is balanced
    //stack is not empty contanins {, [ == Hence not balanced
    return stack.length === 0;
}

// Example usage
const balancedString = "[()]{}{[()()]()}";
const unbalancedString = "{[()";

console.log(isBalanced(balancedString))
console.log(isBalanced(unbalancedString))

