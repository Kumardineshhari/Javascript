//!     how to declare object

let object = {
    name : "pen",
    price : 20,
    color :['black','red','black'],
    do: ()=>{
        console.log(" i can write");
        
    }
}

//!     how to access

console.log(object.price);      //op: 20
// console.log(object["name"]);    //also we can calling the string
console.log(object.name);       //op: pen

//!     how to print the object

console.log(object);            //op:{name: 'pen', price: 20, color: Array(3), do: ƒ}

//!     how to change the value

object.price = 30;
console.log(object.price);

//!     how to add new properties

object.brand = "camlin"
console.log(object.brand);
console.log(object);

//!     how to delete

delete object.brand;
console.log(object);

//!.    how to add value in array

object.color.push("'green")
console.log(object.color);

//!     how to call function inside the object

// console.log(object.do());       // it returns the wrong value
object.do()

// !                 Object Mehod

let student = {
    sname : "dinesh",
    age : 21,
    skills:['java','sql','javascript'],
    address: {
        city: 'chennai',
        pin: 632001
    }
}

console.log(student.address.city);

//!     1. Object keys()

// it will return array where all the keys will be stored as array elements.

let key = Object.keys(student)
console.log(key);

//!     2. Object value()

// it will return one array where all the values will be stored as array elements.

let value = Object.values(student)
console.log(value);

//!     3. Object.entries()

// it will return one array there all the key and value pairs will be stored in each array.

let key_value = Object.entries(student)
console.log(key_value);

//!     4. Object.freeze()
// this method will freeze the object means we can't do add,delete or modification of the object.

console.log(student);

Object.freeze(student);

student.phone = 8610975149;         // it will not add any element after using the freeze()

delete student.age                  // it will not add any element after using the freeze()

console.log(student);                  // nothing changed


//!     5. Object.isFrozen()
// it used to check whether the object is Frozen or not if it is Frozen it will give "true" otherwise it will give false..


console.log(Object.isFrozen(student));          // op: true


let student1 = {
    sname : "dineshkumar",
    age : 20,
    skills:['java','sql','html','css','javascript'],
    address: {
        city: 'vellore',
        pin: 632001
    }
}

//!     6. Object.seal()
// it is also similar  to Object.Freeze() method but here we can modify the property of the object. we can not delete or add any elements.

console.log(student1);

Object.seal(student1)

delete student1.age;

student1.phone = 8610975149

console.log(student1);

//!     7. Object.isSealed()

console.log(Object.isSealed(student1));  //op: "true" it is used to know whether the object is sealed or not.

//! how to combine 2 Objects
//!     8. Object.assign()
// it is used to combine 2 or more objects and it will return one new object.
// 1st give one empty object to store the combined objects in it.
let obj1 = {
    name: 'abc',
    age: 10
}

let obj2 = {
    city: 'chennai',
    pin: 632001 
}

let combinedobj = Object.assign({}, obj1,obj2)
console.log(combinedobj);
console.log(obj1);

//!    9. hasOwnProperty()
// it is used to check any property is present or not inside the object.

console.log(obj2.hasOwnProperty("pincode"));    //false
console.log(obj2.hasOwnProperty("pin"));    //true



