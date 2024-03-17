let arr = [2,3,4,5,6,7,8]

function evenArrayElements(arr){
    let newevenarr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newevenarr.push(arr[i])
        }
    }

    return newevenarr;

}

console.log(evenArrayElements(arr))

//Build In
function evenArrayElementsBuiltIn(arr){
 return arr.filter(num => num%2 == 0)
}

console.log(evenArrayElements(arr))