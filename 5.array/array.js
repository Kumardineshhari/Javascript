// !    how to declare array

let arr = [20,'hello', false,[5,6]]
console.log(arr);          //op: [20, 'hello', false, Array(2)]

// !    how to know the length of the array

console.log(arr.length);

// !    Methods in Array

//!   1.  push()
// it will add element at the end of the array.
// it will return the modified length of the array.

let arr1 = [10,20,30,40]
let arr2 = arr1.push(50)
console.log(arr1);          //op: [10, 20, 30, 40, 50]
console.log(arr2);          //op: 5

//!   2.  pop()
// it will remove the element at the end
// it will return the removed element

let arr3 = [10,20,30,40]
arr3.pop()                  //op: 40 (removed element)
console.log(arr3);          //op: [10, 20, 30]


//!   3. unshift() 
// this method is used to add element at the starting of the array.
// it will return the modified length of the array.

let arr4 = [10,20,30]
arr4.unshift(5)             //op: 5 (add new element at the start of array)
console.log(arr4);          //op: [5, 10, 20, 30]

//!    4. shift()
// this method is used to remove the element from the starting of the array.
// it will return removed element.

let arr5 = [2,4,5,6]
arr5.shift()                //op: 2 (removed the starting array)
console.log(arr5);          //op: [4,5,6]

//!    5. includes()
// it will check whether the given element is present or not , if the element is present it will give true otherwise it will give false.

console.log(arr5.includes(4));      //op: true
console.log(arr5.includes(2));      //op: false

//!    6. indexof()
// it is used to give the index of the specified element
// if the element is not present then it will give -1.

console.log(arr5.indexOf(5));       //op: 1(indexof value)

//!    7. concat()
// this method is used to combined two or more than two arrays and it will return one new array.

let arr6 = ['hi', 'hello', 'bye']
let combinearray = arr6.concat(arr5)
console.log(combinearray);

//!    8. reverse()
// reverse method is used to reverse the given array
// it will modify the original array.
let arr7 = ['how','are','you']
let revarray = arr7.reverse()
console.log(revarray);          //op: ['you', 'are', 'how']
console.log(arr7);              //op: ['you', 'are', 'how']

//!    9. join()
// it is used to convert array to string.\

let arr8 = ['h','e','l','l','o']
console.log(arr8.join(""));     //op: hello

//!   how to reverse any string by using in-built method

let originalstring = "hello"
let arraystring = originalstring.split("")
let reversestring = arraystring.reverse()
let reversedstring = reversestring.join("")
console.log(reversedstring);            //op: olleh

//!     10. slice()
// it used to extract the element from the array
// it as 2 parameter startindex and endindex
// it will not take the endindex and it will not modified the original array

//!     11.splice()
// it is modified the original array
// it as 3 parameter startindex and endindex and replace element


let arr9 = [10,20,30,40,50,60,70]
// it is for removing
arr9.splice(2,2)
console.log(arr9);          //op: [10, 20, 50, 60, 70]


let arr10 = [10,20,30,40,50,60,70]
// it will do replace after remove
arr10.splice(2,3,'hello')
console.log(arr10);         //op: [10, 20, 'hello', 60, 70]


let arr11 = [10,20,30]
arr11.splice(2,0,25)
console.log(arr11);         //op: [10, 20, 25, 30]

