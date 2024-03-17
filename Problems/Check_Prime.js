// A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.

function checkPrime(num){
    let isPrime = true
    if (num == 1){
        console.log("1 is neither prime nor composite")
        return
    }

    if(num > 1){
        for(let i = 2; i < num; i ++){
            if(num%i == 0){
                isPrime = false
            }
        }

        if(isPrime){
            console.log("Given no is Prime");
        }
        if(!isPrime){
            console.log("Given no is not a prime no")
        }
        return;
    }
}

checkPrime(13)