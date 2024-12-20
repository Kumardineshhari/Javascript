//!     array destructure

let arr = [10,20,30];

let [a,c,b] = arr;
console.log(a);     //op: 10
console.log(b);     //op: 30
console.log(c);     //op: 20


//!     rest parameter(...)
// the rest parameter is used to group the remaining elements into an array.
// it collects "the rest" of the arguments that were not explicitly specified.
// the rest paramter is required by the three dots(...)

let arr1 = [60,70,80,90,100];

let [m,n,...o] = arr1;
console.log(m);      //op:60
console.log(n);     //op: 70
console.log(o);     //op: [80, 90, 100]

//!     spread operator
// the spread operator is javascript allows to expand an array, object, or iterable into individual elements.
// it is often used to copy,merge, or pass elements.
// the spread operator is represented by three dots(...).


let arr2 = [10,20,30,40,50];

let combinedarr = [...arr2,...arr1];
console.log(combinedarr);       //op: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//!     rest parameter example using function

function person(firstname, ...details){
    console.log(firstname);     //op: dinesh
    console.log(details);       //op: ['chennai', 632001, 21] 
}
person("dinesh","chennai",632001,21)

//!     spread operator example using object

let obj1 = {
    name: 'abc',
    age: 10
}

let obj2 = {
    city: 'chennai',
    pin: 632001 
}

let obj3 = {...obj1,...obj2};
console.log(obj3);

//!     shallow-copy

let arr3 = [10,20,30,40,50];

let copy = arr3;
copy.push(10);
console.log(arr3);
console.log(copy);


//!     deep-copy

let arr4 = [40,50,60,70,80];

let deepcopy = [...arr3]
deepcopy.unshift(90);
console.log(arr4);
console.log(deepcopy);








