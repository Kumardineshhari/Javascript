//!             JSON    


//! defintion

// JSON(Javascript Object Notation) is a lightweight data-interchange format.
// that is easy for humans to read and write, and easy for machines to parse and generate.

//! Advantages of JSON:

//? Human-Readable:
// JSON's structure is easy for developers to understand and write.

//? Lightweight:
// JSON is a minimal format that reduces the size of the data being transmitted.

//? language-Independent:
// JSON can be used with many programming language, including Javascript,python, ruby,java,etc.


//!     1. JSON.stringify()
// it will convert the javascript object to JSON

let obj ={
    sid:1,
    sname: 'a',
    age: 10,
    skills:['java','sql','javascript'],
    address:{
        city:"chennai",
        pin:632001
    }
}

console.log(obj);
let jsondata = JSON.stringify(obj);
console.log(jsondata);

//!     2. JSON.parse()
// it will convert the JSON into javascript object 
// the typeof JSON is "string".

let jsonparse = JSON.parse(jsondata)
console.log(jsonparse);

