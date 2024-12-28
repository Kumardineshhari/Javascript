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

let colour = ()=>{
    document.body.classList.toggle("dark")
}


let calculate = ()=>{
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let add = Number(a+b)
    // console.log(add);
    
    let ans = document.querySelector(".ans")
    ans.innerHTML= `<h1>the addition value is ${a+b}</h1>`;
    
}

let createtable = () => {

    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let table = document.querySelector("#table");
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${a}</td> <td>${b}</td> <td>${a + b}</td>`;
    table.append(tr);
};
