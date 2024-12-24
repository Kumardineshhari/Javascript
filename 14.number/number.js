

let num1 = 10;
console.log(typeof num1,num1);

let num2 = 10.5;
console.log(typeof num2,num2);

let num3 = Number("10");
console.log(typeof num3);

let num4 = Number("10abc");
// console.log(num4);              //NaN(not a number)
console.log(typeof num4);


//!     prompt()

// when we are taking any value by using prompt, the type of the value will the string.

// let a = Number(prompt("enter the 1st no: "));
// let b = Number(prompt("enter the 2nd no: "));

// alert(a+b);


//!     Number Methods

//!     1.parseInt()
// parseInt()  is used for extract only number from the string it will stop when the character is present before the number it will taken.

let num5 = Number.parseInt("1b0abc")
console.log(num5);          //op: 10

//!     2.parseFloat()

let num6 = Number.parseFloat("3.8a0abc")
console.log(num6);          //op: 3.8

