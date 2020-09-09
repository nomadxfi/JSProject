'use strict';

// //решение задачи с циклом while
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false,
// };
//
// let i = 0;
//
// while (i < 2) {
//     const a = prompt('Какой последний фильм вы смотрели?', ''),
//         b = prompt('Оцените его в баллах', '');
//     i++;
//
//     // personalMovieDB.movies[a]=b;
//     // console.log(personalMovieDB);
//
//     // console.log(`Просмотрено фильмов: ${numberOfFilms}`);
//     // console.log(`Фильм: ${a}`);
//     // console.log(`Оценка: ${b}`);
//
//     if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error')
//         i--;
//     }
// }

//решение задачи с помощью do

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
}

let i = 0;

do {
    const a = prompt('Какой последний фильм вы смотрели?',''),
        b = prompt('Оцените его в баллах');
    i++;

    if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB.movies[a]=b;
        alert('done');
        console.log(personalMovieDB);
    } else {
        alert('error');
        i--;
    }
}
while (i < 2);