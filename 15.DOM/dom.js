
//! -----how to access any element

//!     1. traget element by the ID:

let p1 = document.getElementById("para1")
console.log(p1)

let h1 = document.getElementById("head1")
console.log(h1);

//!     2. target element by the class:

let con1 = document.getElementsByClassName("container")
console.log(con1);

console.log(con1[1]);


//!     3. traget element by the selector:

let para = document.querySelector("#para1")
console.log(para);

let cons = document.querySelector(".container")
console.log(cons);  

let cons1 = document.querySelectorAll(".container")
console.log(cons1);

//! -----how to knwo what is present inside that

// let con2 = document.getElementsByClassName("container3")
// console.log(con2);


let con3 = document.querySelector(".container3")
console.log(con3);

console.log(con3.innerText);

let text = con3.innerText
console.log(text);

let html = con3.innerHTML
console.log(html);

let con4 = document.querySelector(".container4")
console.log(con4.innerText);

console.log(con4.innerHTML);

con4.innerText = "hello how are u"

con4.innerHTML = "<h1>this is container4</h1> <p>i am paragraph 1 inside the container4</p>"


let cont5 = document.querySelector(".container").innerText      
let cons5 = document.querySelector(".container5")

cons5.innerText=cont5
console.log(cons5);





