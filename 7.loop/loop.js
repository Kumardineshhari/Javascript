
let students = [
    {
        sid:1,
        sname: 'a',
        age: 10,
        skills:['java','sql','javascript'],
        address:{
            city:"chennai",
            pin:632001
        }
    },
    {
        sid:2,
        sname: 'b',
        age: 20,
        skills:['java','sql','javascript'],
        address:{
            city:"vellore",
            pin:632001
        }
    },
    {
        sid:3,
        sname: 'c',
        age: 30,
        skills:['java','sql','javascript'],
        address:{
            city:"ranipet",
            pin:632001
        }
    },

]
students.map((stu)=>{
    console.log(stu.address.city);
    
})

for(let i=0;i<students.length;i++)
{
    console.log(students[i].address.city)
}

for(let ele in students){
    console.log(students[ele].skills);
    
}


//!     for-in loop for array
// for-in loop in array it will take index value..
// for object for-in loop will take the keys(properties)..

let arr = [10,20,30,40,50]

for(let ele in arr)
{
    console.log(arr[ele]);          //it will print the vlaues
    
}

//!     for-in loop for object
let obj = {
    name: "dinesh",
    age : 21,
    city: "chennai"
}

for(let ele in obj)
{
    console.log(ele);       //takes the keys
    
}

//!     for-in loop for string
let str = 'hello'
for(let ele in str)
{
    console.log(ele);       //it will print the indexs
    
}

//!     for-of loop for array
// for-of will take all eh element of the array
// we can not for-of loop for objects

for(let ele of arr){
    console.log(ele);               //it will print the values
    
}
//!     for-of loop for obj
// for(let ele of obj){
//     console.log(ele);            //it is not possible
    
// }

//!     for-of loop for string
let str1 = 'hello'
for(let ele of str1)
{
    console.log(ele);               //it will print the character
    
}



