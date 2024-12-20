
//!                 timing function

//!     setTimeout()

//?     syntax: setTimeout(callbackFunction, time)

// it is used to execute the function after the specific time.

let hello = ()=> {
    console.log("hello world..");
    
}
setTimeout(hello,5000);

setTimeout(() => {
    console.log("i am seting timeout");
    
}, 4000);

//!     setInterval()

let breakup =()=>{
    console.log("i am happy to breakup with you😎😎😎");
    
}

// setInterval(breakup,1000)

// setInterval(() => {
//     console.log("i am setInterval");
    
// }, 2000);

//!     clearTimeout()

let clear = clearTimeout(()=>{
        console.log("i am stoping the setTimeout");
        
},3000);

clearTimeout(clear);

//!     clearInterval()

let interval = setInterval(() => {
    console.log("i am stoping the interval");
    
}, 1000);

// clearInterval(interval)

setTimeout(() => {
    clearInterval(interval)
}, 5000);