//! HigherOrder method

//!   1.  forEach()
// it can take 3 parameters 1.element, 2.index , 3.array
// 1st parameter takes the element within the array..
// 2nd parameter takes the index of the array..
// 3nd parameter takes the complety array..

// forEach method can not return anything..

let arr = [10,20,30,40,50]

arr.forEach((ele, a,i) => {
    console.log(ele,a,i);
    
});

//!     print greater than 30 in the array

let arr2 = [10,20,30,40,50]
let newarr = []
arr2.forEach((ele) => {
    if(ele>30){
        newarr.push(ele);
    }      
})
console.log(newarr);            //op: [40, 50]

//!     add 100 of all the element in the array

let arr3 = [10,20,30,40,50]
let addarr = []
arr3.forEach((ele) =>{
    addarr.push(ele+100);
})
console.log(addarr);            //op: [110, 120, 130, 140, 150]

//!     add all the element and return the value

let arr4 = [10,20,30,40,50]
let sum = 0;
arr4.forEach((ele)=>{
    sum+=ele;
})
console.log(sum);              //op: 150

//!    2. filter()  method
// it will return the element.
// it can also take 3 parameter but we need only 1 parameter.

let filterarr = arr2.filter ((ele)=>{
    return ele > 30
})
console.log(filterarr);       //op: [40, 50]

//!     filter() method in one line

let altfilter = arr2.filter((ele)=>ele > 30)
console.log(altfilter);         //op: [40, 50]

//!    3. Map() method
// using map() also we can travse..
// it can also take 3 parameters..
// map can return element..
// we can do all the arithmethic operations also..

let maparr1 = arr3.map((ele)=> {
    return ele + 100
})
console.log(maparr1);           //op: [110, 120, 130, 140, 150]

//!     Map() method in one line
let maparr2 = arr3.map((ele)=>ele+100)
console.log(maparr2);            //op: [110, 120, 130, 140, 150]


//!     4. reduce()
// it can take 4 parameter..
// 1st accomulated the default value is 0.
// it can return the element..


let redarr = arr.reduce((acc,ele)=>{
    return ele + acc
})
console.log(redarr);            //op: 150

let addred = arr.reduce((acc,ele)=> ele + acc)
console.log(addred);            //op: 150

//!     5. sort()

let unsortedarr = [4,1,2,5,6,3]

let asc = unsortedarr.sort((a,b)=>{
    return a - b
})
console.log(asc);               //op: [1, 2, 3, 4, 5, 6]

let desc = unsortedarr.sort((a,b)=> b - a)

console.log(desc);              //op: [6, 5, 4, 3, 2, 1]
