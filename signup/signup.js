

let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    console.log(username,password);

    localStorage.setItem("username",username)
    localStorage.setItem("password",password)

    console.log("Registered Successfully");

    open("./login.html")
    
})