/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    //Creating map for roman no with equivalent values
    const romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    //replacing string from subtractive form to addition for more 4, 9, 40, 90, 400, 900 to make calulation easier
    //If smaller no comes before greater then substract smaller from greater for ex : IV ==> (5 - 1) = 4
    // IV = 4: "I" before "V" means 1 is subtracted from 5, resulting in 4.
    // IX = 9: "I" before "X" means 1 is subtracted from 10, resulting in 9.
    // XL = 40: "X" before "L" means 10 is subtracted from 50, resulting in 40.
    // XC = 90: "X" before "C" means 10 is subtracted from 100, resulting in 90.
    // CD = 400: "C" before "D" means 100 is subtracted from 500, resulting in 400.
    // CM = 900: "C" before "M" means 100 is subtracted from 1000, resulting in 900.
    s = s.replace("IV", "IIII")
    s = s.replace("IX", "VIIII")
    s = s.replace("XL", "XXXX")
    s = s.replace("XC", "LXXXX")
    s = s.replace("CD", "CCCC")
    s = s.replace("CM", "DCCCC")
    //console.log(s)
    s = s.split('');
    console.log(s)
    var num = 0;

    // for(let i = s.length - 1; i >= 0; i --){
    // if(s[i] == "I"){
    //     num = num + 1
    // } else if(s[i] == "V"){
    //     num = num + 5
    // } else if(s[i] == "X"){
    //     num = num + 10
    // } else if(s[i] == "L"){
    //     num += 50
    // } else if(s[i] == "C"){
    //     num += 100
    // } else if(s[i] == "D"){
    //     num += 500
    // } else if(s[i] == "M"){
    //     num += 1000
    // }
    for (let char of s) {
        num += romanMap[char]

    }
    // }

    return num

};

/* More Votes 

symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    value = 0;
    for(let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};
*/