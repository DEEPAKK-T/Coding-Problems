function ReverseStr(str){
    var newstr = ""
    for(let i = str.length - 1; i >=0 ; i --){
        newstr += str[i]
    }
    return newstr;
}

console.log(ReverseStr("Deepak"))

//Two sum : array [1,4,5,7] target = 9 result should be [1,2]
//Brute Force o(n2)
function TwoSum(arr, target){
    let newArr = []
    for(let i = 0; i < arr.length; i ++){
        for(let j = i + 1; j < arr.length; j ++){
            if(arr[i] + arr[j] == target){
                newArr.push(i, j)
            }
        }
    }
    return newArr;
}

var array = [1,4,5,7]
var target = 9
console.log(TwoSum(array, target))

//using Map

function TwoSumUsingMap(arr, target){
    let map = new Map()

    for(let i = 0; i < arr.length; i ++){
        let compliment = target - arr[i]
        console.log("map", map)

        if(map.has(compliment)){
            return [map.get(compliment), i]
        } else{
            map.set(arr[i], i)
        }
    }
    return []
}

console.log(TwoSumUsingMap(array, target))