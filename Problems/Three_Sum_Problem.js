function ThreeSum(arr){

    let resultArr = []

    arr.sort((a,b) => a - b)

    for(let i = 0; i < arr.length - 2; i ++){

        if(i > 0 && arr[i] === arr[i - 1]) continue;
        for(let j = i + 1; j < arr.length - 1; j ++){

            if(j > i + 1 && arr[j] === arr[j - 1]) continue;
            for(let k = j + 1; j < arr.length; j ++){

                if(k > j + 1 && arr[k] === arr[k - 1]) continue;
                if(arr[i] + arr[j] + arr[k] === 0){
                    resultArr.push([arr[i], arr[j], arr[k]])
                }
            }
        }
    }

    return resultArr;
}


console.log(ThreeSum([-1,0,1,2,-1,-4]))