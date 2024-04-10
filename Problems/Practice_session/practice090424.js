function ReverseStr(str) {
    var newstr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newstr += str[i]
    }
    return newstr;
}

console.log(ReverseStr("Deepak"))

//Two sum : array [1,4,5,7] target = 9 result should be [1,2]
//Brute Force o(n2)
function TwoSum(arr, target) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                newArr.push(i, j)
            }
        }
    }
    return newArr;
}

var array = [1, 4, 5, 7]
var target = 9
console.log(TwoSum(array, target))

//using Map

function TwoSumUsingMap(arr, target) {
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        let compliment = target - arr[i]
        console.log("map", map)

        if (map.has(compliment)) {
            return [map.get(compliment), i]
        } else {
            map.set(arr[i], i)
        }
    }
    return []
}

console.log(TwoSumUsingMap(array, target))

function ThreeSum(arr) {
    let resultArr = []


    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) continue
            for (let k = j + 1; k < arr.length; k++) {
                if (k > j + 1 && arr[k] === arr[k - 1]) continue

                if (arr[i] + arr[j] + arr[k] == 0) {
                    resultArr.push([i, j, k])
                }
            }
        }

    }

    return resultArr;
}

console.log(ThreeSum([-1, 0, 1, 2, -1, -4]))

function BalancedBrackets(str) {

    let BracketMap = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let stack = []

    for (let char of str) {
        if (BracketMap[char]) {
            stack.push(char)
        } else {
            if (stack.length == 0 || BracketMap[stack.pop()] != char) {
                return false
            }
        }
    }

    return stack.length == 0

}

const balancedString = "[()]{}{[()()]()}";
const unbalancedString = "{[()";

console.log(BalancedBrackets(balancedString))
console.log(BalancedBrackets(unbalancedString))


function BalanceBrackets(str){
    
    let stack = [];

    let BracketMap = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }

    for(let char of str){
        if(BracketMap[char]){
            stack.push(char)
        } else {
            if( stack.length === 0 || BracketMap[stack.pop()] != char){
                return false
            }
        }
    }

    return stack.length === 0
}

console.log("*****************************************************")

console.log(BalanceBrackets(balancedString))
console.log(BalanceBrackets(unbalancedString))
