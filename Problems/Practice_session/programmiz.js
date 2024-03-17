// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");


function twoSum(arr, target){
    let num = []
    for( let i = 0; i < arr.length; i ++ ){
        for (let j = i + 1; j < arr.length; j ++){
            if(arr[i] + arr[j] == target){
                num.push(i, j)
            }
        }
    }
    return num
    
}

var arr = [2, 7, 8, 8, 10]
console.log(twoSum(arr, 18))

//two sum with map and complement no(target - current no) => o(n) time complexity
//will calcuale target - arr[i]
//if comp is in map return [map.get(compliment), i]
//otherwise push {arr[i], i} to map
//if no index found return []
function twoSumMap(arr, target){
    
    let map = new Map();
    
    for(let i = 0; i < arr.length; i ++){
        let compliment = target - arr[i]
        
        if(map.has(compliment)){
            return [map.get(compliment), i]
        } else {
            map.set(arr[i], i)
        }
    }
    
    return []
    
}
console.log(twoSumMap(arr, 18))


//remove duplicates from arr

// /**
//  * i = 0, check if a[i] !== a[i]
//  * i ++ and a[i] = a[j]
//  * return arr.slice(0, i + 1) since i started with 0
//  * */

function distinctArr(arr){
    
    arr = arr.sort()
    
    let i = 0;
    for(let j = 1; j < arr.length; j ++){
           if(arr[i] !== arr[j]){
               i ++
               arr[i] = arr[j]
           }
    }
    return arr.slice(0, i + 1)
    
}

console.log(distinctArr([2,4,1,8,5,4,6]))

function validAnagram(s, t){
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
const t = "anranga"
console.log(validAnagram(s, t))

//map - balanced brackets problem

// func BalanceBrackets(str){
    
// }

//factorail of num
function factorial(num){
    if (num == 0 || num == 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(5))

//maximum element in array
function maxFunction(arr){
    let largest = arr[0]
    
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest;
}

console.log(maxFunction([10, 3, 20, 5, 9]))

//reverse string o(n)
function reverseStr(str){
    var newstr = '';
    for(let i = str.length - 1; i >= 0; i --){
        newstr += str[i]
    }
    return newstr
}

console.log(reverseStr("deepak"))

function checkPalindrome(str){
    for(let i = 0; i < str.length/2; i ++){
        if(str[i] !== str[str.length - 1 - i]){
            return false
        }
    }
    return true;
}

console.log(checkPalindrome("madamaksj"))

function fibonacci(num){
    
    if (num <= 0) {
        return []
    }
    
    if (num === 1){
        return [0]
    }
    
    let fib = [0, 1]
    
    while(fib.length < num){
        let nextno = fib[fib.length - 1] + fib[fib.length - 2]
        fib.push(nextno)
    }
    return fib;
}

console.log("Fibonacci series")
console.log(fibonacci(10))

function removeDuplicate(arr){
    //arr = arr.sort()
    let j = 0
    for(let i = 1; i < arr.length; i ++){
        if(arr[j] !== arr[i]){
            j++;
            arr[j] = arr[i]
        }
    }
    return arr.slice(0, j + 1)
}

console.log(removeDuplicate([10,9,9,9,2,2,2,3,4,4,4,6,6,7]))


/**
 * Frequency sort
 * calculate frequency pairs using map
 * calculate frequency pairs array [freq, ele]
 * sort frequency pairs array
 * push frequency elements form freq pairs array to new array
 * */
 function frequencySort(arr){
     let freqMap = {}
     let freqPairs = []
     
     for(let element of arr){
         freqMap[element] = (freqMap[element] || 0) + 1
     }
     
     for(let ele in freqMap){
         freqPairs.push([freqMap[ele], ele])
     }
     console.log(freqPairs)
     
     freqPairs.sort((a,b) => b[0] - a[0])
     
     var newarr = []
     for(let [freq, num] of freqPairs){
         newarr.push(num)
     }
     return newarr;
 }
 var updatedarr = frequencySort([2,2,2,2,5,5,4,3,3,6,7,6])
 console.log(updatedarr)
 
 var revarr = []
 for(let j = updatedarr.length - 1; j >= 0; j --){
     revarr.push(updatedarr[j])
 }
 console.log("revarr", revarr)
 
 function maxProfit(prices){
     let left = 0;
     let right = 1;
     let maxprofit = 0;
     
     while(left < prices.length){
         if(prices[left] < prices[right]){
             var profit = prices[right] - prices[left];
             maxprofit = Math.max(maxprofit, profit)
         } else{
             left = right
         }
         right ++
     }
     return maxprofit;
 }
 
 
 console.log(maxProfit([7,1,5,3,6,4]))
