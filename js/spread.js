'use strict';

// function copy(mainObj) {
//     let objCopy = {};
//
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//
//     return objCopy;
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x:7,
//         y:4,
//     }
// }
//
// const newNumbers = copy(numbers);
//
// newNumbers.a = 10;
//
// // console.log(newNumbers);
// // console.log(numbers);
//
// const add = {
//     d: 17,
//     e: 20,
// }
//
// const clone = Object.assign({},add);
//
// clone.d = 55;
//
// // console.log(add);
// // console.log(clone);
//
// const oldArray = ['a','z','y'];
// const newArray = oldArray.slice(); //метод, который копирует старый массив
//
// newArray[1] = 'abra';
// console.log(newArray);
// console.log(oldArray);

//оператор разворота spread (разворачивает структуру и превращает ее в набор каких-то данных)

const  video = ['youtube', 'vimeo', 'netflix'],
        blogs = ['wordpress', 'tilda', 'github'],
        internet = [...video, ...blogs, 'instagram', 'facebook']; //spread пишется как ...(троеточие)

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];

log(...num);

const array = ['a', 'b'];

const newArray = [...array];

const q = {
    one: 1,
    two: 2,
    three: 3,
}

const newObj = {...q};