//варианты написание обработчика событий:

/*********************************************************************************************************************/
//1 вариант (не используется) В html вёрстке указывается параметром

// <button onclick="alert()">Нажми меня</button>

/*********************************************************************************************************************/
//2 вариант (не позволяет создавать несколько действий):

// const btn = document.querySelector('button'); //получаем кнопку

// btn.onclick = function () { //устанавливаем тот элемент, на который нужно повесить событие. используем св-во дом-дерева, клторый называется onclick
//     alert('Push me');
// };
//
// btn.onclick = function () {
//     alert('Second click me');
// };

/*********************************************************************************************************/
//3 вариант (оптимальный, который позволяет создавать несколько действий):
// btn.addEventListener('click', ()=> { //1арг передаем название события, 2арг колбэк функцию
//     alert('First click');
// })
//
// btn.addEventListener('click', ()=> { //1арг передаем название события, 2арг колбэк функцию
//     alert('Second click');
// })
//
// //событие при наведении мышки
// btn.addEventListener('mouseenter', ()=> { //1арг передаем название события, 2арг колбэк функцию
//     alert('Second click');
// })

//событие при действии

// const deleteElement = (event) => {
//     console.log(event.target);
//     event.target.remove();//функция удаляет событие
// }
// btn.addEventListener('mouseenter', (event)=> { //1арг передаем название события, 2арг колбэк функцию
//     console.log(event.target); //указывает где именно в верстке срабатывает событие
//     // console.log('mouse');
// })
//
// btn.removeEventListener('click',deleteElement);

//отменяем переход по ссылке
// const link = document.querySelector('a');
//
// link.addEventListener('click', function (event) {
//     event.preventDefault();
//     // console.log(event.target);
// })

//навесить событие на все кнопки через цикл
const btns = document.querySelectorAll('button');

const pop = () => {
    event.preventDefault();
    console.log('Done!!!');
}

btns.forEach(btn => {
    btn.addEventListener('click', pop, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target);
})

// пройти по всему массиву с кнопками и выполнить какое-то действие с ними

const btns = document.querySelectorAll('button'); //создаем переменную для обработчика событий со всеми кнопками

const pop = (event) =>{ //функция(ивент) который сообщает про клики и указывает где были клики в верстке
    console.log('Click!');
    console.log(event.target);
}
//сам массив, который перебирает все кнопки в верстке
btns.forEach(btn => {
    btn.addEventListener('click',pop,{once: false});

})