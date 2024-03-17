function reverseInt(num){

    let reversed = 0;
    let sign = num < 0 ? - 1 : + 1
    num = Math.abs(num);

    while(num > 0){
        let digit = num % 10;
        reversed = (reversed * 10) + digit;
        // console.log(reversed)
        num = Math.floor(num / 10)
    }


    return reversed * sign

}

console.log(reverseInt(-123))