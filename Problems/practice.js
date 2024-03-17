

//Reverse an integer
/*
function reverseInteger(num){
    sign = num < 0 ? -1 : 1;
    num = Math.abs(num)
    console.log("num", num)
    let reverseNum = 0

    while(num > 0){
        digit = num%10;
        reverseNum = (reverseNum * 10) + digit;
        num = Math.floor(num/10)
    }

    return reverseNum * sign;

}

console.log(reverseInteger(12345))

function checkPalindrome(str){
    for(let i = 0; i < str.length/2; i ++){
        if(str[i] !== str[str.length - 1 - i]){
            return console.log("not palindrome")
        }
    }
    return console.log("given string is palindrome")
}

checkPalindrome("madamm")

function balancedBrackets(bracketstr){

    const bracketMap = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
    }
    var stack = []

    for(let char of bracketstr){
        // console.log(char)
        if(bracketMap[char]){
            stack.push(char)
        } else if(stack.length == 0 || bracketMap[stack.pop()] !== char ){
            return false;
        }
    }

    return stack.length === 0

}

console.log(balancedBrackets("[()]{}{[()()]()}"))

function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    } else{
        return num * factorial(num - 1)

    }
}

console.log(factorial(6))

function reverseString(str){
    let reverse = ""

    for(let i = str.length - 1; i >= 0; i --){
        reverse += str[i]
    }
    return reverse

}

console.log(reverseString("deepak"))

function maxElement(arr){
    var maxElement = arr[0]

    for(let i = 0; i <= arr.length - 1; i ++){
        if(arr[i] > maxElement){
            maxElement = arr[i]
            // console.log(maxElement)
        }
    }
    return maxElement;
}

console.log(maxElement([1, 2, 3, 4, 5]))

function IncLargestInArr(arr){
    // largest = Math.max(...arr);
    var Maxele = arr[0]
    var index = 0;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > Maxele){
            Maxele = arr[i]
            index = i
        }
    }
    console.log(Maxele, index)
    arr[index] = Maxele + 1;
    // indexoflar = arr.indexOf(largest);

    // var newarr = arr;
    // newarr[indexoflar] = largest + 1;

    return arr;

}
console.log(IncLargestInArr([1,2,3,210,8,90298,98]))

function stringToTitleCase(str){
   str = str.toLowerCase().split(' ');
   for(let i = 0; i < str.length; i ++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
   }
   return str.join(' ')
}

console.log(stringToTitleCase("my name deepak"))

function reverseWordWith5letters(str){
    var words = str.split(' ');

    const reverseWords = words.map(word => (word.length > 5) ? word.split('').reverse().join('') : word)
    // console.log("reverseWords", reverseWords)
    return reverseWords.join(' ')

}

console.log(reverseWordWith5letters("my name is deepak"))

function frequencySort(arr){

    var frequencyMap = {}
    var frequencyPair = []

    for(let ele of arr){
        frequencyMap[ele] = (frequencyMap[ele] || 0) + 1
    }

    for(let ele in frequencyMap){
        frequencyPair.push([frequencyMap[ele], ele])
    }

    frequencyPair.sort((a,b) => b[0] - a[0])

    var sortedarr = []
    console.log(frequencyPair)
    for(const [freq, num] of frequencyPair){
        sortedarr.push(num)
    }
    return sortedarr;
}


console.log(frequencySort([2,2,2,4,4,5,5,51,1,8,8,8,8,8]))
*/

//Talentica 
/**
 * Node.js - file system, VM, REPL, Debugger, Crypto, Latest ES6/ES7, Restful API's, jwt token with projects.
 * Babel, NPM, Gulp, Grunt, webpack.
 * Express JS
 * MongoDb, MYSQL, PostgreSQL
 * Backend
 * Git ------------------------------------------------------------------
 * TypeScript how to create project and covert to js ----------
 * Coding revision
 * Basic HTML and CSS.
 * Resume projects -----------
 * Project Structure ----------------
 */

//Practice - 08-02-2024

//Reverse string with recursion
function revStrRec(str){
    if (str == ""){
        return ""
    } else {
        return revStrRec(str.substring(1)) + str[0]
    }
}

console.log(revStrRec("Deepak"))

// Rever string normally
function revStr(str){
    let newstr = ""

    for(let i = str.length -1; i >= 0; i --){
        newstr += str[i]
    }
    return newstr
}

console.log(revStr("Pankaj"))

//remove distinct elements form array

function dist(arr){
    arr.sort();

    let i = 0;
    for(let j = 1; j < arr.length; j ++){
        if(arr[i] !== arr[j]){
            i ++;
            arr[i] = arr[j]
        }
    }
    return arr.slice(0, i + 1)

}

console.log(dist([3,3,1,3,1,7,85,3,5,6,7,10]))

//without builtin sort

function distun(arr){
    let i = 0;
    let j = 0;
    let seen = {}

    while(j < arr.length){
        element = arr[j]
        if(!seen[element]){
            seen[element] = true;
            arr[i] = element;
            i ++
        }
        j ++
    }

    return arr.slice(0, i)
}

console.log(distun([3,3,1,3,1,7,85,3,5,6,7,10]))

function Balaced(str){

    let brackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    let stack = []

    for(let char of str){
        if(brackets[char]){
            stack.push(char)
        } else if( stack.length === 0 || brackets[stack.pop()] !== char) {
            return false
        }
    }

    return stack.length === 0;

}

const balancedString = "[()]{}{[()()]()}";
const unbalancedString = "{[()";

console.log(Balaced(balancedString))
console.log(Balaced(unbalancedString))



