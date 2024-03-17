
//TIme complexity o(n2)

function twoSum(arr, target){
    let num = []
    for(let i = 0; i < arr.length; i ++){
        for(let j = i + 1; j < arr.length; j ++){
            if(arr[i] + arr[j] === target){
                num.push(i, j)
            }
        }
    }
    return num

}

//with time complexity o(n) using map
/**
 * Two sum Problem
 * first let's calculate compliment = target - arr[i]
 * if compliment exists in map, then return [map.get(complimenet), i]
 * else push current element into map.set(arr[i], i)
 * if no matches found then return empty array 
 * @param {*} arr 
 * @param {*} target 
 */

function twoSumMap(arr, target){

    let map = new Map()

    for( let i = 0; i < arr.length; i ++){
        let compliment = target - arr[i]

        if(map.has(compliment)){
            return [map.get(compliment), i]
        } else {
            map.set(arr[i], i)
        }
    }

    return []
}

// console.log(twoSum([4,5,6,15,2,7], 9))
console.log(twoSum([2,7,6,15], 9))
console.log(twoSumMap([2,7,6,15], 9))