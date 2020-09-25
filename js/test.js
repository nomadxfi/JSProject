'use strict';

// function checkAge(age) {
//     if (age) {
//         return confirm('Sure!?')
//     }
// }
//
// let age = prompt('How old are you?','');
//
// if (checkAge(age>=18)) {
//     alert('Access');
// } else {
//     alert('Denied');
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Are u sure?');
// }
// function checkAge(age) {
//     return (age >18) || confirm('Are u sure?');
// }

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
//
// }
// console.log( min(2,5));
// console.log( min(3,-1));
// console.log( min(1,1));

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x,n));
}

// function pow(a, b) {
//     if (b > 0 && (b % 1) == 0)
//         return (a ** b);
//     else
//         return `Округлите число ${b} до натурального`;
// }
//
// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(3, 100));

// let x = prompt('Введите основание степени','1');
// let n = prompt('Введите показатель степени','1');
//
// function pow(x, n) {
//     let result = x;
//     while (n > 1) {
//         result *= x;
//         n--;
//     }
//     return result;
// }
//
// alert (pow(x,n));

//Короткое решение задачи на степень числа

// function pow() {
//     let x = prompt('x?', '');
//     let n = prompt('n?', '');
//
//     return (n < 1 || x === null || n === null) ? false : (x ** n);
// }
//
// alert(pow());