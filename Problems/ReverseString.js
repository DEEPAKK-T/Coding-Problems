function reverseString(inputstring){
    var newstring = ""

    for(i = inputstring.length -1; i >= 0; i--){
        newstring += inputstring[i]; 
    }
    return newstring
}

console.log(reverseString("Deepak"));

//Using Builtin functions
reverseStringBuiltIn = (inputstring) => {
    //Split the str to an array using ""
    var arrstr = inputstring.split("");
    var reversearrstr = arrstr.reverse();
    var resversedstring = reversearrstr.join("");
    return resversedstring; 

}

console.log(reverseStringBuiltIn("Hello"));

//Reverse string recursion

function reverseRecursion(str){

    if(str == ""){
        return str;
    } else {
        return reverseRecursion(str.substring(1)) + str[0]
    }

}

console.log(reverseRecursion('Deepak'))
