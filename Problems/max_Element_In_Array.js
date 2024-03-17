
var arr = [10, 70, 20, 30, 40];
var largest = arr[0]

//Without BuildIn Function
function maxElement(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= largest){
            largest = arr[i];
        }
    }
    return largest;

}

//With BuildIn Function
console.log(Math.max(...arr))

console.log(maxElement(arr));