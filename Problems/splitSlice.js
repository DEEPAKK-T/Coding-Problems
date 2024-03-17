// function splitArray(arr, splitValue){
//     const newArr = [];

//     for(let i = 0 ; i < arr.length; i += splitValue){
//         const chunk = arr.slice(i, i + splitValue)
//         newArr.push(chunk)
//     }
//     return newArr

// }




// const arr = [1,2,3,4,5,6,7,8,9]
// const splitValue = 3
// console.log(splitArray(arr, splitArray))

function splitArray(arr, splitValue) {
    const result = [];
    
    for (let i = 0; i < arr.length; i += splitValue) {
        const chunk = arr.slice(i, i + splitValue);
        result.push(chunk);
    }

    return result;
}

// Example usage:
const list1 = [1, 2, 3, 4, 5, 6, 7, 8];
const splitValue = 3;
const resultList = splitArray(list1, splitValue);
console.log(resultList);