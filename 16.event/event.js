//!     Event Handler

let hello = ()=>{
    alert ("You are using Event Webpage");
}

let add = ()=>{
    let a = Number(prompt("enter the value for a : "));
    let b = Number(prompt("enter the value for b : "));
    alert(a+b);
}

let mouseOver = ()=>{
    alert("i am MouseOver event");
}

//!     Event Listener

let btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("click",()=>{
    console.log("hi i am using EvenListener");
    
})

//!     Event Task

let taskbtn1 = document.getElementById("taskbtn1")

taskbtn1.addEventListener("click",()=>{
    let copy = document.querySelector(".task1");
    let text = copy.innerHTML;
    let div = document.createElement("div")
    div.innerHTML = text; 
    div.classList.add("div")

    let taskbtn1 = document.getElementById("taskbtn1")
    let copy1 = document.querySelector("task1")
    taskbtn1.after(div)

    
})

let changecolor = document.getElementById("color");

changecolor.addEventListener("click", () => {
    let change = document.querySelector(".change");
    
    if (change.style.backgroundColor == "green") {
        change.style.backgroundColor = ""; 
    } else {
        change.style.backgroundColor = "green";
    }
    

});


