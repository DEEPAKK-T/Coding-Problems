function productExpectSelf(arr){

    let prefix = 1
    let result = []

    for(let i = 0; i < arr.length; i ++){
        result[i] = prefix;
        prefix *= arr[i]
    }

    let sufix = 1
    for(let i = arr.length - 1; i >= 0; i --){
        result[i] *= sufix;
        sufix *= arr[i] 
    }

    return result;

}

console.log(productExpectSelf([1, 2, 3, 4]))