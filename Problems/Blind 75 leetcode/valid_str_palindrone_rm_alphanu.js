

function validPalindrome(str){

    str = str.toLowerCase();
    str = str.replace(/[^0-9a-z]/gi, '')
    console.log(str)

    for(let i = 0; i < str.length/2; i ++){
        if(str[i] != str[str.length - 1]){
            return false
        }
        return true
    }
}

console.log(validPalindrome("A man, a plan, a canal: Panama"))