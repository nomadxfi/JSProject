'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

console.log(box);
box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[2].style.backgroundColor = 'purple';

const num = '700px';
box.style.cssText = `background-color: black; width: ${num}`;

//цикл переберает все сердечки
// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'yellow'; //постепенно получаем все элементы
// }

hearts.forEach(item => { //назовем каждое средце как item, больше аргументы не нужны
    item.style.backgroundColor = 'green';
})

const div = document.createElement('div'); //создаем новый элемент div
// const text = document.createTextNode('Welcome!');

div.classList.add('black'); //создаем класс black

wrapper.append(div) // div black появляется в классе wrapper

//как вписать в этот див текст c html тэгами:
div.innerHTML = "<h2>Hello!</h2>";
div.insertAdjacentHTML('afterend','<h2>Good day!</h2>'); //добавить html элемент (первым аргументом куда именно добавляется, вторым - что добавляется)

//тоже самое но с простым текстом
// div.textContent = 'Ciao tutti!';

//нужно добавить div в конец body:
// document.body.append(div);
// document.querySelector('.wrapper').append(div);

// wrapper.prepend(div); //метод prepend вставляет элемент в начало

// hearts[0].before(div);
// hearts[0].after(div);

// circles[2].remove(); //удаление элемента из документа

hearts[0].replaceWith(circles[2]); //заменяем один элемент другим