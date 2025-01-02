


let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let username = document.getElementById("logusername").value
    let password = document.getElementById("logpassword").value

    console.log(username,password);

    localStorage.getItem("username")
    localStorage.getItem("password")

    console.log("Login Successfully");

    open("./home.html")
    
})