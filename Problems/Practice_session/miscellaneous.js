var name = "Deepak"

console.log("name is ", name) //Deepak
console.log("this name is ", this) // object {}
console.log("this name is ", this.name) // undefined

function removeduplicates(arr){
    let i = 0;
    for(let j = 1; j < arr.length; j ++){
        if(arr[i] != arr[j]){
            i ++;
            arr[i] = arr[j]
        }
    }
    console.log(arr)
    return arr.slice(0, i + 1)
}

// const sortedArray = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
// const arr = [1,3,2,3,4,5,4,2,7,2,2]
// const sortedArray = arr.sort();
// console.log("sorted array",sortedArray)
// const uniqueArray = removeduplicates(sortedArray);
// console.log(uniqueArray);

function removeDuplicates(arr){
    let i = 0;
    let j = 0;
    const seen = {};
    console.log("type of seen", typeof(seen))

    while(j < arr.length){
        var element = arr[j]
        if(!seen[element]){
            seen[element] = true;
            arr[i] = element;
            i ++;
        }
        j ++
    }
    console.log("seen", seen)
    return arr.slice(0, i)
}

// const arr = [1, 3, 2, 3, 4, 5, 4, 2, 7, 2, 2];
// const result = removeDuplicates(arr);
// console.log(result); // Output: [1, 3, 2, 4, 5, 7]

//Reverse string

function Reverse(str){
    let resstr = ""
    console.log("\nstr", str)
    console.log("str.split", str.split(''))
    
    for(let i = str.length - 1; i >= 0; i --){
        resstr += str[i]
        console.log(`str[${i}] is ${str[i]}`)
    }
    return resstr;
}

// console.log(Reverse("deepak"))

//Reverse string with recursion in Javascript

function ReverseStrwithRecursion(str){
    if(str == ""){
        return str;
    } else {
        console.log(str.substring(1))
        return ReverseStrwithRecursion(str.substring(1)) + str[0]
    }
}

console.log(ReverseStrwithRecursion("Hello"))

//For in 

/**
 * For In : Iterates over properties(Keys) of an object.
   Focus : Primarily used when dealing with objects, providing access to keys(property names) of an object.
 */

function understandFor(){
    var arr = [10, 20, 30]

    for (let i in arr){
        console.log(i) //0, 1, 2
    }

    for (let i of arr){
        console.log(i) //10, 20, 30
    }
}

understandFor()

console.log("Typescript")

setTimeout(function(){
    console.log("callback")
}, 5000)

console.log("Javascript")

console.log("Typescript")

// document.getElementById("btn")
// .addEventListener("click", function(){
//     console.log("Callback")
// });

console.log("End")

console.log("TypeScript")

setTimeout(function(){
    console.log("CB SetTimeOut")
}, 5000)

// fetch("https://api.netflix.com")
// .then(function cbF(){
//     console.log("CB Netflix")
// });

console.log("End")

// console.log(this)

// function talk() {
//     return this
// }