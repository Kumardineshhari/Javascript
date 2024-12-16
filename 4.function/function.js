// !        how to declare function

// function function_name(params) {
    
// }

// function_name()


// !        1. Named Function
function display() {
    console.log("hello, i am displaying the function");
    
}
display();



// !        Function with Parameter

function add(a,b) {
    console.log(a+b);
}

add(50,30)                      //op: 80


// !        Function with return value
function sum(a,b) {
    return a+b
}
console.log(sum(10,40));        //op: 50


// !        2. Function  with expression
let hello = function() {
    console.log("hello");
}

hello()

let hi = function(){
    console.log("i am using hi function");
}

hi()

// !       3. Arrow Function
let multiply = ()=>{
console.log("i am multiplying the numbers");
}

multiply()

// !           4. Nested Function
function outer() {
    let a = 10
    function inner(){
        let b = 20
        console.log(a+b);
    }
    inner()   
}
outer()

//  when we are declaring nested function ,iner function can take all the property of outer function but the outer function can't take the property of inner function. This is called "lexical scopping".

// !        5.Higher Order Function and CallBack Function

//  the function who takes another function as an arugment or parameter is called "Higher Order Function".

//  the function which we are sending as parameter is called "CallBack Function".


function call(){
    console.log("i am hi function");
    
}

function callfunction(a,b,c){
    console.log(a);
    console.log(b);
    c()
}

callfunction(10,'abc',call);

// !        6.IIFE
(
    function(){
        console.log("i am IIFE function");
        
    }
)()