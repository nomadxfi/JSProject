'use strict';

//получение элемента по id
const box = document.getElementById('box');

console.log(box);

//получаем все кнопки:
const btns = document.getElementsByTagName('button');

console.log(btns[1]); //или получаем/обращаемся к кнопке №2

//получение элемента по css классу:
const circles = document.getElementsByClassName('circle');
console.log(circles);

//современный стандрат. получаем любой css селектор
const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

//вывести каждый элемент, который находтся в псевдомассиве
hearts.forEach(item => {
    console.log(item)
})

//получаем один элемент со страницы
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);