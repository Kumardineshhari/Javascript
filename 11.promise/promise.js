

//!     Promise

let p = new Promise((resolve,reject)=>{
    // resolve("i will do this")
    reject("i will not do")
})

p.then((data)=>{
    console.log(data);
    
}).catch((arr)=>{
    console.log(arr);
    
}).finally(
    console.log("promise is running")           //1st it will run
)


// console.log(p);
