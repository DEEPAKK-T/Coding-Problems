function reverse(str) {
    var newstr = ""

    for (let i = str.length - 1; i >= 0; i--) {
        newstr += str[i]
    }
    return newstr;
}

function recreverse(str) {
    if (str == "") {
        return str
    } else {
        return recreverse(str.substring(1)) + str[0]
    }
}

console.log(reverse("deepak"))
console.log(recreverse("charan"))

function balanceBrackets(str) {

    let stack = []

    var Brackets = {
        '[': ']',
        '{': '}',
        '(': ')'
    }

    for (let char of str) {
        if (Brackets[char]) {
            stack.push(char)
        } else if (stack.length === 0 || Brackets[stack.pop()] !== char) {
            return false
        }
    }

    return stack.length === 0;

}



console.log(balanceBrackets("(){[}]"))
console.log(balanceBrackets("(){[]}"))

function frequencySort(arr) {
    var frequencyMap = {}
    var frequencyArr = []
    // collect frequency for the particular element in map
    for (let i of arr) {
        frequencyMap[i] = (frequencyMap[i] || 0) + 1
    }

    //store 
    for (let ele in frequencyMap) {
        frequencyArr.push([frequencyMap[ele], ele])
    }

    frequencyArr.sort((a, b) => { b[0] - a[0] })

    var sortedArr = []
    for (const [key, num] of frequencyArr) {
        sortedArr.push(num)
    }

    return sortedArr

}

console.log(frequencySort([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 5, 6]))

function longestCommonPrefix(strs) {
    var ans = ''
    var s = strs[0]

    for (let i = 0; i < s.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || s[i] != strs[j][i]) {
                return ans;
            }
        }
        ans += s[i]
    }

    return ans;
}


console.log(longestCommonPrefix(["flower", "flow", "flight"]))

////////18-03-2024

// 1. Big O Notation (O):

// Represents the upper bound of an algorithm's time or space complexity.
// Essentially, it tells us the worst-case scenario for how the resource usage scales with the input size.
// We say an algorithm has time complexity O(n) if there exists a constant c such that the time taken by the algorithm is less than or equal to cn for sufficiently large values of n.

// 2. Theta Notation (Θ):

// Represents the tight bound of an algorithm's time or space complexity.
// It captures both the upper bound and lower bound, meaning the resource usage grows at the same rate (asymptotically) as the input size increases.
// We say an algorithm has time complexity Θ(n) if its time complexity is both O(n) and Ω(n). In simpler terms, the algorithm's time grows proportionally to n in both the worst-case and average-case scenarios.

// 3. Omega Notation (Ω):

// Represents the lower bound of an algorithm's time or space complexity.
// It tells us the best-case scenario for how the resource usage scales with the input size.
// We say an algorithm has time complexity Ω(n) if there exists a constant c such that the time taken by the algorithm is greater than or equal to cn for sufficiently large values of n.

function reverseStr(str) {
    var newstr = ""

    for (let i = str.length - 1; i >= 0; i--) {
        newstr += str[i]
    }
    return newstr;

}

// time complexity of the function is O(n), where n is the length of the string. because the for loop iterates through the string one character at a time. 
//The space complexity of the function is also O(n), because it creates a new string to store the reversed string.

console.log("Reverse Str 180324", reverseStr("Deepak"))

function Palindrome(str) {

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
        return true
    }

}

//Time Complexity (O(n)): The function iterates through a loop, where the number of iterations depends on the length of the input string str.
//In the worst case, the loop iterates n/2 times (half the length of the string), where n is the number of characters in the string.
//Space Complexity (O(1)): The function doesn't create any additional data structures that scale with the input size.
// It uses a few constant size variables (i) for loop control and comparison.

console.log(Palindrome("madamm"))

function BalanceBrackets(str) {

    let bracketMap = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    var stack = []

    for (let char of str) {
        if (bracketMap[char]) {
            stack.push(char)
        } else {
            if (stack.length == 0 || bracketMap[stack.pop()] !== char) {
                return false;
            }

        }
    }
    return stack.length == 0;

}

// Example usage
const balancedString = "[()]{}{[()()]()}";
const unbalancedString = "{[()";

//Time Complexity (O(n)): The function iterates through a loop that processes each character (char) of the input string str. In the worst case, it iterates n times (once for each character).
//Space Complexity (O(n)): The function uses a stack (stack) to store opening brackets encountered during the process.
// In the worst case scenario (a string with only opening brackets, like "((((("), the stack can grow up to n elements (one for each opening bracket).
// Therefore, the space complexity is O(n) in the worst case.
// Additional Notes:

// The space complexity can be considered O(1) in the average case if the string has a balanced number of opening and closing brackets, as the stack won't grow beyond a constant size.
// However, to account for the worst-case scenario where the stack might grow proportionally to the input size, the overall space complexity is considered O(n).
console.log("Bracket balanced", BalanceBrackets(balancedString))
console.log("Bracket Balanced", BalanceBrackets(unbalancedString))

//time complexity O(n2) 
// The space complexity of the provided twoSumProblem function is  O(n), where n is the length of the input array arr.
function twoSumProblem(arr, target) {
    let num = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                num.push(i, j)
            }

        }
    }
    return num
}

console.log(twoSumProblem([2, 7, 6, 15], 9))

//Two sum problem with O(n) time complexity

function TwoSumRedComp(arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let compliment = target - arr[i];
        if (map.has(compliment)) {
            return [map.get(compliment), i]
        } else {
            map.set(arr[i], i)
        }
    }
    return []
}

console.log(TwoSumRedComp([2, 7, 6, 15], 9))

function factorial(num) {

    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }

}

//Since the number of recursive calls is directly proportional to the input (num), the overall time complexity is considered O(n).
//the space complexity is considered O(n) due to the call stack usage.
console.log(factorial(5))

function getFibonacci(n) {
    if (n <= 0) {
        return []
    }

    if (n === 1) {
        return [0]
    }

    fib = [0, 1]

    while (fib.length < n) {
        let nextno = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(nextno)
    }

    return fib;
}

console.log("Fibonacci", getFibonacci(10))

function removeDuplicatesUnsorted(arr) {
    let i = 0;

    arr.sort();

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }

    return arr.slice(0, i + 1)

}

function rmdup(arr) {
    let i = 0;
    let j = 0;
    let seen = {}

    while (j < arr.length) {
        let element = arr[j]

        if (!seen[element]) {
            seen[element] = true;

            arr[i] = element
            i++;
        }
        j++
    }
    return arr.slice(0, i)
}


const arr = [1, 3, 2, 3, 4, 5, 4, 2, 7, 2, 2];
const result = removeDuplicatesUnsorted(arr);
console.log(result); // Output: [1, 3, 2, 4, 5, 7]
console.log(rmdup(arr)); // Output: [1, 3, 2, 4, 5, 7]

function frequencySort(arr) {

    let freqMap = {}
    let freqPair = []

    for (let ele of arr) {
        freqMap[ele] = (freqMap[ele] || 0) + 1
    }

    //freq pair
    for (let ele in freqMap) {
        freqPair.push([freqMap[ele], ele])
    }

    //sort pairs

    freqPair.sort((a, b) => b[0] - a[0])

    let newarr = [];
    for (let [freq, num] of freqPair) {
        newarr.push(num)
    }
    return newarr;
}

console.log(frequencySort([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 5, 6]))
function reverseDigit(num) {

    var rev = 0;

    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10)
    }

    return rev
}

console.log(reverseDigit(1234))


function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

const numbers = [3, 1, 4, 1, 5, 9];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [1,

function BalanceBrackets(str) {
    let bracketMap = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let stack = []

    for (let char of str) {
        if (bracketMap[char]) {
            stack.push(char)
        } else if (stack.length == 0 || bracketMap[stack.pop(char)] !== char) {
            return false
        }


    }
    return stack.length == 0;
}

console.log("BalanceBrackets............................")
console.log(BalanceBrackets(balancedString))
console.log(BalanceBrackets(unbalancedString))

function TwoSumProb(arr, target){
    let newArr = []
    for(let i = 0; i < arr.length; i ++){
        for(let j = i + 1; j < arr.length; j ++){
            if(arr[i] + arr[j] === target){
                newArr.push([arr[i], arr[j]])
            }
        }
    }
    return newArr
}

console.log(TwoSumProb([1,3,4,6,5,7], 9))

function ThreeSumProb(arr, target){
    let newArr = []
    for(let i = 0; i < arr.length; i ++){
        for(let j = i + 1; j < arr.length; j ++){
            for(let k = j + 1; k < arr.length; k ++){
                if(arr[i] + arr[j] + arr[k] === target){
                    newArr.push([arr[i], arr[j], arr[k]])
                }
            }
            
        }
    }
    return newArr
}

console.log(ThreeSumProb([1,3,4,6,5,7], 14))

function ThreeSum(arr){
    var resultArr = [] 

    for(let i = 0; i < arr.length - 2; i ++){
        if(i > 0 && arr[i] === arr[i - 1]) continue
        for(let j = i + 1; j < arr.length; j ++){
            if(j > i + 1 && arr[j] === arr[j - 1]) continue
            for(let k = j + 1; k < arr.length; k ++){
                if(k > j + 1 && arr[k] === arr[k - 1]) continue
                if(arr[i] + arr[j] + arr[k] == 0){
                    resultArr.push([arr[i], arr[j], arr[k]])
                }
            }
        }
    }
    return resultArr
}

console.log("...............................")
console.log(ThreeSum([-1,0,1,2,-1,-4]))



