
var name = "Deepak"

console.log(this.name)  //undefined 
console.log(name)  //Deepak


//this in global scope
console.log(this); // window(browser) object {}(here) whatever the global object
//it can be window, it can be global and it can be some other thing, it depends on where you are running the our JS code

//this inside a function depends on strict and non strict mode
function x() {
    console.log(this)
}
// x();

//this in strict node - (this substitution)
// if the value of this is undefined or null, then this keyword will
// be replaced with globalobject
// only in non strict mode

// this keyword value depends on how the function is called (window)
x() // undefined here func is called without any reference of an object
window.x() // window object, calling object is window object

//this inside a object's method
//if we me a function as an part of an object then it is called 
//a method
//this keyword depends on how the function is being called

const obj = {
    a : 10,
    //this function x is a method now
    x: function() {
        console.log(this); //{ a: 10, x: [Function: x] } => object
        //this.a will give 10
    }
}

obj.x(); //value of this keyword is object itself {a: 10, x: f}

//if we want to share the func with below object we can do by call apply and bind
const obj2 = {
    a: 20
}

// call apply bind methods (sharing methods)

const student = {
    name : "Deepak",
    printName: function() {
        console.log(this.name);
    }
};

student.printName(); //Deepak

const student2 = {
    name : "Deepika"
}

student.printName.call(student2) // Deepika
//overriding or modifying this value using call, apply and bind

//Example for call, apply and bind
//first param name2 will always be the reference to this variable
printFullName.call(name2. "Mumbai", "Maharashtra");
//apply
printFullName.apply(name2. ["Mumbai", "Maharashtra"]);

//bind ==> returns a method
printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName()

//this inside arrow function
//value of this won't be object, it will be enclosing lexical context
//value will be window object, it will take the value of global object

const obj11 = {
    a: 10,
    x: () => {
        console.log(this) //window or global object, enclosing lexical context
    }
}

const obj22 = {
    a: 10,
    x : function() {
        //enclosing lixical context
        const y = () => {
            console.log(this)  //object {a:10, f}
        }
    }
} 

//this in DOM
<button onclick="alert(this)">Click me</button> //object html button element, this button element is itself the value of this
//reference to the html elements


