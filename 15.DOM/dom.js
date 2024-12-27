
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


//!     3. traget element by the queryselector:

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


let cont5 = document.querySelector(".container").innerHTML      
let cons5 = document.querySelector(".container5")

cons5.innerHTML = cont5


//!-------how to apply CSS from javascript

cons5.style.backgroundColor="green"
cons5.style.color="white"


//!------- how to add and remove class.   

//how to know the classes
let con6 = document.querySelector(".con6")
console.log(con6.classList);

//how to add the class
con6.classList.add("hello")
console.log(con6.classList);

//how to remove the class
con6.classList.remove("dark")
console.log(con6.classList);

con6.style.borderRadius="20px"
con6.classList.add("hi");

//!     how to create element

let head1=document.createElement("h1")

head1.innerText = "i am heading1 from .js file"

head1.classList.add("heading1")

let container1 = document.querySelector(".container")


// container1.after(head1);
// container1.before(head1);
// container1.append(head1);
container1.prepend(head1);

let div = document.createElement("div");

div.innerText = "i am container7 from .js file"

div.classList.add("container7")

let con7 = document.querySelector(".con6")

con7.after(div);

div.innerHTML = `<h1>this is container7</h1>
    <ul>
        <li>dinesh</li>
        <li>kumar</li>
        <li>prkash</li>
    </ul>`
