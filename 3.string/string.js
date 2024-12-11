
let str1 = 'hello';
let str2 = "HELLO";
let str3 = 'hello';


// how to know the length
// it is used to find out the length of the string.
let length = str1.length
console.log(length);            //op: 5

// String method


// 1. toUpperCase()
// it is used to convert the string to uppercase and it will return one new string;

let upper = str1.toUpperCase()
console.log(upper);         //op: HELLO

str1.toUpperCase();    //it will not excute it did not store
console.log(str1);          //op: hello

// 2. toLowerCase()
/// it is used to convert the string to lowercase and it will return one new string;

str2.toLowerCase()      //it will not excute it did not store
console.log(str2);       //op: HELLO

let lower = str2.toLowerCase()        //it will store the value
console.log(lower);         //op: hello

// 3. indexOf()
//it is used to give the index of the particular character
//it will take the first occurance.

let str4 = 'hello how are you';

let index = str4.indexOf('o');
console.log(index);             //op: 4

// 4. charAt()
//this method is used to give the character of the specified index


let char = str4.charAt(3);
console.log(char);

// 5. concat()
// it is used to combine two or more string and it will return one new string.
let str5 = 'hello'
let str6 = 'how are you'
let combine = str5.concat(" ",str6,' dinesh');
console.log(combine);       //op: hello how are you dinesh

// 6. trim()
// it is used to remove  the white spaces from both the sides of the string and it will return one new string.

let str7 = '  hello  '
console.log(str7.length);       //op: 9

let str8 = str7.trim()
console.log(str8);              //op: hello
console.log(str8.length);       //op: 5

// 7. includes()
// it is used to check whether any character or string is present or not.
// if it is present it will give true otherwise it will give false.

console.log(str7.includes('o'));        //op: true
console.log(str7.includes('i'));        //op: false

let str9 = 'hello how are you'
console.log(str9.includes('you'));      //op: true

// 8. split()
// it is used to convert any string to array
let str10 = 'i am fine'

let array = str10.split(' ')
console.log(array);         //op: ['i', 'am', 'fine']

// 9. slice()
// it is used to extract the character or string from another string.
// it will take 2 parameters StartIndex and EndIndex.
// it will not take EndIndex value.

let str11 = 'hello how are you'
console.log(str11.slice(2,8));      //op: llo ho

// if we dont give the endindex, then from the starting it will print till the length of the string.

console.log(str11.slice(2));

// we can give negative value as an index, then it will take from the last.

console.log(str11.slice(-3,-1));        //op: yo

// we cant give startindex  greaterthan(>) endindex

console.log(str11.slice(4,1));          //op: empty(empty output)


// 10. substring()
// it is also used to extract the string from another string.
// it will take 2 parameter startindex and endindex.
// it will not take EndIndex value.

// we cant give negative value it will be converted to 0index.
let str12 = 'hello how are you'
console.log(str12.substring(-4));       //op: hello how are you   

// here we can give startindex  > endindex.
// it will swap these 2 index.
console.log(str12.substring(4,1));      //op: ell
