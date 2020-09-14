'use strict';

//callback функция которая должна быть выполена после того как другая функция завершила свое выполение

// function first() {
//     //do smth;
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }
//
// function second() {
//     console.log(2);
// }
//
// first();
// second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}!`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); //не вызываем функцию done, а передаем чтобы она в дальнейшем была использована как callback ф-ция

// learnJS('JavaScript', function () {
//     console.log('Я прошел этот урок!');
// });