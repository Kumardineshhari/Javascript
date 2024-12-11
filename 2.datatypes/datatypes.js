// 1. datatypes in javascript

// i. primitive datatype

let num1 = 20;
console.log(num1);
console.log(typeof num1); //number

let num2 = 10.6;
console.log(num2);      //number
console.log(typeof num2); //typeof is used to know the datatype. 

let num3 = Number(20)  // also we can use this is method to declare
console.log(num3);
console.log(typeof num3);

// ii. boolean 

let isplayer = true;
console.log(isplayer);          //true
console.log(typeof isplayer);   //boolean  

let player = Boolean(false);
console.log(player);          //flase
console.log(typeof player);     //boolean


// iii.string

// we can write string in 2 ways
// 1. by using literals


let str1 = "hello";
console.log(str1);          // by using double quotation
console.log(typeof str1);

let str2 = 'dinesh';
console.log(str2);          //by using single quotation
console.log(typeof str2);

let str3 = `kumar`;
console.log(str3);          //by using back tick
console.log(typeof str3);


// 2. by using object

let strob = new String("hello dinesh");
console.log(strob);
console.log(typeof strob);

// undefined

let num ;
console.log(num);
console.log(typeof num);

// null

let strn = null;
console.log(strn);
console.log(typeof strn);

// bigint

let num4 = BigInt(45)
console.log(num4);
console.log(typeof num4);


// ii. non-primitive datatypes

// 1. array

let arr = [3,"hi",true,undefined]
console.log(arr);


// 2.function

function add() {
    console.log("hello i am add function");
    
}
add()

// 3. object

let student={
    name:'dinesh',
    id:108,
    phone:8610975149,
    skill:['java','sql']
}
console.log(student);
