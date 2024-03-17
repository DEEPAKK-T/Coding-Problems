function containsDuplicate(arr){

    arr = arr.sort()

    for(let i = 0; i < arr.length; i ++){
        if(arr[i] == arr[i + 1]){
            return true
        }
        return false
    }

}

console.log(containsDuplicate([1,2,3,1]))