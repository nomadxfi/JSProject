/* Задание:
1) Создать функцию showMyDB, которая будет проверять свойство private. Если стоит в позиции
false - выводит в консоль главный объект программы
2) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
*/

'use strict';

// let numberOfFilms;
//
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы посмотрели?','');
//
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы посмотрели?','');
//     }
// }
//
// start();

const personalMovieDB = {
    // count: numberOfFilms,
    // movies: {},
    // actors: {},
    genres: [],
    private: false,
};

// function rememberMyFilms() {
//     for (let i = 0;i < 2; i++) {
//         const a = prompt('Какой фильм?',''),
//             b = prompt('На сколько его оценит?','');
//
//         if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
//             personalMovieDB.movies[a]=b;
//             console.log('done')
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// // rememberMyFilms();
//
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено мало фильмов');
//     } else if (personalMovieDB >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// // detectPersonalLevel();

// console.log(personalMovieDB);

/*
1) Создать функцию showMyDB, которая будет проверять свойство private. Если стоит в позиции
false - выводит в консоль главный объект программы
*/

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    // if (personalMovieDB.private === false) {
    //     console.log(personalMovieDB);
    // }
}
showMyDB(personalMovieDB.private);

/*2) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres*/

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i - 1] = genre;
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
        console.log('запись добавлена');
        console.log(personalMovieDB);
    }
}

writeYourGenres();