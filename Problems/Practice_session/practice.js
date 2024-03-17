function reverse(str){
    var newstr = ""

    for(let i = str.length - 1; i >= 0; i --){
        newstr += str[i]
    }
    return newstr;
}

function recreverse(str){
    if ( str == ""){
        return str
    } else {
        return recreverse(str.substring(1)) + str[0]
    }
}

console.log(reverse("deepak"))
console.log(recreverse("charan"))

function balanceBrackets(str){

    let stack = []

    var Brackets = {
        '[' :']',
        '{' : '}',
        '(' : ')'
    }

    for (let char of str) {
        if(Brackets[char]){
            stack.push(char)
        } else if (stack.length === 0 || Brackets[stack.pop()] !== char){
            return false
        }
    }

    return stack.length === 0;

}



console.log(balanceBrackets("(){[}]"))
console.log(balanceBrackets("(){[]}"))

function frequencySort(arr){
    var frequencyMap = {}
    var frequencyArr = []
// collect frequency for the particular element in map
    for(let i of arr){
        frequencyMap[i] = (frequencyMap[i] || 0) + 1
    }

    //store 
    for(let ele in frequencyMap){
        frequencyArr.push([frequencyMap[ele], ele])
    }

    frequencyArr.sort((a,b) => {b[0] - a[0]})

    var sortedArr = []
    for(const [key, num] of frequencyArr){
        sortedArr.push(num)
    }

    return sortedArr

}

console.log(frequencySort([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 5, 5, 5, 5, 6]))

function longestCommonPrefix(strs){
    var ans = ''
    var s = strs[0]

    for( let i = 0; i < s.length; i ++){
        for( let j = 1; j < strs.length; j ++){
            if(i >= strs[j].length || s[i] != strs[j][i]){
                return ans;
            }
        }
        ans += s[i]
    }

    return ans;
}


console.log(longestCommonPrefix(["flower","flow","flight"]))


