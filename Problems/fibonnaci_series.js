
function getFibonacci(num){

    if(num <= 0){
        return [];
    }

    if(num === 1){
        return [0];
    }

    let fib = [0, 1];
    // var nextno = 0
    //nextno < num
    //fib.length < num
    while(fib.length < num){ //[ 0, 1, 1, 2, 3, 5 ]
        // let nextno = fib[fib.length - 1] + fib[fib.length - 2];
        let nextno = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(nextno);
    }
    return fib; //[
    //     0, 1,  1,  2,  3,
    //     5, 8, 13, 21, 34
    //   ]

}

console.log(getFibonacci(10))